<template>
    <div style="position: relative; margin-top:-10px;">
        <div style="position: static; border-bottom: 2px solid #79b791;">
            <UserToolbar></UserToolbar>
        </div>
    </div>

    <pv-card class="color-box" style="margin-top: -40px;">
        <template #content>
            <div class="input-min-container-two">
                <div class="order">
                    <label for="card-number"> Numero de tarjeta </label>
                    <pv-inputtext id="username" v-model="payment.card_number" aria-describedby="username-help" style="width: 400px;" class="input-color"/>
                    <small id="card-number"> Ingrese su numero de tarjeta. </small>
                </div>

                <div class="order-radio">
                    <div class="radio-position">
                        <pv-radiobutton v-model="payment.type" inputId="ingredient1" name="pizza" value="VISA" />
                        <img src="../assets/payment/visa.jpg" alt="Visa" width="60" height="40">
                    </div>

                    <div class="radio-position">
                        <pv-radiobutton v-model="payment.type" inputId="ingredient2" name="pizza" value="MASTER CARD" />
                        <img src="../assets/payment/mastercard.jpg" alt="MasterCard" width="60" height="40">
                    </div>

                    <div class="radio-position">
                        <pv-radiobutton v-model="payment.type" inputId="ingredient3" name="pizza" value="PAYPAL" />
                        <img src="../assets/payment/paypal.jpg" alt="PayPal" width="65" height="40">
                    </div>
                </div>
            </div>

            <div class="input-min-container">
                <div class="order">
                    <label for="direction"> Direccion de facturacion </label>
                    <pv-inputtext id="username" v-model="payment.direction" aria-describedby="username-help" style="width: 700px;" class="input-color"/>
                    <small id="direction"> Ingrese la direccion de facturacion. </small>
                </div>

                <div class="order">
                    <label> Telefono </label>
                    <div class="input-container">
                        <pv-inputnumber v-model="payment.phone" :useGrouping="false" placeholder="000000000" style="width: 700px;" :inputStyle="{ backgroundColor: '#abd1b5', borderColor:'#abd1b5'}"/>
                    </div>
                </div>
            </div>

            <div class="input-min-container">
                <div class="order">
                    <label for="name"> Nombre </label>
                    <pv-inputtext id="username" v-model="payment.user_name" aria-describedby="username-help" style="width: 700px;" class="input-color"/>
                    <small id="name"> Ingrese su nombre. </small>
                </div>

                <div class="order">
                    <label for="last-name"> Apellidos </label>
                    <pv-inputtext id="username" v-model="payment.user_lastname" aria-describedby="username-help" style="width: 700px;" class="input-color"/>
                    <small id="last-name"> Ingrese su apellido. </small>
                </div>
            </div>

            <div class="order">
                <label for="country"> Pais </label>
                <pv-inputtext id="username" v-model="payment.country" aria-describedby="username-help" style="width: 400px;" class="input-color"/>
                <small id="country"> Ingrese su pais. </small>
            </div>

            <div class="input-min-container">
                <div class="order">
                    <label for="expiry-date"> Fecha de caducidad </label>
                    <pv-inputtext id="username" v-model="payment.expiry_date" aria-describedby="username-help" style="width: 400px;" class="input-color"/>
                    <small id="expiry-date"> mm/aa </small>
                </div>

                <div class="order">
                    <label> Codigo de seguridad </label>
                    <div class="input-container">
                        <pv-inputnumber v-model="payment.security_code" :useGrouping="false" placeholder="000" style="width: 400px;" :inputStyle="{ backgroundColor: '#abd1b5', borderColor:'#abd1b5'}"/>
                    </div>
                </div>

                <div class="order">
                    <label> Codigo Postal </label>
                    <div class="input-container">
                        <pv-inputnumber v-model="payment.postal_code" :useGrouping="false" placeholder="000" style="width: 400px;" :inputStyle="{ backgroundColor: '#abd1b5', borderColor:'#abd1b5'}"/>
                    </div>
                </div>
            </div>
        </template>

        <template #footer >
            <div class="button-save">
                <router-link :to="'/events/' + payment.event_id.toString()">
                    <pv-button
                        :label="'Save'.toUpperCase()"
                        icon="pi pi-check"
                        style="margin-top: -30px;"
                        @click="savePayment"
                        outlined
                    />
                </router-link>
            </div>
        </template>
    </pv-card>
</template>

<script>
import { mapState } from 'vuex';
import { PaymentsApiService } from "@/services/payments-api.service";
import { useRoute } from "vue-router";
import UserToolbar from "@/components/user-toolbar.component.vue";

export default {
    name: "payment.component",
    components: {UserToolbar},
    data() {
        return {
            payments: [],
            payment: {},
            submitted: false,
            paymentsService: null,
        }
    },
    created() {
        this.paymentsService = new PaymentsApiService();
        this.payment = {};
        this.submitted = false;
        let route = useRoute();
        this.payment.event_id = parseInt(route.params.id.toString());
        this.payment.user_id = this.sessionData.id;
    },
    computed: {
        ...mapState(["sessionData"])
    },

    methods: {
        getDisplayablePayment(payment) {
            return payment;
        },
        getStorablePayment(displayablePayment) {
            return {
                id: displayablePayment.id,
                card_number: displayablePayment.card_number,
                type: displayablePayment.type,
                direction: displayablePayment.direction,
                phone: displayablePayment.phone,
                user_name: displayablePayment.user_name,
                user_lastname: displayablePayment.user_lastname,
                country: displayablePayment.country,
                expiry_date: displayablePayment.expiry_date,
                security_code: displayablePayment.security_code,
                postal_code: displayablePayment.postal_code,
                user_id: displayablePayment.user_id,
                event_id: displayablePayment.event_id
            };
        },
        findIndexById(id) {
            console.log(`current id: ${id}`);
            return this.payments.findIndex((payment) => payment.id === id);
        },
        savePayment() {
            this.submitted = true;
            if (this.payment.id) {
                console.log(this.payment);
                this.payment = this.getStorablePayment(this.payment);
                this.paymentsService
                    .update(this.payment.id, this.payment)
                    .then((response) => {
                        console.log(response.data.id);
                        this.payments[this.findIndexById(response.data.id)] =
                            this.getDisplayablePayment(response.data);
                        this.$toast.add({
                            severity: "success",
                            summary: "Successful",
                            detail: "Payment Updated",
                            life: 3000,
                        });
                        console.log(response);
                    });
            } else {
                this.payment.id = 0;
                console.log(this.payment);
                this.payment = this.getStorablePayment(this.payment);
                this.paymentsService
                    .create(this.payment)
                    .then((response) => {
                        this.payment = this.getDisplayablePayment(response.data);
                        this.payments.push(this.payment);
                        this.$toast.add({
                            severity: "success",
                            summary: "Successful",
                            detail: "Payment Created",
                            life: 3000,
                        });
                        console.log(response);
                    });
            }
            this.payment = {};
        }
    }
}
</script>

<style scoped>

.color-box {
    background-color: #242422;
    border-color: #242422;
}

.order {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    color: #79b791;
}

.order-radio {
    display: flex;
    flex-direction: row;
    padding-right: 400px;
}

.radio-position {
    margin-right: 20px;
}

.input-color {
    background-color: #abd1b5;
    border-color: #abd1b5;
    margin-top: 7px;
    margin-bottom: 7px;
}

.input-container {
    background-color: transparent;
    margin-top: 7px;
    margin-bottom: 7px;
}

.input-min-container {
    display: flex;
    justify-content: space-between;
}

.input-min-container-two {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button-save {
    display: flex;
    justify-content: center;
}
</style>


<style>
body {
    background-color: #242422;
}
</style>