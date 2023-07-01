<template>
    <div style="position: relative; margin-top:-10px;">
        <div style="position: static; border-bottom: 2px solid #79b791;">
            <UserToolbar></UserToolbar>
        </div>
    </div>

    <div class="p-grid event-list" style="margin-top: -5px;">
        <h1 class="recommendations-title">Recomendaciones</h1>
        <div v-for="event in events" :key="event.id">
            <event-card  class="event-card" :event="event" ></event-card>
        </div>
    </div>
</template>

<script>
import { EventsApiService } from "@/services/events-api.service";
import { FilterMatchMode } from "primevue/api";
import EventCard from "@/components/event-card.component.vue";
import UserToolbar from "@/components/user-toolbar.component.vue";
export default {
    name: "events.component",
    components: {EventCard, UserToolbar},
    data(){
        return {
            events:[],
            filters: {},
            eventsService: null,
            confirmDialog: false,
            selectedEvent: null
        };
    },
    created(){
        this.eventsService = new EventsApiService();
        this.loadEvents(); // Cargar eventos al inicio
        this.initFilters();
    },

    methods:{
        loadEvents() {
            this.eventsService.getAll().then((response) => {
                this.events = response.data;
                console.log(this.events);
            });
        },
        initFilters() {
            this.filters = {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            };
        },
        // Método para manejar el evento de nuevo evento creado
        handleEventCreated(event) {
            this.events.push(event); // Agregar el nuevo evento a la lista
        }
    }
};
</script>

<style scoped>
.event-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
    background-color: #242423;
}

.event-card {
    width: 100%;
    margin-top: 20px;
    border: 3px solid white;
    padding: 10px;
    box-sizing: border-box;
    background-color: #242423;
}

.event-card h4 {
    font-size: 18px;
    margin: 0;
}

.event-card p {
    font-size: 16px;
    margin: 0;
}

.recommendations-title {
    font-size: 40px;
    margin-bottom: 10px;
    color: #79B791;
    text-align: left;
}
</style>