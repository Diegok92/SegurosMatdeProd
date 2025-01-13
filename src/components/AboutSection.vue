<template>
	<div class="services-page container my-5">
		<!-- Sección Acerca de Nosotros -->
		<section class="about-us-section my-5 py-5">
			<div class="about-container p-4">
				<h2 class="mb-4 section-title text-center">Acerca de Nosotros</h2>
				<p class="lead mb-4 text-center">
					En Matde, creemos que la protección es la base para construir un
					futuro seguro y lleno de posibilidades. Desde nuestro inicio, hemos
					trabajado con el firme compromiso de ofrecer soluciones confiables y
					adaptadas a las necesidades de nuestros clientes.
				</p>
				<p class="mb-4 text-center">
					Nuestra misión es brindarte tranquilidad. Nos especializamos en
					diseñar productos y servicios que protegen lo que más valoras: tu
					vida, tu familia, tu patrimonio y tus proyectos. Sabemos que cada
					cliente es único, por eso creamos planes a medida, garantizando que
					siempre tengas el respaldo que necesitas.
				</p>
				<div class="text-center">
					<h3 class="mb-3">¿Quiénes somos?</h3>
					<p class="mb-3">
						Somos una empresa sólida y cercana, con años de experiencia en el
						sector asegurador. Nos distingue nuestro enfoque humano, basado en
						la confianza, la transparencia y la innovación. Contamos con un
						equipo de expertos comprometidos en asesorarte y acompañarte en cada
						paso, para que tomes las mejores decisiones de protección.
					</p>
				</div>
				<div class="text-center">
					<h3 class="mb-3">¿Qué nos hace diferentes?</h3>
					<ul class="list-unstyled">
						<li class="mb-3">
							<strong>Trayectoria confiable:</strong> Nuestra experiencia nos
							permite ofrecer servicios de calidad que respaldan tu bienestar y
							tu patrimonio.
						</li>
						<li class="mb-3">
							<strong>Innovación constante:</strong> Incorporamos las mejores
							herramientas tecnológicas para simplificar procesos y brindarte
							soluciones modernas.
						</li>
						<li class="mb-3">
							<strong>Atención personalizada:</strong> Escuchamos tus
							necesidades y diseñamos coberturas que se adaptan a tus objetivos
							y estilo de vida.
						</li>
						<li class="mb-3">
							<strong>Compromiso contigo:</strong> Estamos contigo en los
							momentos más importantes, trabajando para resolver tus problemas
							con rapidez y eficacia.
						</li>
					</ul>
				</div>
				<div class="text-center">
					<h3 class="mb-3">Nuestra Visión</h3>
					<p>
						Queremos ser tu aliado estratégico en seguros, proporcionando
						tranquilidad y estabilidad, para que vivas cada día sin
						preocupaciones.
					</p>
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

		<!-- Sección de Contacto -->
		<section class="contact-section text-center py-5">
			<p class="mb-4 lead">
				Estamos aquí para ayudarte a proteger lo que más valoras. Contáctanos
				hoy mismo y encuentra la cobertura perfecta para ti o tu empresa.
			</p>
			<ul class="list-unstyled contact-info">
				<li class="mb-3">
					<strong>Teléfono:</strong>
					<span class="highlight">[Número de contacto]</span>
				</li>
				<li class="mb-3">
					<strong>Email:</strong>
					<span class="highlight">[Correo electrónico]</span>
				</li>
				<li class="mb-3">
					<strong>Dirección:</strong>
					<span class="highlight">[Ubicación física]</span>
				</li>
				<li>
					<strong>Sitio web:</strong>
					<span class="highlight">[Enlace al sitio]</span>
				</li>
			</ul>
			<p class="mt-4 font-weight-bold highlight">
				Tu tranquilidad es nuestro compromiso. ¡Confiá en nosotros!
			</p>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
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
.services-page h2 {
	font-weight: bold;
}

.section-title {
	font-size: 2rem;
	color: #003366;
	text-transform: uppercase;
	margin-bottom: 20px;
}

.about-us-section {
	padding: 30px;
	background-color: #f8f9fa;
	border-radius: 15px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.why-choose-us-section .reason-card {
	border-radius: 15px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.reason-icon {
	font-size: 2.5rem;
	color: #ff6600;
}

.contact-section {
	background-color: #003366;
	color: #ffffff;
	padding: 40px;
	border-radius: 15px;
}

.highlight {
	color: #ffcc00;
	font-weight: bold;
}
</style>
