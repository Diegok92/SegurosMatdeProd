<template>
	<div id="app">
		<Header />
		<main class="content">
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
	components: {
		Header,
		Footer,
	},
};
</script>

<style>
/* Hacer que el contenedor principal ocupe toda la altura de la ventana */
#app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

/* Asegurar que el contenido ocupe el espacio restante */
.content {
	flex: 1;
}
</style>
