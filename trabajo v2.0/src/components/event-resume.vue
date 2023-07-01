<template>
    <div style="position: relative; margin-top:-10px;">
        <div style="position: static; border-bottom: 2px solid #79b791;">
            <UserToolbar></UserToolbar>
        </div>
    </div>

    <div class="main-container" style="margin-top: 30px;">
        <div class="image-container">
            <img :alt="event.name" :src="event.image" class="event-image">
        </div>
        <div class="text-center title" >{{ event.name }}</div>
        <div class="text-center description">{{ event.description }}</div>
    </div>

    <div class="main-container">
        <div class="text-center description">
            Precio de entrada: s/. {{ event.price }}
        </div>
        <div class="button-entrada text-center">
            <router-link :to="`/payment/${event.id}`">
                <pv-button class="text-center" size="large" label="Comprar entradas" severity="success" outlined />
            </router-link>
        </div>
    </div>
</template>

<script>
import { EventsApiService } from "@/services/events-api.service";
import { useRoute } from "vue-router";
import UserToolbar from "@/components/user-toolbar.component.vue";

export default{
    name: "event-resume.component",
    components: {UserToolbar},
    data(){
        return {
            id:0,
            event: {},
            eventsService: null,
        };
    },
    created(){
        this.eventsService = new EventsApiService();

        let route = useRoute();
        const id= route.params.id;

        console.log("this.id :" + id);
        console.log("route.params.id :" + id);
        console.log(id);
        this.eventsService.getById(id).then((response)=> {
            this.event= response.data;
            console.log(response.data);
        });
    },
    methods:{
    }
}
</script>

<style scoped>

.event-image{
    width: 70%;
    margin-top: -10%;
}

.main-container{
    margin: 1%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
}

.title{
    font-size: 48px;
    color: #79b791;
    padding: 16px 0;
    flex: auto;
}

.description{
    font-size: 24px;
    color: #79b791;
    padding: 16px 2%;
    flex: auto;
}

.button-entrada{
    font-size: 32px;
    padding: 20px 0;
}
</style>