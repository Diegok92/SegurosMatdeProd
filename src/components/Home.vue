<template>
	<div class="home">
		<HeroSection />

		<!-- Resumen de Servicios -->
		<section class="services-summary container my-4">
			<h2 class="services-title text-center mb-5">Te Cubrimos:</h2>
			<div class="row">
				<div
					class="col-md-4 mb-4"
					data-aos="fade-up"
					v-for="service in services"
					:key="service.title"
				>
					<div class="card h-100 d-flex flex-column">
						<!-- Imagen -->
						<img
							:src="getServiceImage(service.image)"
							alt="Service Image"
							class="card-img-top"
						/>
						<!-- Línea divisoria -->
						<div class="divider"></div>
						<div class="card-body d-flex flex-column">
							<h5 class="card-title">{{ service.title }}</h5>
							<p class="card-text">{{ service.description }}</p>
							<router-link
								:to="service.link"
								class="btn btn-custom mt-auto align-self-end"
								>Más Información</router-link
							>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Sección de Socios Estratégicos -->
		<PartnersSection />
	</div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import PartnersSection from "../components/PartnersSection.vue";

export default {
	components: {
		HeroSection,
		PartnersSection,
	},
	data() {
		return {
			services: [
				{
					title: "Flotas de Autos",
					description:
						"Cobertura integral para flotas de vehículos comerciales, adaptada a cada empresa.",
					link: "/flotas",
					image: "Flota.png",
				},
				{
					title: "A.R.T.",
					description:
						"Cobertura para empleadores y trabajadores, incluye accidentes y enfermedades profesionales.",
					link: "/art",
					image: "Art.png",
				},
				{
					title: "Accidentes Personales",
					description:
						"Cobertura para lesiones, invalidez o fallecimiento causados por accidentes.",
					link: "/accidentes-personales",
					image: "Ap.png",
				},
				{
					title: "Integral de Comercio",
					description:
						"Protección para la estructura física del comercio, inventario y responsabilidad civil.",
					link: "/comercio",
					image: "Comercio.png",
				},
				{
					title: "Integral de Consorcio",
					description:
						"Protección para edificios / propiedad horizontal, incluyendo áreas comunes y responsabilidad civil.",
					link: "/consorcio",
					image: "Consorcio.png",
				},
				{
					title: "Todo Riesgo Operativo",
					description:
						"Cobertura integral para empresas, protegiendo contra daños materiales y pérdidas económicas.",
					link: "/todo-riesgo-operativo",
					image: "TRO.png",
				},
				{
					title: "Transporte de Mercancías",
					description:
						"Cobertura para la carga durante el transporte terrestre, marítimo o aéreo. Incluye robo, daños y mas.",
					link: "/transport",
					image: "TranspMerc.png",
				},
				{
					title: "Caución",
					description:
						"Garantías para el cumplimiento de obligaciones contractuales y demandas judiciales.",
					link: "/caucion",
					image: "Caucion.png",
				},
				{
					title: "Mala Praxis",
					description:
						"Cobertura para profesionales que enfrentan demandas por errores ejerciendo su labor.",
					link: "/mala-praxis",
					image: "MalaPraxis.png",
				},
				{
					title: "Combinado Familiar",
					description:
						"Protección para la vivienda y sus bienes frente a diversos riesgos como incendios y robos.",
					link: "/combinado-familiar",
					image: "Familia.png",
				},
				{
					title: "Bicicletas",
					description:
						"Cobertura contra robo, daños accidentales, y responsabilidad civil para bicicletas.",
					link: "/bicicletas",
					image: "Bici.png",
				},
				{
					title: "Notebooks",
					description:
						"Protección contra robo o daños accidentales para notebooks y computadoras portátiles.",
					link: "/notebooks",
					image: "Note.png",
				},
				{
					title: "Celulares",
					description:
						"Cobertura contra el robo, daños accidentales y fallas técnicas de dispositivos móviles.",
					link: "/celulares",
					image: "Celu.png",
				},
			],
		};
	},
	methods: {
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
.home {
	width: 100%;
}

.services-summary {
	padding: 50px 0;
	background: linear-gradient(to right, #f0f4f8, #d9e9f9);

	border-radius: 15px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

	padding: 30px;
	/* background: #e6f3ff; */
	background-color: #f5f5f5;
	border-radius: 20px;
}

.services-title {
	font-size: 2.5rem;
	font-weight: bold;
	color: #003366;
	text-transform: uppercase;
	text-shadow: 1px 1px 3px rgba(0, 51, 102, 0.3);
	position: relative;
}

.services-title::after {
	content: "";
	display: block;
	width: 100px;
	height: 5px;
	background-color: #ff6600;
	margin: 12px auto 0;
	border-radius: 5px;
}

.card {
	border: none;
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	border-radius: 10px;
	background: #ffffff;

	border: none;
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
	border-radius: 8px;
}

.card:hover {
	transform: translateY(-10px);
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
	background: #f5f9ff;
}

.card-img-top {
	height: 150px;
	object-fit: cover;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;

	height: 130px;
}

.card-body {
	height: 250px;
}

.divider {
	height: 4px;
	background-color: #ff6600;
	margin: 0;
}

.card-title {
	font-size: 1.6rem;
	font-weight: bold;
	color: #003366;
	text-align: center;
	margin-top: 15px;
}

.card-text {
	font-size: 1rem;
	color: #444;
	margin-bottom: 20px;
	text-align: center;
}

.btn-custom {
	background-color: #0056b3;
	border-color: #0056b3;
	color: #ffffff;
	transition: all 0.3s ease;
	padding: 10px 20px;
	font-weight: bold;
	border-radius: 5px;
	align-self: flex-end;
}

.btn-custom:hover {
	background-color: #ff6600;
	border-color: #ff6600;
	color: #ffffff;
}
</style>
