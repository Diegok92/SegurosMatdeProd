<template>
	<section class="hero animate__animated animate__fadeIn" data-aos="fade-in">
		<img :src="heroImage" alt="Hero Image" class="hero-image" />
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
	width: 100%;
	height: calc(
		100vh - 70px
	); /* Ajusta al alto de la pantalla menos el navbar */
	margin: 0;
	padding: 0;
	overflow: hidden; /* Evita desplazamientos no deseados */
	display: flex;
	align-items: center;
	justify-content: center;
	max-height: 425px;
}

/* Imagen principal */
.hero-image {
	width: 100%;
	height: 100%;
	object-fit: contain; /* La imagen se adapta completamente al espacio */
	object-position: center;
}

/* Ajuste específico para pantallas más pequeñas */
@media (max-width: 768px) {
	.hero {
		margin-top: 60px;
		height: auto; /* Permite que la sección ajuste su tamaño automáticamente */
	}
}
</style>
