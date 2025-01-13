<template>
	<div class="services-page container my-5">
		<!-- Sección de Bienvenida -->
		<section class="intro-section mb-5 text-center">
			<h1 class="display-4 mb-4">Bienvenidos a Matde</h1>
			<p class="lead">
				En Matde, trabajamos para ofrecerte tranquilidad, confianza y
				protección. Sabemos que cada persona, familia o empresa enfrenta retos
				únicos, por eso diseñamos soluciones personalizadas que se adaptan a tus
				necesidades.
			</p>
		</section>

		<!-- Sección de Servicios -->
		<section class="services-section mb-5">
			<h2 class="text-center mb-5 section-title">Nuestros Servicios</h2>
			<div class="row justify-content-center">
				<div
					class="col-lg-4 col-md-6 col-sm-12 mb-4"
					v-for="serviceCategory in serviceCategories"
					:key="serviceCategory.title"
				>
					<div class="card h-100 shadow-sm border-0 service-card">
						<div class="card-body text-center">
							<div class="icon-container mb-3">
								<i :class="serviceCategory.icon" class="service-icon"></i>
							</div>
							<h3 class="card-title">{{ serviceCategory.title }}</h3>
							<ul class="list-unstyled mt-3">
								<li
									v-for="service in serviceCategory.services"
									:key="service.name"
									class="mb-3 service-item"
								>
									<strong>{{ service.name }}:</strong> {{ service.description }}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Sección Por Qué Elegirnos -->
		<section class="why-choose-us-section my-5">
			<h2 class="text-center mb-5 section-title">¿Por qué elegirnos?</h2>
			<div class="row justify-content-center">
				<div
					class="col-lg-4 col-md-6 col-sm-12 mb-4"
					v-for="reason in reasonsToChooseUs"
					:key="reason.title"
				>
					<div class="card h-100 shadow-sm border-0 reason-card">
						<div class="card-body text-center">
							<div class="icon-container mb-3">
								<i :class="reason.icon" class="reason-icon"></i>
							</div>
							<h4 class="card-title">{{ reason.title }}</h4>
							<p class="card-text">{{ reason.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			serviceCategories: [
				{
					title: "Seguros para empresas",
					icon: "fas fa-building",
					services: [
						{
							name: "Seguros de Responsabilidad Civil",
							description:
								"Protege a tu empresa frente a reclamaciones legales por daños a terceros.",
						},
						{
							name: "Seguros Patrimoniales",
							description:
								"Cobertura contra pérdidas o daños a los bienes de tu empresa.",
						},
						{
							name: "Seguros para Empleados",
							description:
								"Cuidamos de tu equipo con opciones de seguros de vida, salud y accidentes.",
						},
					],
				},
				{
					title: "Seguros para personas",
					icon: "fas fa-user",
					services: [
						{
							name: "Seguros de Vida",
							description:
								"Protege a tus seres queridos con cobertura diseñada para garantizar su estabilidad económica en caso de imprevistos.",
						},
						{
							name: "Seguros de Salud",
							description:
								"Acceso a una red médica de calidad para que cuides de tu bienestar y el de tu familia.",
						},
						{
							name: "Seguros de Automóvil",
							description:
								"Cobertura integral para garantizar tu seguridad y la de tu vehículo frente a accidentes, robos y otros imprevistos en la carretera.",
						},
						{
							name: "Seguros de Hogar",
							description:
								"Resguarda tu patrimonio frente a robos, desastres naturales y accidentes.",
						},
					],
				},
				{
					title: "Seguros especializados",
					icon: "fas fa-shield-alt",
					services: [
						{
							name: "Seguros de Viajes",
							description:
								"Tranquilidad en cada destino con coberturas de asistencia médica, cancelaciones y más.",
						},
						{
							name: "Seguros para Mascotas",
							description:
								"Protección para los miembros peludos de la familia.",
						},
						{
							name: "Seguros Agrícolas",
							description:
								"Soluciones diseñadas para proteger tu actividad agrícola y tus cultivos.",
						},
					],
				},
			],
			reasonsToChooseUs: [
				{
					title: "Atención personalizada",
					icon: "fas fa-headset",
					description:
						"Nos enfocamos en entender tus necesidades y en brindarte soluciones a medida.",
				},
				{
					title: "Rapidez y confianza",
					icon: "fas fa-bolt",
					description:
						"Procesos simplificados y asistencia inmediata cuando más lo necesitas.",
				},
				{
					title: "Experiencia comprobada",
					icon: "fas fa-thumbs-up",
					description:
						"Años de trayectoria respaldan la calidad de nuestros servicios.",
				},
			],
		};
	},
};
</script>

<style scoped>
.services-page {
	padding-top: 20px;
}

.section-title {
	font-size: 2.5rem;
	color: #003366;
	text-transform: uppercase;
	margin-bottom: 20px;
}

.intro-section h1 {
	margin-top: 20px;
}

.intro-section p {
	font-size: 1.2rem;
	color: #444;
}

.services-section .card,
.why-choose-us-section .card {
	border: none;
	border-radius: 15px;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.services-section .card:hover,
.why-choose-us-section .card:hover {
	transform: translateY(-10px);
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.card-title {
	font-size: 1.5rem;
	font-weight: bold;
	color: #003366;
}

.service-icon,
.reason-icon {
	font-size: 3rem;
	color: #ff6600;
}

.about-us-section {
	padding: 30px;
	background-color: #f8f9fa;
	border-radius: 15px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.contact-section {
	background-color: #003366;
	color: #ffffff;
	padding: 40px;
	border-radius: 15px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.contact-info li {
	font-size: 1.2rem;
}

.highlight {
	font-size: 1.4rem;
	color: #ffcc00;
}

h3,
h4 {
	font-size: 1.8rem;
	color: #003366;
}
</style>
