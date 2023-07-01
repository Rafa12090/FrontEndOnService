<template>
    <div class="grid_login">
        <pv-toast position="top-left" group="tl" />

        <div class="photo_card">
            <img src="../assets/login/login_photo.png" alt="Phone image" width="800" height="700">
        </div>

        <div class="form_card">
            <div class="title">
                Iniciar Sesion
            </div>

            <!-- Email input -->
            <div class="input_box">
                <label class="text"> Correo electronico </label>
                <pv-inputtext v-model="user.email" type="text" aria-describedby="email_input" style="width: 300px;" class="input-color"/>
            </div>

            <!-- Password input -->
            <div class="input_box">
                <label class="text"> Password </label>
                <pv-inputtext v-model="user.password" type="password" aria-describedby="password_input" style="width: 300px;" class="input-color"/>
            </div>

            <!-- Submit button -->
            <div class="input_box">
                <pv-button label="Sign in" style="color: #79B791" @click="onSubmit" outlined/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { UsersApiService } from "@/services/users-api.service";
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';

export default {
    name: "login.component",
    data() {
        return {
            user: {},
            user_temp: null,
            usersService: null,
            router: null,
            toast: null
        };
    },
    created() {
        this.usersService = new UsersApiService();
        this.router = useRouter();
        this.toast = useToast();
    },

    methods: {
        ...mapMutations(['setSessionData']),
        getStorableUser(displayableUser) {
            return {
                email: displayableUser.email,
                password: displayableUser.password
            };
        },
        onSubmit() {
          if (!this.user.email || !this.user.password) {
            this.toast.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Ingrese su cuenta y/o contraseña.',
              group: 'tl',
              life: 3000
            });
            return;
          }

          this.user = this.getStorableUser(this.user);

          this.usersService.getAll().then(users => {
            const userExists = users.some(
                item => item.email === this.user.email && item.password === this.user.password
            );

            if (userExists) {
              this.toast.add({
                severity: 'success',
                summary: 'Inicio de sesión exitoso',
                group: 'tl',
                life: 3000
              });

              const userTemp= users.find(
                  item => item.email === this.user.email && item.password === this.user.password
              );

              this.setSessionData(userTemp);
              this.router.push('/events'); //agregar ruta

            } else {
              this.toast.add({
                severity: 'error',
                summary: 'Error',
                detail: 'El correo electrónico o la contraseña son incorrectos.',
                group: 'tl',
                life: 3000
              });
            }
          }).catch(error => {
                console.error("Error al obtener los usuarios:", error);
          });
        }
    }
}
</script>

<style scoped>
.grid_login{
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

.photo_card {
    margin-left: 50px;
}

.form_card {
    margin-right: 280px;
}

.input-color {
    background-color: #abd1b5;
    border-color: #abd1b5;
}
</style>

<style>
body {
    background-color: #242422;
}
</style>