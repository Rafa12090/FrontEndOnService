<template>
    <pv-toolbar class="color-box">
        <template #start>
            <router-link to="/events">
                <img src="../assets/user_toolbar/logo1.png" alt="logo" width="120" height="40"/>
            </router-link>
        </template>

        <template #end>
            <div class="button-container">
                <pv-button class="mr-2" @click="getUrlToOwnEvents" text>
                    <span class="boton">Agenda</span>
                </pv-button>

                <router-link to="/profile">
                    <pv-button class="mr-2" text>
                        <span class="boton">Usuario</span>
                    </pv-button>
                </router-link>

                <pv-button class="mr-2" @click="logout" text>
                    <span class="boton">Log out</span>
                </pv-button>
            </div>
        </template>
    </pv-toolbar>
</template>

<script>
import { mapState } from 'vuex';
import { useRouter } from 'vue-router';
export default {
    name: "user-toolbar.component",
    data() {
        return {
            router: null
        };
    },
    created() {
        this.router = useRouter();
    },
    computed: {
        ...mapState(["sessionData"])
    },

    methods: {
        getUrlToOwnEvents() {
            if (this.sessionData && this.sessionData.type === 'normal') {
                this.router.push('/normal-events');
            } else if (this.sessionData && this.sessionData.type === 'manager') {
                this.router.push('/manager-events');
            } else {
                this.router.push('/');
            }
        },
        logout() {
            this.$store.dispatch("logout");
            this.router.push("/");
        }
    }
}
</script>

<style scoped>
.mr-2 {
    margin-right: 2px;
}

.boton {
    color: #79b791;
    font-size: 20px;
}

.color-box {
    background-color: #242422;
    border-color: #242422;
}

@media screen and (max-width: 768px) {
    .button-container {
        flex-direction: column;
        align-items: flex-start;
    }

    .mr-2 {
        margin-right: 0;
        margin-bottom: 10px;
    }
}
</style>