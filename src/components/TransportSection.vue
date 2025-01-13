<template>
    <section id="transport" class="container my-5" data-aos="fade-left">
        <h2 class="text-center mb-4">Seguro de Transporte de Mercancías</h2>
        <div class="row">
            <div class="col-md-12">
                <img :src="transportImage" alt="Transport Insurance" class="img-fluid rounded mb-4" />
                <p>Protege tu carga durante el trayecto con coberturas específicas para transporte terrestre, marítimo o
                    aéreo.</p>
            </div>
        </div>
    </section>
</template>

<script>
import transportImage from '../assets/images/cargo_transport_insurance_matde.jpg';

export default {
    data() {
        return {
            transportImage
        };
    }
};
</script>

<style scoped>
#transport {
    padding: 50px 0;
}
</style>
