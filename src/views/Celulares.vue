<template>
	<div class="fleet-page">
		<!-- Encabezado con diseño dividido -->
		<div class="header-container d-flex align-items-center">
			<div class="header-text">
				<h1>Celulares</h1>
				<p>
					Cobertura contra el robo, daños accidentales y fallas técnicas de
					dispositivos móviles.
				</p>
				<button @click="scrollToForm" class="btn btn-custom">
					Contactanos!
				</button>
			</div>
			<div class="header-image">
				<img :src="getServiceImage('Celu.png')" alt="Seguro de Celulares" />
			</div>
		</div>

		<!-- Información sobre el Seguro de Celulares -->
		<section class="services-summary container my-5">
			<h2 class="section-title mb-5">Cobertura para tu Celular</h2>
			<div class="row">
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-shield-alt coverage-icon"></i>
							<h5 class="card-title mb-0">Cobertura Básica</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<ul>
								<li>Robo y daño accidental</li>
								<li>Pantalla rota o inmersión en agua</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-globe coverage-icon"></i>
							<h5 class="card-title mb-0">Coberturas Adicionales</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<ul>
								<li>Uso en el extranjero</li>
								<li>Fallas técnicas fuera de garantía</li>
							</ul>
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
					<label for="telefono" class="form-label">Teléfono de Contacto</label>
					<input
						type="tel"
						id="telefono"
						v-model="quoteData.telefono"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="marcaCelu" class="form-label">Marca</label>
					<select
						id="marcaCelu"
						v-model="quoteData.marcaCelu"
						class="form-control"
						required
					>
						<option value="" disabled>Seleccione una opción</option>
						<option v-for="marca in marcas" :key="marca" :value="marca">
							{{ marca }}
						</option>
					</select>
				</div>
				<div class="col-md-6">
					<label for="modeloCelu" class="form-label">Modelo</label>
					<input
						type="text"
						id="modeloCelu"
						v-model="quoteData.modeloCelu"
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
		<section id="informacion-adicional" class="container my-5">
			<h3 class="section-title mb-4">Ejemplo de Cobertura</h3>
			<p>
				Si tu teléfono cae y se rompe la pantalla, el seguro cubrirá los costos
				de reparación.
			</p>
			<h3 class="section-title mb-4">Documentación a presentar</h3>
			<ul>
				<li>Denuncia policial</li>
				<li>Constancia de preexistencia del celular (factura, caja, etc.)</li>
				<li>Denuncia de robo en tu compañía telefónica</li>
				<li>Constancia de bloqueo del IMEI</li>
			</ul>
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
				email: "",
				telefono: "",
				marcaCelu: "",
				modeloCelu: "",
				sumaAsegurada: 300000,
			},
			marcas: [
				"Apple",
				"Huawei",
				"LG",
				"Motorola",
				"Nokia",
				"OnePlus",
				"Realme",
				"Samsung",
				"Xiaomi",
				"ZTE",
				"Otro",
			],
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
				PRODUCTO: "Celulares",
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
