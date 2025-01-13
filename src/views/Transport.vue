<template>
	<div class="fleet-page">
		<!-- Encabezado con diseño dividido -->
		<div class="header-container d-flex align-items-center">
			<div class="header-text">
				<h1>Transporte de Mercancías</h1>
				<p>
					Cobertura para la carga durante el transporte terrestre, marítimo o
					aéreo. Incluye robo, daños y mas.
				</p>
				<button @click="scrollToForm" class="btn btn-custom">
					Contactanos!
				</button>
			</div>
			<div class="header-image">
				<img
					:src="getServiceImage('TranspMerc.png')"
					alt="Transporte de Mercancías Image"
				/>
			</div>
		</div>

		<!-- Cobertura Básica y Adicional -->
		<section class="services-summary container my-5">
			<h2 class="section-title mb-5">Coberturas Disponibles</h2>
			<div class="row">
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-shield-alt coverage-icon"></i>
							<h5 class="card-title mb-0">Cobertura Básica</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<p>
								Ampara: choque, vuelco, desbarrancamiento, incendios,
								explosiones, desastres naturales y más, cubriendo tu carga en el
								transporte.
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-truck-loading coverage-icon"></i>
							<h5 class="card-title mb-0">Coberturas Adicionales</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<ul>
								<li>Eximición de Responsabilidad al Transportista</li>
								<li>Descompostura de Maquinaria Frigorífica</li>
								<li>Extensión de cobertura a países limítrofes</li>
								<li>Robo y hurto</li>
								<li>Daños durante carga y descarga</li>
								<li>Mojadura y derrame</li>
								<li>Rotura, contaminación y daños por contacto</li>
								<li>Cláusula para maquinarias (reparación o reemplazo)</li>
								<li>Daños a etiquetas y embalajes</li>
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
					<label for="razonSocial" class="form-label">Razón Social</label>
					<input
						type="text"
						id="razonSocial"
						v-model="quoteData.razonSocial"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="cuit" class="form-label">C.U.I.T.</label>
					<input
						type="text"
						id="cuit"
						v-model="quoteData.cuit"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="nombre" class="form-label">Nombre de Contacto</label>
					<input
						type="text"
						id="nombre"
						v-model="quoteData.nombre"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="email" class="form-label">Correo Electrónico</label>
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
					<label for="tipoMercaderia" class="form-label"
						>Tipo de Mercadería</label
					>
					<input
						type="text"
						id="tipoMercaderia"
						v-model="quoteData.tipoMercaderia"
						class="form-control"
						required
					/>
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
			<h3 class="section-title mb-4">Ejemplo de Cobertura</h3>
			<p>
				Si una empresa transporta mercancías en un camión y este sufre un
				accidente, el seguro cubrirá la pérdida de las mercancías dañadas o
				destruidas.
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
				razonSocial: "",
				cuit: "",
				nombre: "",
				email: "",
				telefono: "",
				tipoMercaderia: "",
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
				PRODUCTO: "Transporte",
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
				.then(() =>
					alert("Cotización solicitada y datos enviados a Google Sheets")
				)
				.catch(() => alert("Error al enviar la cotización"));
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
