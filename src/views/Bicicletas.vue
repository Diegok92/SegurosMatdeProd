<template>
	<div class="fleet-page">
		<!-- Encabezado con diseño dividido -->
		<div class="header-container d-flex align-items-center">
			<div class="header-text">
				<h1>Bicicletas</h1>
				<p>
					Cobertura contra robo, daños accidentales, y responsabilidad civil
					para bicicletas.
				</p>
				<button @click="scrollToForm" class="btn btn-custom">
					Contactanos!
				</button>
			</div>
			<div class="header-image">
				<img :src="getServiceImage('Bici.png')" alt="Seguro de Bicicletas" />
			</div>
		</div>

		<!-- Información sobre Seguro de Bicicletas -->
		<section class="services-summary container my-5">
			<h2 class="section-title mb-5">Protección para tu Bicicleta</h2>
			<div class="row">
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-lock coverage-icon"></i>
							<h5 class="card-title mb-0">Cobertura Básica</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<p>
								Robo total, daño accidental y cobertura por responsabilidad
								civil en caso de causar daños a terceros.
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-tools coverage-icon"></i>
							<h5 class="card-title mb-0">Coberturas Adicionales</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<p>
								Cobertura por daños durante el transporte y asistencia mecánica
								en el lugar del siniestro.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Cotizador Web -->
		<section id="cotizador" class="cotizador-section container my-5">
			<h2 class="section-title mb-4">
				Dejanos tus datos y empezá a sentirte seguro
			</h2>
			<form @submit.prevent="submitQuote" class="row g-3 p-4 form-background">
				<div class="col-md-6">
					<label for="nombre" class="form-label">Nombre</label>
					<input
						type="text"
						id="nombre"
						v-model="quoteData.nombre"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="email" class="form-label">Email</label>
					<input
						type="email"
						id="email"
						v-model="quoteData.email"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="telefono" class="form-label">Teléfono</label>
					<input
						type="tel"
						id="telefono"
						v-model="quoteData.telefono"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="marcaBici" class="form-label">Marca</label>
					<select
						id="marcaBici"
						v-model="quoteData.marcaBici"
						class="form-control"
						required
					>
						<option value="" disabled>Seleccione una opción</option>
						<option value="Aurora">Aurora</option>
						<option value="Cannondale">Cannondale</option>
						<option value="Giant">Giant</option>
						<option value="Merida">Merida</option>
						<option value="Olmo">Olmo</option>
						<option value="Scott">Scott</option>
						<option value="Specialized">Specialized</option>
						<option value="Trek">Trek</option>
						<option value="Vairo">Vairo</option>
						<option value="Venzo">Venzo</option>
						<option value="Otro">Otro</option>
					</select>
				</div>
				<div class="col-md-6">
					<label for="modeloBici" class="form-label">Modelo</label>
					<input
						type="text"
						id="modeloBici"
						v-model="quoteData.modeloBici"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="sumaAsegurada" class="form-label">Suma a Asegurar</label>
					<input
						type="range"
						id="sumaAsegurada"
						v-model="quoteData.sumaAsegurada"
						class="form-range custom-range"
						min="300000"
						max="1200000"
						step="100000"
					/>
					<div class="text-center mt-2">
						<span
							>Suma a Asegurar: $
							{{ formatNumber(quoteData.sumaAsegurada) }}</span
						>
					</div>
				</div>
				<div class="col-12">
					<button type="submit" class="btn btn-custom w-100">
						Solicitar Cotización
					</button>
				</div>
			</form>
		</section>

		<!-- Ejemplo de Cobertura -->
		<section id="ejemplo" class="container my-5">
			<h3 class="section-title mb-4">Ejemplo</h3>
			<p>
				Si tu bicicleta es robada mientras está estacionada en la vía pública,
				el seguro cubrirá el costo de reposición.
			</p>
		</section>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			quoteData: {
				nombre: "",
				marcaBici: "",
				modeloBici: "",
				email: "",
				telefono: "",
				sumaAsegurada: 300000,
			},
		};
	},
	methods: {
		scrollToForm() {
			document
				.getElementById("cotizador")
				.scrollIntoView({ behavior: "smooth" });
		},
		submitQuote() {
			const now = new Date();
			const data = {
				HOJA: "Leads",
				PRODUCTO: "Bicicletas",
				FECHA: now.toLocaleDateString(),
				AÑO: now.getFullYear(),
				MES: now.getMonth() + 1,
				DIA: now.getDate(),
				"HH:MM": `${now.getHours()}:${now.getMinutes()}`,
				...this.quoteData,
			};

			const proxyUrl = "https://cors-anywhere.herokuapp.com/";
			const googleScriptUrl =
				"https://script.google.com/macros/s/AKfycbzQINUw9bE3dBw5bslOSO8CZS9vklSpFw-pOYA6iPwSwfRfBhkRp0z5RTvUIE22O2Q5/exec";

			axios
				.post(proxyUrl + googleScriptUrl, new URLSearchParams(data))
				.then(() => alert("Cotización enviada correctamente. ¡Gracias!"))
				.catch(() =>
					alert("Error al enviar la cotización. Inténtalo de nuevo.")
				);
		},
		formatNumber(value) {
			return value.toLocaleString("es-AR");
		},
		getServiceImage(imageName) {
			return new URL(
				`../assets/images/imgTarjetasHome/${imageName}`,
				import.meta.url
			).href;
		},
	},
};
</script>

<style scoped>
.form-background {
	background-color: #f5f5f5;
	border-radius: 10px;
}

.header-container {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	max-width: 1100px;
	margin: 0 auto;
	padding: 20px;
	margin-top: 60px;
}

.header-text {
	width: 100%;
	padding-bottom: 20px;
	text-align: center;
}

@media (min-width: 768px) {
	.header-text {
		width: 50%;
		text-align: left;
	}
}

.header-text h1 {
	font-size: 2.5rem;
	color: #003366;
	margin-bottom: 10px;
}

.header-text p {
	font-size: 1.2rem;
	color: #555;
	margin-bottom: 20px;
	margin-right: 30px;
}

.header-text .btn-custom {
	background-color: #ff6600;
	color: #fff;
	padding: 10px 20px;
	font-size: 1rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.header-text .btn-custom:hover {
	background-color: #d94e00;
}

.header-image {
	width: 100%;
	text-align: center;
}

@media (min-width: 768px) {
	.header-image {
		width: 50%;
	}
}

.header-image img {
	width: 100%;
	border-radius: 10px;
}

.card-no-border {
	border: none;
	box-shadow: none;
}

.card-title {
	color: #003366;
	font-weight: bold;
}

.coverage-icon {
	font-size: 1.5rem;
	color: #ff6600;
	margin-right: 10px;
}

.divider {
	height: 3px;
	background-color: #ff6600;
	margin: 10px 0;
	border: none;
}

.text-orange {
	color: #ff6600;
}

.btn-custom {
	background-color: #ff6600;
	color: #fff;
	transition: background-color 0.3s;
}

.btn-custom:hover {
	background-color: #d94e00;
}
</style>
