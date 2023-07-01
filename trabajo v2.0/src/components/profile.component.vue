<template>
    <div style="position: relative; margin-top:-10px;">
        <div style="position: static; border-bottom: 2px solid #79b791;">
            <UserToolbar></UserToolbar>
        </div>
    </div>

    <div class="profile-container">
        <pv-card class="user-card">
            <template #title>
                <div class="user-title">
                    <h1>Perfil de Usuario</h1>
                </div>
            </template>
            <template #content>
                <div class="user-info">
                    <div class="user-type">
                        <h2 class="user-type-text">{{ formatUserType }}</h2>
                    </div>
                    <div class="user-details">
                        <p class="user-name">{{ username }}</p>
                        <p class="user-email">{{ email }}</p>
                    </div>
                </div>
            </template>
        </pv-card>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import UserToolbar from "@/components/user-toolbar.component.vue";
export default {
    name: "profile.component",
    components: {UserToolbar},
    data() {
        return {
            username: null,
            email: null,
            type: null
        }
    },
    created() {
        this.username = this.sessionData.username;
        this.email = this.sessionData.email;
        this.type = this.sessionData.type;
    },
    computed: {
        ...mapState(["sessionData"]),
        formatUserType() {
            return this.type === 'manager' ? 'MANAGER USER' : 'NORMAL USER';
        }
    }
}
</script>


<style scoped>
.user-card {
    width: 400px;
    margin: 0 auto;
}

.profile-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;
}

.user-title {
    text-align: center;
}

.user-type {
    text-align: center;
    margin-bottom: 10px;
}

.user-type-text {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
}

.user-details {
    display: flex;
    flex-direction: column;
}

.user-name {
    font-size: 18px;
    margin-bottom: 5px;
}

.user-email {
    font-size: 14px;
    color: #8d8d8d;
}
</style>