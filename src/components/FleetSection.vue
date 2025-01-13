<template>
    <section id="fleet" class="container my-5" data-aos="fade-right">
        <h2 class="text-center mb-4">Seguro para Flotas de Autos</h2>
        <div class="row">
            <div class="col-md-12">
                <img :src="fleetImage" alt="Fleet Insurance" class="img-fluid rounded mb-4" />
                <p>Cubrimos flotas de autos comerciales para brindar tranquilidad y seguridad a las empresas que manejan
                    múltiples vehículos.</p>
            </div>
        </div>
    </section>
</template>

<script>
import fleetImage from '../assets/images/fleet_insurance_matde.jpg';

export default {
    data() {
        return {
            fleetImage
        };
    }
};
</script>

<style scoped>
#fleet {
    padding: 50px 0;
}
</style>
