<template>
    <pv-card class="card">
        <template #header>
            <img :alt="event.name" :src="event.image">
        </template>
        <template #title>
            <p>{{ event.name }}</p>
        </template>
        <template #content>
            <p class="flex align-content-start flex-wrap">
                <span class="flex align-items-center justify-content-center">{{ event.name }}</span>
            </p>
            <p class="flex align-content-start flex-wrap mt-4">
                {{ event.description }}
            </p>
        </template>
        <template #footer="slotProps" >
            <router-link :to="'/events/' + event.id">
                <pv-button
                    label="Ver página"
                    class="custom-button text-raised"
                />
            </router-link>
        </template>
    </pv-card>
</template>

<script>
export default{
    name: "event-card.component",
    props:{
        event:null
    },
    data(){
        return {
            eventDialog: false,
            deleteEventDialog: false,
        };
    },
    methods:{
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    width:100%;
    background-color: #242423;
}

.card img {
    width: 300px;
    height: 200px;
}

.custom-button {
    border: 1px solid white;
    background-color: #242423;
}
</style>