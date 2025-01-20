<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-light">
			<div class="container">
				<router-link to="/" class="navbar-brand d-flex align-items-center">
					<div class="logo-container">
						<img
							src="../assets/images/Designs/Navbar - Logo Matde Hor Fond Osc.svg"
							alt="MATDE Logo"
							class="brand-logo"
						/>
					</div>
				</router-link>
				<button
					class="navbar-toggler"
					type="button"
					@click="toggleMenu"
					aria-controls="navbarNav"
					:aria-expanded="isMenuOpen"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div
					class="collapse navbar-collapse"
					:class="{ show: isMenuOpen }"
					id="navbarNav"
					ref="navbarNav"
				>
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<router-link to="/" class="nav-link" @click="closeMenu"
								><span>INICIO</span></router-link
							>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle no-arrow d-flex align-items-center"
								href="#"
								id="segurosDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span>SEGUROS</span>
							</a>
							<ul class="dropdown-menu" aria-labelledby="segurosDropdown">
								<li>
									<router-link
										to="/flotas"
										class="dropdown-item"
										@click="closeMenu"
										><span>Flotas de Autos</span></router-link
									>
								</li>
								<li>
									<router-link
										to="/art"
										class="dropdown-item"
										@click="closeMenu"
										><span>A.R.T.</span></router-link
									>
								</li>
								<li>
									<router-link
										to="/accidentes-personales"
										class="dropdown-item"
										@click="closeMenu"
										><span>Accidentes Personales</span></router-link
									>
								</li>
								<li>
									<router-link
										to="/comercio"
										class="dropdown-item"
										@click="closeMenu"
										><span>Integral de Comercio</span></router-link
									>
								</li>
								<li>
									<router-link
										to="/consorcio"
										class="dropdown-item"
										@click="closeMenu"
										><span>Integral de Consorcio</span></router-link
									>
								</li>
								<li>
									<router-link
										to="/todo-riesgo-operativo"
										class="dropdown-item"
										@click="closeMenu"
										><span>Todo Riesgo Operativo</span></router-link
									>
								</li>
								<li>
									<router-link
										to="/transport"
										class="dropdown-item"
										@click="closeMenu"
										><span>Transporte de Mercancías</span></router-link
									>
								</li>
								<li>
									<router-link
										to="/caucion"
										class="dropdown-item"
										@click="closeMenu"
										><span>Caución</span></router-link
									>
								</li>
								<li>
									<router-link
										to="/mala-praxis"
										class="dropdown-item"
										@click="closeMenu"
										><span>Mala Praxis</span></router-link
									>
								</li>
								<li>
									<router-link
										to="/combinado-familiar"
										class="dropdown-item"
										@click="closeMenu"
										><span>Combinado Familiar</span></router-link
									>
								</li>
								<li>
									<router-link
										to="/bicicletas"
										class="dropdown-item"
										@click="closeMenu"
										><span>Bicicletas</span></router-link
									>
								</li>
								<li>
									<router-link
										to="/notebooks"
										class="dropdown-item"
										@click="closeMenu"
										><span>Notebooks</span></router-link
									>
								</li>
								<li>
									<router-link
										to="/celulares"
										class="dropdown-item"
										@click="closeMenu"
										><span>Celulares</span></router-link
									>
								</li>
							</ul>
						</li>
						<li class="nav-item">
							<router-link to="/services" class="nav-link" @click="closeMenu">
								<span>SERVICIOS</span>
							</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/about" class="nav-link" @click="closeMenu">
								<span>NOSOTROS</span>
							</router-link>
						</li>

						<li class="nav-item">
							<router-link to="/contact" class="nav-link" @click="closeMenu">
								<span>CONTACTO</span>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return {
			isMenuOpen: false,
		};
	},
	mounted() {
		document.addEventListener("click", this.handleClickOutside);
	},
	beforeUnmount() {
		document.removeEventListener("click", this.handleClickOutside);
	},
	methods: {
		toggleMenu(event) {
			event.stopPropagation();
			this.isMenuOpen = !this.isMenuOpen;
		},
		closeMenu() {
			this.isMenuOpen = false;
		},
		handleClickOutside(event) {
			const menu = this.$refs.navbarNav;
			const toggler = event.target.closest(".navbar-toggler");
			if (this.isMenuOpen && menu && !menu.contains(event.target) && !toggler) {
				this.closeMenu();
			}
		},
	},
};
</script>

<style scoped>
header {
	background-color: #003366;
	color: white;
	padding: 0; /* Ajuste para que no se mueva el contenido */
	z-index: 1030; /* Asegura que el navbar esté por encima de otros elementos */
}

.navbar {
	background-color: #003366; /* Fondo azul fijo para toda la barra */
	position: fixed;
	width: 100%; /* Ocupa todo el ancho */
	top: 0;
	left: 0;
	z-index: 1030;
}

.container {
	max-width: 1165px;
}

.logo-container {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.brand-logo {
	width: 150px;
	height: auto;
}

.navbar-brand {
	color: #ff6600;
	font-size: 1rem;
	font-weight: bold;
}

.navbar-nav .nav-link {
	color: white !important;
	padding: 10px 15px;
	font-weight: bold;
	transition: all 0.3s ease;
	position: relative;
	display: flex;
	align-items: center;
}

.navbar-nav .nav-link span::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 0;
	height: 3px;
	background-color: #ff6600;
	transition: width 0.3s ease;
}

.navbar-nav .nav-link span:hover::after {
	width: 100%;
}

.triangle {
	width: 0;
	height: 0;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-top: 5px solid white;
	transition: transform 0.3s ease;
}

.nav-item.dropdown.show .triangle {
	transform: rotate(180deg);
}

.navbar-nav .dropdown-menu {
	background-color: #003366;
	border-radius: 5px;
	margin-top: 16px;
}

.dropdown-item {
	color: white;
	transition: all 0.3s ease;
	font-weight: bold;
	position: relative;
	display: flex;
	align-items: center;
	padding: 5px 15px;
}

.dropdown-item:hover {
	background-color: #004080;
	color: white;
}

.dropdown-item::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 0;
	height: 3px;
	background-color: #ff6600;
	transition: width 0.3s ease;
}

.dropdown-item:hover::after {
	width: 100%;
}

/* Ajusta el contenido para compensar el navbar fijo */
body {
	padding-top: 70px; /* Ajusta según la altura del navbar */
}

.navbar-toggler-icon {
	background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255,255,255,1)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-toggler {
	border-color: white !important;
}

.dropdown-menu.show {
	display: block;
}

@media (max-width: 768px) {
	.dropdown-menu {
		background-color: #ffffff !important;
	}

	.dropdown-item {
		color: #003366;
	}

	.dropdown-item:hover {
		background-color: #f2f2f2;
		color: #003366;
	}

	.dropdown-item::after {
		background-color: #ff6600;
	}
}
</style>
