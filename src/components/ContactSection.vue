<template>
	<section
		id="contact"
		class="container my-5 animate__animated animate__fadeIn"
	>
		<div class="row align-items-center">
			<!-- Imagen de contacto -->
			<div class="col-lg-5 text-center mb-4 mb-lg-0">
				<img
					:src="contactImage"
					alt="Contacto"
					class="img-fluid rounded shadow"
				/>
			</div>
			<!-- Formulario de contacto -->
			<div class="col-lg-7">
				<h2 class="text-center mb-3">Contactanos!</h2>
				<p class="text-center mb-4">
					Tenés preguntas? Estamos para ayudarte! Completá el formulario y nos
					pondremos en contacto.
				</p>
				<form @submit.prevent="submitForm" class="form-background">
					<div class="row g-3">
						<div class="col-md-6">
							<label for="name" class="form-label">Nombre</label>
							<input
								type="text"
								id="name"
								v-model="formData.nombre"
								class="form-control"
								placeholder="Tu nombre completo"
								required
							/>
						</div>
						<div class="col-md-6">
							<label for="email" class="form-label">Correo Electrónico</label>
							<input
								type="email"
								id="email"
								v-model="formData.email"
								class="form-control"
								placeholder="ejemplo@correo.com"
								required
							/>
						</div>
						<div class="col-12">
							<label for="subject" class="form-label">Asunto</label>
							<input
								type="text"
								id="subject"
								v-model="formData.asunto"
								class="form-control"
								placeholder="Motivo del contacto"
								required
							/>
						</div>
						<div class="col-12">
							<label for="message" class="form-label">Mensaje</label>
							<textarea
								id="message"
								v-model="formData.mensaje"
								class="form-control"
								rows="3"
								placeholder="Escribe tu mensaje aquí..."
								required
							></textarea>
						</div>
						<div class="col-12">
							<button type="submit" class="btn btn-custom w-100">Enviar</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import axios from "axios";
import contactImage from "../assets/images/contact_image.jpg";

export default {
	data() {
		return {
			contactImage,
			formData: {
				nombre: "",
				email: "",
				asunto: "",
				mensaje: "",
			},
		};
	},
	methods: {
		submitForm() {
			const now = new Date();
			const data = {
				HOJA: "Leads",
				PRODUCTO: "Contacto",
				FECHA: now.toLocaleDateString(),
				AÑO: now.getFullYear(),
				MES: now.getMonth() + 1,
				DIA: now.getDate(),
				"HH:MM": `${now.getHours()}:${now.getMinutes()}`,
				...this.formData,
			};

			const proxyUrl = "https://cors-anywhere.herokuapp.com/";
			const googleScriptUrl =
				"https://script.google.com/macros/s/AKfycbzQINUw9bE3dBw5bslOSO8CZS9vklSpFw-pOYA6iPwSwfRfBhkRp0z5RTvUIE22O2Q5/exec";

			axios
				.post(proxyUrl + googleScriptUrl, new URLSearchParams(data))
				.then(() => alert("Formulario enviado correctamente. ¡Gracias!"))
				.catch(() =>
					alert("Error al enviar el formulario. Inténtalo de nuevo.")
				);
		},
	},
};
</script>

<style scoped>
.form-background {
	background-color: #f5f5f5;
	border-radius: 10px;
	padding: 20px;
}
#contact {
	padding: 50px 0;
}

h2 {
	font-size: 1.8rem;
	color: #003366;
}

p {
	font-size: 0.95rem;
	color: #555;
}

img {
	max-width: 100%;
	height: auto;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-label {
	font-weight: bold;
	color: #003366;
}

.form-control {
	border: 1px solid #ddd;
	border-radius: 8px;
	padding: 8px;
	font-size: 0.9rem;
}

.form-control:focus {
	border-color: #ff6600;
	box-shadow: 0 0 5px rgba(255, 102, 0, 0.5);
}

.btn-custom {
	background-color: #ff6600;
	color: white;
	border: none;
	padding: 10px;
	font-size: 0.95rem;
	border-radius: 8px;
	transition: background-color 0.3s ease;
}

.btn-custom:hover {
	background-color: #d94e00;
}

/* Estilos específicos para dispositivos móviles */
@media (max-width: 768px) {
	#contact {
		padding: 30px 15px;
	}

	h2 {
		font-size: 1.5rem;
	}

	p {
		font-size: 0.85rem;
		margin-bottom: 1rem;
	}

	.form-control {
		font-size: 0.85rem;
		padding: 10px;
	}

	.row.g-3 > * {
		padding: 0 10px;
	}

	.img-fluid {
		max-width: 80%;
		margin: 0 auto;
		border-radius: 12px;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}
}
</style>
