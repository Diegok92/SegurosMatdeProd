<template>
	<section class="hero animate__animated animate__fadeIn" data-aos="fade-in">
		<img :src="heroImage" alt="Hero Image" class="hero-image img-fluid" />
		<div class="hero-text">
			<h2 class="display-4">Protegemos Todo lo que Valoras</h2>
			<!-- <p class="hero-subtext">
				Seguros adaptados a las necesidades de grandes clientes. Confianza y
				profesionalismo a tu servicio.
			</p> -->
			<router-link to="/services" class="btn btn-primary mt-3"
				>Conoce Nuestros Servicios</router-link
			>
		</div>
	</section>
</template>

<script>
import heroImage from "../assets/images/hero_image_matde.jpg";

export default {
	data() {
		return {
			heroImage,
		};
	},
};
</script>

<style scoped>
.hero {
	position: relative;
	text-align: center;
	color: white;
	margin-top: 0; /* Ajustado para eliminar el espacio innecesario */
}

.hero-image {
	width: 100%;
	height: 70vh;
	object-fit: cover;
}

.hero-text {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: rgba(0, 0, 0, 0.6);
	padding: 10px;
	border-radius: 10px;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Añadido para resaltar */
}

.hero-subtext {
	font-size: 1.2rem;
	margin-top: 10px;
	color: #f1f1f1;
	text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7); /* Mejora la legibilidad del texto */
}

.btn-primary {
	background-color: #0056b3;
	border: none;
}

.btn-primary:hover {
	background-color: #004080;
	background-color: #ff6600;
	border-color: #ff6600;
}
</style>
