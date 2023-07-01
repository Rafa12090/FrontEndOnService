<template>
    <div class="grid_register">
        <pv-toast position="top-left" group="tl"/>

        <div class="photo_card">
            <img src="../assets/register/Side-Image.png" alt="" width="400" height="700"/>
        </div>

        <div class="form_card">
            <div class="title">
                ¡Registrese ahora!
            </div>

            <div class="input_box">
                <div class="text">Nombre de usuario</div>
                <pv-inputtext v-model="user.username" id="username" aria-describedby="username-help" type="text" class="input-color"/>
            </div>

            <div class="input_box">
                <div class="text">Correo Electrónico</div>
                <pv-inputtext v-model="user.email" type="text" class="input-color"/>
            </div>

            <div class="input_box">
                <div class="text">Contraseña</div>
                <pv-inputtext v-model="user.password" type="password" id="password" class="input-color"/>
            </div>

            <div class="input_radio">
                <div class="flex">
                    <pv-radiobutton v-model="user.type" inputId="plan1" name="plan" value="normal" style="margin-right: 10px"/>
                    <label class="text" for="plan1"> Usuario Normal </label>
                </div>


                <div class="flex">
                    <pv-radiobutton v-model="user.type" inputId="plan2" name="plan" value="manager" style="margin-right: 10px" />
                    <label class="text" for="plan2"> Gestor de eventos </label>
                </div>
            </div>

            <div class="input_box">
                <pv-button class="text" label="Registrarse" style="color: #79B791" @click="saveUser" outlined/>
            </div>
        </div>
    </div>
</template>

<script>
import { UsersApiService } from "@/services/users-api.service";
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
export default {
    name: "register.component",
    data() {
        return {
            users: [],
            user: {},
            usersService: null,
            router: null,
            submitted: false,
            toast: null
        }
    },
    created() {
        this.usersService = new UsersApiService();
        this.router = useRouter();
        this.submitted = false;
        this.toast = useToast();
    },

    methods: {
        getDisplayableUser(user) {
            return user;
        },
        getStorableUser(displayableUser) {
            return {
                username: displayableUser.username,
                email: displayableUser.email,
                password: displayableUser.password,
                type: displayableUser.type
            };
        },
        saveUser() {
            this.submitted = true;

            this.user.id = 0;
            console.log(this.user);
            this.user = this.getStorableUser(this.user);
            this.usersService
                .create(this.user)
                .then((response) => {
                    this.user = this.getDisplayableUser(response.data);
                    this.users.push(this.user);
                    this.toast.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'User Created',
                        life: 3000,
                        group: 'tl'
                    });
                    console.log(response);
                });

            this.user = {};
            this.router.push('/');
        }
    }
}
</script>

<style scoped>
.grid_register{
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
}
.input_box{
    display: flex;
    flex-direction: column;
    margin-top: 32px;
}

.input_radio {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 32px;
    margin-right: 20px;
}

.text{
    margin-bottom: 12px;
    font-family: "Century Gothic";
    font-size: 24px;
    color:#79B791;
}
.title{
    margin-top: 32px;
    margin-bottom: 32px;
    font-family: "Century Gothic";
    font-size: 32px;
    color:#79B791;
}
.photo_card{
    margin-left: 120px;
}

.form_card {
    margin-right: 240px;
}

.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 30px;
}

.input-color {
    background-color: #abd1b5;
    border-color: #abd1b5;
    margin-top: 7px;
    margin-bottom: 7px;
}
</style>