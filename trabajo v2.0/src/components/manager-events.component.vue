<template>
    <div style="position: relative; margin-top:-10px;">
        <div style="position: static; border-bottom: 2px solid #79b791;">
            <UserToolbar></UserToolbar>
        </div>
    </div>

    <div class="event-list">
        <div>
            <h1 class="title"> Eventos creados </h1>
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
                            </div>
                        </div>
                    </div>
                </template>
            </pv-dataview>
        </div>

        <div class="line"></div>

        <div class="add-event">
            <router-link to="/create-event">
                <pv-button class="button-add" label="Crear evento" icon="pi pi-plus"></pv-button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { EventsApiService } from "@/services/events-api.service";
import UserToolbar from "@/components/user-toolbar.component.vue";
export default {
    name: "manager-events.component",
    components: {UserToolbar},
    data() {
        return {
            events: [],
            eventsService: null
        };
    },
    created() {
        this.eventsService = new EventsApiService();
        this.eventsService.getAll().then(response => {
            const managerId = this.sessionData.id;

            this.events = response.data.filter(item => item.manager_id === managerId);
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