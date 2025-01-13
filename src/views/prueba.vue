<template>
	<div class="accidentes-personales-page container my-5">
		<h1 class="text-center mb-4">Seguro de Accidentes Personales</h1>

		<!-- Cotizador Web -->
		<section id="cotizador" class="cotizador-section mb-5">
			<h2 class="mb-4">Dejanos tus datos y empezá a sentirte asegurado</h2>
			<form @submit.prevent="submitQuote" class="row g-3">
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
						class="form-select"
						required
					>
						<option disabled value="">Selecciona una opción</option>
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
					<button type="submit" class="btn btn-primary w-100">
						Solicitar Cotización
					</button>
				</div>
			</form>
		</section>

		<!-- Información sobre el Seguro de Accidentes Personales -->
		<section id="informacion" class="mb-5">
			<h2 class="mb-4">Protección contra Accidentes Personales</h2>
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

			<div class="row justify-content-center">
				<!-- Tarjeta de Cobertura Básica -->
				<div class="col-md-6 mb-4" data-aos="fade-up">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-user-shield"></i>
							</div>
							<h5 class="card-title text-center">Cobertura Básica</h5>
							<ul class="card-content">
								<p>Gastos médicos</p>
								<p>Incapacidad temporal o permanente</p>
								<p>Indemnización por fallecimiento</p>
							</ul>
						</div>
					</div>
				</div>

				<!-- Tarjeta de Coberturas Adicionales -->
				<div class="col-md-6 mb-4" data-aos="fade-up">
					<div class="card h-100">
						<div class="card-body">
							<div class="icon-container text-center">
								<i class="fas fa-medkit"></i>
							</div>
							<h5 class="card-title text-center">Coberturas Adicionales</h5>
							<ul class="card-content">
								<p>Tratamientos médicos prolongados</p>
								<p>Rehabilitación</p>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Sección de Ejemplo de Cobertura -->
		<section id="informacion-adicional" class="mb-5">
			<h3>Ejemplo de Cobertura</h3>
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
		submitQuote() {
			// Obtener fecha y hora actuales
			const now = new Date();
			const year = now.getFullYear();
			const month = now.getMonth() + 1;
			const day = now.getDate();
			const hours = now.getHours();
			const minutes = now.getMinutes();

			// Datos para Google Sheets
			const data = {
				HOJA: "Leads",
				PRODUCTO: "AccidentesPersonales",
				FECHA: now.toLocaleDateString(),
				AÑO: year,
				MES: month,
				DIA: day,
				"HH:MM": `${hours}:${minutes < 10 ? "0" + minutes : minutes}`,
				profesion: this.quoteData.profesion,
				cantidadPersonas: this.quoteData.cantidadPersonas,
				condicionIva: this.quoteData.condicionIva,
				email: this.quoteData.email,
				telefono: this.quoteData.telefono,
			};

			const proxyUrl = "https://cors-anywhere.herokuapp.com/";
			const googleScriptUrl =
				"https://script.google.com/macros/s/AKfycbzQINUw9bE3dBw5bslOSO8CZS9vklSpFw-pOYA6iPwSwfRfBhkRp0z5RTvUIE22O2Q5/exec";

			axios
				.post(proxyUrl + googleScriptUrl, new URLSearchParams(data))
				.then((response) => {
					if (response.data.result === "success") {
						alert("Cotización solicitada y datos enviados a Google Sheets");
					} else {
						alert(
							"Error inesperado al enviar la cotización: " + response.data.error
						);
					}
				})
				.catch((error) => {
					console.error("Error al enviar datos:", error);
					alert("Error al enviar la cotización");
				});
		},
	},
};
</script>

<style scoped>
.accidentes-personales-page {
	padding-top: 20px;
}

.cotizador-section form {
	background-color: #f8f9fa;
	padding: 20px;
	border-radius: 10px;
}

.card {
	border: 1px solid #e0e0e0;
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	border-radius: 8px;
	background-color: #ffffff;
}

.card:hover {
	transform: translateY(-5px);
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	background-color: #f9f9f9;
}

.icon-container {
	font-size: 2.5rem;
	color: #003366;
	margin-bottom: 15px;
	text-align: center;
}

.card-title {
	font-size: 1.4rem;
	font-weight: bold;
	color: #003366;
	text-align: center;
}

.card-content {
	text-align: center;
	color: #666;
}

h2 {
	font-size: 1.8rem;
	color: #003366;
	text-align: center;
}

h3 {
	margin-top: 20px;
	color: #003366;
	text-align: center;
}

ul {
	list-style-type: disc;
	margin-left: 0;
	padding-left: 0;
	text-align: center;
}
</style>
