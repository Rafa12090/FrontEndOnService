import { createApp } from 'vue';
import { createStore } from 'vuex';
import persistPlugin from "@/persist/persist";

import App from './App.vue'
import PrimeVue from 'primevue/config';
import ToastService from "primevue/toastservice";
import {createRouter, createWebHashHistory} from 'vue-router';

import LandingPageComponent from "@/components/landing-page.component.vue";
import LoginComponent from "@/components/login.component.vue";
import RegisterComponent from "@/components/register.component.vue";
import EventsComponent from "@/components/events.component.vue";
import EventResumeComponent from "@/components/event-resume.vue";
import PaymentComponent from "@/components/payment.component.vue";
import UserEventsComponent from "@/components/normal-events.component.vue";
import ManagerEventsComponent from "@/components/manager-events.component.vue";
import CreateEventComponent from "@/components/create-event.vue";
import ProfileComponent from "@/components/profile.component.vue";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import 'bootstrap';


import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import RadioButton from "primevue/radiobutton";
import DataView from 'primevue/dataview';
import Calendar from 'primevue/calendar';
import Toast from 'primevue/toast';

const routes = [
    {path:'/', component: LandingPageComponent},
    {path:'/home', component: LandingPageComponent},
    {path:'/login', component: LoginComponent},
    {path: '/register', component: RegisterComponent},
    {path: '/events', component: EventsComponent},
    {path: '/events/:id', component: EventResumeComponent},
    {path: '/payment/:id', component: PaymentComponent},
    {path: '/normal-events', component: UserEventsComponent},
    {path: '/manager-events', component: ManagerEventsComponent},
    {path: '/create-event', component: CreateEventComponent},
    {path: '/profile', component: ProfileComponent}
]

const router= createRouter({
    history: createWebHashHistory(),
    routes
})

const store = createStore({
    state() {
        return {
            sessionData: null,
        };
    },
    mutations: {
        setSessionData(state, data) {
            state.sessionData = data;
        },
    },
    actions: {
        logout({ commit }) {
            commit("setSessionData", null);
        },
    },
    plugins: [persistPlugin]
});

const app = createApp(App)

app.use(store);

app.use(router)

app.use(ToastService);

app.use(PrimeVue, {ripple:true})
app.component("pv-toolbar", Toolbar)
app.component("pv-button", Button)
app.component("pv-card", Card)
app.component("pv-inputtext", InputText)
app.component("pv-inputnumber", InputNumber)
app.component("pv-radiobutton", RadioButton)
app.component("pv-dataview", DataView)
app.component("pv-calendar", Calendar)
app.component("pv-toast", Toast)

app.mount('#app')