<template>
	<section id="partners" class="container my-5" data-aos="fade-right">
		<h2 class="text-center mb-4">Socios Estratégicos</h2>
		<div class="carousel slide" id="partnersCarousel" data-bs-ride="carousel">
			<div class="carousel-inner">
				<div
					v-for="(logoChunk, index) in chunkedPartnersLogos"
					:key="index"
					class="carousel-item"
					:class="{ active: index === 0 }"
				>
					<div class="d-flex justify-content-around align-items-center">
						<div
							v-for="(logo, subIndex) in logoChunk"
							:key="subIndex"
							class="partner-item"
						>
							<img
								:src="logo"
								:alt="'Logo ' + (subIndex + 1)"
								class="img-fluid partner-logo"
							/>
						</div>
					</div>
				</div>
			</div>
			<!-- <button
				class="carousel-control-prev"
				type="button"
				data-bs-target="#partnersCarousel"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Anterior</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-bs-target="#partnersCarousel"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Siguiente</span>
			</button> -->
		</div>
	</section>
</template>

<script>
import AndinaArt from "../assets/images/Logos/AndinaArt.jpg";
import BerkleyArt from "../assets/images/Logos/BerkleyArt.jpg";
import ExpertaArt from "../assets/images/Logos/ExpertaArt.jpg";
import GalenoArtJpg from "../assets/images/Logos/GalenoArt.jpg";
import OmintArt from "../assets/images/Logos/OmintArt.jpg";
import PatronalArt from "../assets/images/Logos/PatronalArt.png";
import PrevencionSancorArt from "../assets/images/Logos/PrevencionSancorArt.jpg";
import ProvinciaArt from "../assets/images/Logos/ProvinciaArt.jpg";
import SmgArt from "../assets/images/Logos/SmgArt.svg";
import Allianz from "../assets/images/Logos/AllianzGral.png";
import GaliciaSeguros from "../assets/images/Logos/galiciaSeguros.png";
import MercantilAndina from "../assets/images/Logos/MercantilAndina.png";
import MeridionalSeguros from "../assets/images/Logos/MeridionalSeguros.jpg";
import rusSeguros from "../assets/images/Logos/rusSeguros.png";
import SancorSeguros from "../assets/images/Logos/SancorSeguros.png";
import SanCristobal from "../assets/images/Logos/SanCristobal.png";
import SanPatricioSeguros from "../assets/images/Logos/SanPatricioSeguros.png";
import universalAsistance from "../assets/images/Logos/universalAsistance.png";
import ZurichGral from "../assets/images/Logos/ZurichGral.png";

export default {
	data() {
		return {
			partnersLogos: [
				AndinaArt,
				BerkleyArt,
				ExpertaArt,
				GalenoArtJpg,
				OmintArt,
				PatronalArt,
				PrevencionSancorArt,
				ProvinciaArt,
				SmgArt,
				Allianz,
				GaliciaSeguros,
				MercantilAndina,
				MeridionalSeguros,
				rusSeguros,
				SancorSeguros,
				SanCristobal,
				SanPatricioSeguros,
				universalAsistance,
				ZurichGral,
			],
		};
	},
	computed: {
		chunkedPartnersLogos() {
			const chunkSize = 4;
			const chunks = [];
			for (let i = 0; i < this.partnersLogos.length; i += chunkSize) {
				chunks.push(this.partnersLogos.slice(i, i + chunkSize));
			}
			return chunks;
		},
	},
};
</script>

<style scoped>
#partners {
	padding: 50px 0;
}

.partner-logo {
	max-width: 200px;
	height: auto;
	object-fit: contain;
	transition: transform 0.3s ease;
}

.partner-logo:hover {
	transform: scale(1.1);
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
	filter: invert(1);
}
</style>

<!-- Version sin carrousel -->
<!-- <template>
	<section id="partners" class="container my-5" data-aos="fade-right">
		<h2 class="text-center mb-4">Socios Estratégicos</h2>
		<div class="row justify-content-center">
			<div
				v-for="(logo, index) in partnersLogos"
				:key="index"
				class="col-6 col-md-3 mb-4 text-center"
			>
				<img
					:src="logo"
					:alt="'Logo ' + (index + 1)"
					class="img-fluid partner-logo"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import AndinaArt from "../assets/images/Logos/AndinaArt.jpg";
import BerkleyArt from "../assets/images/Logos/BerkleyArt.jpg";
import ExpertaArt from "../assets/images/Logos/ExpertaArt.jpg";
import GalenoArtJpg from "../assets/images/Logos/GalenoArt.jpg";
import GalenoArtPng from "../assets/images/Logos/GalenoArt.png";
import OmintArt from "../assets/images/Logos/OmintArt.jpg";
import PatronalArt from "../assets/images/Logos/PatronalArt.png";
import PrevencionSancorArt from "../assets/images/Logos/PrevencionSancorArt.jpg";
import ProvinciaArt from "../assets/images/Logos/ProvinciaArt.jpg";
import SmgArt from "../assets/images/Logos/SmgArt.svg";

export default {
	data() {
		return {
			partnersLogos: [
				AndinaArt,
				BerkleyArt,
				ExpertaArt,
				GalenoArtJpg,
				GalenoArtPng,
				OmintArt,
				PatronalArt,
				PrevencionSancorArt,
				ProvinciaArt,
				SmgArt,
			],
		};
	},
};
</script>

<style scoped>
#partners {
	padding: 50px 0;
}

.partner-logo {
	max-width: 150px; /* Ajusta el tamaño según sea necesario */
	height: auto;
	object-fit: contain;
	transition: transform 0.3s ease;
}

.partner-logo:hover {
	transform: scale(1.1); /* Efecto de hover para resaltar los logos */
}
</style> -->
