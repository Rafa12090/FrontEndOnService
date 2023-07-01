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
                    <label for="eventName"> Nombre del evento </label>
                    <pv-inputtext v-model="event.name" type="text" id="eventName" class="input-color" style="width: 700px;" required/>
                </div>

                <div class="order">
                    <label for="mediaFile"> Archivos multimedia </label>
                    <pv-inputtext v-model="event.image" type="text" id="mediaFile" class="input-color" style="width: 700px; padding: 11px;"/>
                </div>
            </div>

            <div class="order">
                <label for="eventDescription"> Descripción del evento </label>
                <pv-inputtext v-model="event.description" type="text" id="eventDescription" class="input-color" required/>
            </div>

            <div class="input-min-container">
                <div class="order">
                    <label for="eventPrice"> Precio de entrada </label>
                    <pv-inputnumber v-model="event.price" id="eventPrice" style="margin-top: 7px; margin-bottom: 7px; width: 700px;" :inputStyle="{ backgroundColor: '#abd1b5', borderColor:'#abd1b5'}" required/>
                    <span id="errorPrecio" class="error"></span>
                </div>

                <div class="order">
                    <label for="eventEndTime"> Fecha </label>
                    <pv-inputtext v-model="event.event_date" type="date" class="input-color" style="width: 700px;" id="eventEndTime" required/>
                </div>
            </div>

            <div class="input-min-container">
                <div class="order">
                    <label for="eventStartTime"> Hora de inicio </label>
                    <pv-inputtext v-model="event.start_time" type="time" class="input-color" style="width: 700px;" id="eventStartTime" required/>
                </div>

                <div class="order">
                    <label for="eventEndTime"> Hora de finalización </label>
                    <pv-inputtext v-model="event.end_time" type="time" class="input-color" style="width: 700px;" id="eventEndTime" required/>
                </div>
            </div>
        </template>

        <template #footer>
            <div class="button-save">
                <pv-button
                    :label="'Save'.toUpperCase()"
                    icon="pi pi-check"
                    @click="saveEvent"
                    outlined
                />
            </div>
        </template>
    </pv-card>
</template>

<script>
import { mapState } from 'vuex';
import { EventsApiService } from "@/services/events-api.service";
import { useRouter } from 'vue-router';
import UserToolbar from "@/components/user-toolbar.component.vue";
export default {
    name: "create-event.component",
    components: {UserToolbar},
    data() {
        return {
            events: [],
            event: {},
            submitted: false,
            eventsService: null,
            router:null
        }
    },
    created() {
        this.eventsService = new EventsApiService();
        this.event = {};
        this.submitted = false;
        this.router = useRouter();
        this.event.manager_id = this.sessionData.id;
    },
    computed: {
        ...mapState(["sessionData"])
    },

    methods: {
        getDisplayableEvent(event) {
            return event;
        },
        getStorableEvent(displayableEvent) {
            return {
                id: displayableEvent.id,
                name: displayableEvent.name,
                description: displayableEvent.description,
                price: displayableEvent.price,
                image: displayableEvent.image,
                event_date: displayableEvent.event_date,
                start_time: displayableEvent.start_time,
                end_time: displayableEvent.end_time,
                manager_id: displayableEvent.manager_id
            };
        },
        findIndexById(id) {
            console.log(`current id: ${id}`);
            return this.events.findIndex((payment) => payment.id === id);
        },
        saveEvent() {
            this.submitted = true;

            this.event.id = 0;
            console.log(this.event);
            this.event = this.getStorableEvent(this.event);
            this.eventsService
                .create(this.event)
                .then((response) => {
                    this.event = this.getDisplayableEvent(response.data);
                    this.$emit("event-created", this.event);
                    this.events.push(this.event);
                    this.$toast.add({
                        severity: "success",
                        summary: "Successful",
                        detail: "Event Created",
                        life: 3000,
                    });
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
            });

            this.event = {};
            this.next();
        },
        next() {
            this.router.push('/events');
        }
    }
};
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

.input-min-container {
    display: flex;
    justify-content: space-between;
}

.input-min-container-two {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.input-color {
    background-color: #abd1b5;
    border-color: #abd1b5;
    margin-top: 7px;
    margin-bottom: 7px;
}

.button-save {
    display: flex;
    justify-content: center;
    margin-top: -10px;
}
</style>