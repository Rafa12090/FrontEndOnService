<template>
    <div style="position: relative; margin-top:-10px;">
        <div style="position: static; border-bottom: 2px solid #79b791;">
            <UserToolbar></UserToolbar>
        </div>
    </div>

    <div class="event-list">
        <div>
            <h1 class="title"> Eventos comprados </h1>
        </div>

        <div>
            <pv-dataview :value="events" class="card">
                <template #list="slotProps">
                    <div class="card" style="margin-top: 10px; background-color: #242422; padding-top:10px; border-color:#242422;">
                        <div class="card-body">
                            <div class="image-container">
                                <img class="" :src="`${slotProps.data.image}`" :alt="slotProps.data.name" />
                            </div>

                            <div class="card-info">
                                <div class="info">
                                    <div class="">{{ slotProps.data.name }}</div>
                                    <div style="margin-top: 20px;"> {{slotProps.data.description }} </div>
                                </div>

                                <div class="info">
                                    <router-link :to="'/events/' + slotProps.data.id">
                                        <pv-button class="ver-pagina-button" size="small">Ver página</pv-button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </pv-dataview>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { PaymentsApiService } from "@/services/payments-api.service";
import { EventsApiService } from "@/services/events-api.service";
import UserToolbar from "@/components/user-toolbar.component.vue";
export default {
    name: "normal-events.component",
    components: {UserToolbar},
    data() {
        return {
            events: [],
            paymentsService: null,
            eventsService: null
        };
    },
    created() {
        this.paymentsService = new PaymentsApiService();
        this.eventsService = new EventsApiService();
        this.paymentsService.getAll().then((response) => {
            const userPayments = response.data.filter((payment) => payment.user_id === this.sessionData.id);
            const eventIds = userPayments.map((payment) => payment.event_id);

            this.eventsService.getAll().then((response) => {
                this.events = response.data.filter((event) => eventIds.includes(event.id));
            });
        });
    },
    computed: {
        ...mapState(["sessionData"])
    },
};
</script>


<style scoped>
.card-body {
    display: flex;
    padding: 10px;
}

.image-container {
    width: 300px;
}

.image-container img {
    padding-right: 10px;
    width: 100%;
    height: auto;
}

.ver-pagina-button {
    margin-top: 10px;
    font-size: 18px;
    color: #79B791;
    cursor: pointer;
    background-color: #242422;
    border-color: white;
}

.info {
    flex: 1;
    padding-left: 10px;
}

.info p {
    margin: 0;
    color: #79B791;
}

.line {
    height: 2px;
    background-color: #79B791;
}

.add-event {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
}

.title {
    font-size: 40px;
    margin-bottom: 10px;
    color: #79B791;
    text-align: left;
}

.event-list {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
}

.button-add {
    flex-direction: column;
    background-color: #242422;
    border-color: white;
    color: #79B791;
    border-style: dashed;
}

.card-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>