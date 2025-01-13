<template>
	<div class="fleet-page">
		<!-- Encabezado con diseño dividido -->
		<div class="header-container d-flex align-items-center flex-wrap">
			<div class="header-text col-12 col-md-6 text-center text-md-start">
				<h1>Accidentes Personales</h1>
				<p>
					Cobertura para lesiones, invalidez o fallecimiento causados por
					accidentes.
				</p>
				<button @click="scrollToForm" class="btn btn-custom">
					Contactanos!
				</button>
			</div>
			<div class="header-image col-12 col-md-6 text-center">
				<img
					:src="getServiceImage('Ap.png')"
					alt="Accidentes Personales Image"
				/>
			</div>
		</div>

		<!-- Información sobre el Seguro de Accidentes Personales -->
		<section id="informacion" class="additional-info container my-5">
			<h2 class="section-title mb-4">
				Protección contra Accidentes Personales
			</h2>
			<p>
				Este seguro está diseñado para ofrecer una cobertura completa en caso de
				accidentes personales que puedan resultar en lesiones, invalidez o
				fallecimiento. Es ideal para personas que desean una protección
				adicional ante imprevistos.
			</p>
			<p>
				El Seguro de Accidentes Personales se adapta a tus necesidades, ante
				cualquier accidente que puedas tener, ya sea realizando tus actividades
				laborales + in itinere o bien durante las 24 horas los 365 días del año.
			</p>

			<div class="row">
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-user-shield coverage-icon"></i>
							<h5 class="card-title mb-0">Cobertura Básica</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<ul>
								<li>Gastos médicos</li>
								<li>Incapacidad temporal o permanente</li>
								<li>Indemnización por fallecimiento</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6 mb-4">
					<div class="card h-100 d-flex flex-column card-no-border">
						<div class="d-flex align-items-center">
							<i class="fas fa-medkit coverage-icon"></i>
							<h5 class="card-title mb-0">Coberturas Adicionales</h5>
						</div>
						<div class="divider"></div>
						<div class="card-body">
							<ul>
								<li>Tratamientos médicos prolongados</li>
								<li>Rehabilitación</li>
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
					<label for="profesion" class="form-label">Profesión</label>
					<input
						type="text"
						id="profesion"
						v-model="quoteData.profesion"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="cantidadPersonas" class="form-label"
						>Cantidad de personas a cubrir</label
					>
					<input
						type="number"
						id="cantidadPersonas"
						v-model="quoteData.cantidadPersonas"
						class="form-control"
						required
					/>
				</div>
				<div class="col-md-6">
					<label for="condicionIva" class="form-label"
						>Condición de I.V.A.</label
					>
					<select
						id="condicionIva"
						v-model="quoteData.condicionIva"
						class="form-control"
						required
					>
						<option value="" disabled>Selecciona una opción</option>
						<option value="Exento">Exento</option>
						<option value="Consumidor Final">Consumidor Final</option>
						<option value="Responsable Inscripto">Responsable Inscripto</option>
						<option value="No Categorizado">No Categorizado</option>
						<option value="Resp. Monotributo">Resp. Monotributo</option>
					</select>
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
						type="number"
						id="telefono"
						v-model="quoteData.telefono"
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
		<section id="informacion-adicional" class="container my-5">
			<h3 class="section-title mb-4">Ejemplo de Cobertura</h3>
			<p>
				Un seguro de accidentes personales cubre el tratamiento médico y la
				pérdida de ingresos si sufres un accidente que te impide trabajar
				durante varios meses.
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
				profesion: "",
				cantidadPersonas: "",
				condicionIva: "",
				email: "",
				telefono: "",
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
				PRODUCTO: "AccidentesPersonales",
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
	text-align: center;
	padding: 20px;
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
	padding: 20px;
}

@media (min-width: 768px) {
	.header-image {
		width: 50%;
	}
}
.header-image img {
	max-width: 100%;
	border-radius: 10px;
}

.form-background {
	background-color: #f5f5f5;
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

.section-title {
	font-size: 1.6rem;
	font-weight: bold;
	color: #003366;
	text-align: left;
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
