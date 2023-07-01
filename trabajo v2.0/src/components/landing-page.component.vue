<template>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SocialE</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap">
    </head>
    <body>
    <nav class="navbar navbar-expand-md navbar-light" style="background-color: #242423">
        <div class="container">
            <a class="navbar-brand mb-0" style="color: #79B791">
                <img src="../assets/lading_page/11.png" alt="" width="30" height="30" class="d-inline-block align-text-top">
                SocialE
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <router-link to="/login">
                            <pv-button class="btn-secondary" label="Sign in" style="color: #79B791" outlined/>
                        </router-link>
                        <router-link to="/register">
                            <pv-button class="btn-secondary" label="Register" style="color: #79B791" outlined/>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="row">
        <div class="col">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

                </div>
                <div class="carousel-inner carousel-text">
                    <div class="carousel-item active carousel_images">
                        <img src="../assets/lading_page/bg1.jpg" class="d-block w-100" alt="cleaning-person">
                        <div class="carousel-caption d-none d-md-block">
                            <h2 key="search" class="tr">Encontrar Eventos</h2>
                            <p key="info"  class="tr">Nunca fue tan facil</p>
                        </div>
                    </div>
                    <div class="carousel-item carousel_images">
                        <img src="../assets/lading_page/bg2.jpg" class="d-block w-100" alt="cleaning-person2">
                        <div class="carousel-caption d-none d-md-block">
                            <h2 key="request" class="tr">La Gestión</h2>
                            <p key="can" class="tr">En la palma de tu mano</p>
                        </div>
                    </div>

                </div>
                <a href="#carouselExampleCaptions" class="carousel-control-prev" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a href="#carouselExampleCaptions" class="carousel-control-next" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    </div>

    <div class="pt-4">

        <div class="row row-spacing">
            <div class="col-md-6 left section-img" id="servicio">
                <img src="../assets/lading_page/organizando.jpg" class="img-fluid mx-auto d-block w-100" alt="cleaning-team">
            </div>
            <div class="col-md-6 right">
                <figure class="section-text_right">
                    <h1 key="variety" class="tr" style="color: #79B791">
                        Organiza tus eventos de forma sencilla y efectiva
                    </h1>
                    <p key="system" class="tr" style="color: #79B791">
                        Encuentra y administra tus eventos en un solo lugar: nuestra plataforma simplifica la organización de eventos y te permite llegar a más personas con tu evento. Una experiencia de organización de eventos más sencilla y eficiente: deja atrás los procesos engorrosos y los esfuerzos en la promoción de tus eventos, y aprovecha las herramientas y recursos que nuestra plataforma tiene para ofrecerte.
                    </p>
                </figure>
            </div>

        </div>

        <div class="row row-spacing" >
            <div class="col-md-6 left">
                <figure class="section-text_left">
                    <h1 key="security" class="tr" style="color: #79B791">
                        Llega a una audiencia global con nuestros recursos
                    </h1>
                    <p key="enterprise" class="tr" style="color: #79B791">
                        Eventos que llegan a todo el mundo: nuestra plataforma te ayuda a llegar a una audiencia más amplia, conectando tu evento con personas de todo el mundo.
                    </p>
                </figure>
            </div>
            <div class="col-md-6 section-img">
                <img src="../assets/lading_page/Audiencia.jpg" class="img-fluid mx-auto d-block w-100" alt="bucket">
            </div>
        </div>


        <div class="row row-spacing" id="nosotros">
            <div class="row">
                <div class="col-md-6 section-img">
                    <img src="../assets/lading_page/team.jpg" class="img-fluid mx-auto d-block w-100" alt="work-team">
                </div>
                <div class="col-md-6 left">
                    <figure class="section-text_right">
                        <h1 style="color: #79B791">
                            Misión
                        </h1>
                        <p  key="weare" class="tr" style="color: #79B791">
                            Nuestra misión es proporcionar una solución sencilla y eficiente para la gestión y administración de eventos, permitiendo que los usuarios puedan publicar sus eventos y llegar a una audiencia más amplia, todo en un solo lugar. Nos esforzamos por hacer que la organización de eventos sea más accesible y agradable para todos, desde organizadores de pequeños eventos hasta grandes empresas.
                        </p>
                        <h1 style="color: #79B791">
                            Visión
                        </h1>
                        <p  key="weare" class="tr" style="color: #79B791">
                            Ser la plataforma líder en la gestión de eventos, reconocida por su simplicidad y eficiencia en la organización y promoción de eventos, y una herramienta imprescindible para conectar a la audiencia con los eventos que desean asistir.
                        </p>
                    </figure>
                </div>
            </div>
        </div>

    </div>


    <div class="image">
        <img src="../assets/lading_page/bg-final.jpg" class="image-final" alt="cleaning" style="height: 630px">
        <div class="image-overlay">
            <div class="image-title">
                <h1 key="ensures" class="tr" style="color: white; text-align: center; font-size: 4vw">
                    Revoluciona la forma en que organizas y promocionas tus eventos
                </h1>
            </div>
            <p key="start" class="image-description tr" style="color: white; text-align: center; font-size: 2.1vw">
                Empieza con nuestra plataforma innovadora. Aprovecha nuestras herramientas para administrar tus eventos de manera sencilla y llegar a una audiencia más amplia. ¡Únete a nosotros ahora!

            </p>
            <a key="platform" class="btn btn-secondary tr" href="#">Ir a la plataforma</a>
        </div>

    </div>

    <footer class="text-center text-lg-start text-white" style="background-color: #242423">
        <div class="container p-4 pb-0">
            <section class="">
                <div class="row">
                    <hr class="w-100 clearfix d-md-none" />
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 footer-section">
                        <p><a key="home" class="text-white tr" href="#">Inicio</a></p>
                        <p><a key="services" class="text-white tr" href="#servicio">Nuestros servicios</a></p>
                        <p><a key="about" class="text-white tr" href="#nosotros">Sobre nosotros</a></p>
                    </div>
                    <hr class="w-100 clearfix d-md-none" />
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 footer-section">
                        <p><i class="mr-3"></i>SocialE.app@gmail.com</p>
                        <p key="contact" class="tr"><i class="mr-3"></i>Contacto:   +51 999 999 999</p>
                    </div>

                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <a href="https://www.instagram.com" target="_blank">
                            <img class="logo"  src="../assets/lading_page/Logo-Instagram.png" alt="">
                        </a>

                        <a href="https://www.facebook.com" target="_blank">
                            <img class="logo"  src="../assets/lading_page/Logo-Facebook.png" alt="">
                        </a>

                        <a href="https://www.twitter.com" target="_blank">
                            <img class="logo"  src="../assets/lading_page/Logo-Twitter.png" alt="">
                        </a>
                    </div>
                </div>
            </section>
        </div>
        <div class="text-center p-3" style="background-color: #BC2C1A">
            ©2023 SocialE, All Rights Reserved.
        </div>
    </footer>
    </body>
</template>

<script>

export default {
    name: "landing_page.component",
    scrollToSection: scrollToSection
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>


<style scoped>
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}

* {
    margin: 0;
    padding: 0;
}


button {
    border: none;
    color: white;
    padding: 0.8vw 4vw;
    text-align: center;
    text-decoration: none;
    font-size: max(1.5vw, 20px);
    cursor: pointer;
    background-color: #000000;
    border-radius: 30px;
}

h1 h2 a {
    font-family: "Century Gothic", sans-serif;
    color: #ffffff;
}
p{
    font-family: "Century Gothic", sans-serif;
    color: #79B791;
}

.row-spacing {
    padding: 50px;
}


.carousel-text {
    text-align: center;

}
.carousel-text p {
    font-size: 28px;
}



.col-md-6 {
    display: grid;
    place-items: center;
    padding: 0;
}


.pt-4{
    background-color: #242423;
}
.section-text_left h1 {
    font-size: 54px;
    font-family:  "Century Gothic", sans-serif;
    line-height: 58px;

}
.section-text_left p {
    font-size: 32px;
    line-height: 40px;
    margin-top: 36px;
}

.section-text_right h1 {
    font-size: 54px;
    font-family:  "Century Gothic", sans-serif;
    line-height: 58px;
    text-align: right;

}
.section-text_right p {
    font-size: 32px;
    line-height: 40px;
    margin-top: 36px;
    text-align: right;
}

.section-img img {
    border-radius: 50px;
}


.btn-secondary {
    background-color: #BC2C1A;
    border: 12px #068db6;
}
.btn-secondary a {
    color: white;
}
.col-btn {
    text-align: center;
}
.btn-secondary:hover {
    background-color: #98053e;
}

.image {
    position: relative;
    width: 100%;
}
.image-final {
    display: block;
    width: 100%;
}
.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    font-family: "Segoe UI", sans-serif;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.image-title {
    font-weight: bold;
    text-shadow: 3px 3px 10px black;
    margin: 20px;
}

.image-description {
    text-shadow: 6px 6px 10px black;
    margin: 10px;
}
.image-overlay .btn-secondary {
    font-size: 1.3vw;
    padding: 16px;
}
.footer-section a {
    font-family: "Segoe UI", sans-serif;
    text-decoration: none;
    font-size: 22px;
}

.logo {
    width: 40px !important;
    margin-right: 10px !important;
}

.btn-secondary {
    font-size: 14px; /* Ajusta el tamaño de fuente según tus necesidades */
    padding: 8px 16px;
    margin-right: 10px;
}

@media (max-width: 768px) {
    /* Styles for screens smaller than 768px */
    .section-text_left h1,
    .section-text_right h1 {
        font-size: 32px;
    }
    .section-text_left p,
    .section-text_right p {
        font-size: 18px;
    }
}
</style>