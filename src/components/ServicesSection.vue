<template>
    <section id="services" class="container my-5" data-aos="fade-up">
        <h2 class="text-center mb-4">Nuestros Servicios</h2>
        <div class="row justify-content-center">
            <div class="col-md-6 mb-4">
                <img :src="servicesImage" alt="Nuestros Servicios" class="img-fluid rounded" />
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Asignación de un ejecutivo de cuentas para tu empresa</li>
                    <li class="list-group-item">Gestión de reintegros de ILT</li>
                    <li class="list-group-item">Seguimiento de siniestros</li>
                    <li class="list-group-item">Análisis de cuentas corrientes y gestiones de planes de pago</li>
                    <li class="list-group-item">Emisión de certificados de cobertura con y sin cláusula de no repetición
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import servicesImage from '../assets/images/services_image.jpg';

export default {
    data() {
        return {
            servicesImage
        };
    }
};
</script>

<style scoped>
#services {
    padding: 50px 0;
}
</style>
