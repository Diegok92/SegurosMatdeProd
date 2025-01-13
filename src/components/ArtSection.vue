<template>
    <section id="art" class="container my-5" data-aos="fade-up">
        <h2 class="text-center mb-4">ART / Accidentes Personales</h2>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <img :src="artImage" alt="ART Insurance" class="img-fluid rounded mb-4" />
                <p>La ART debe ser contratada por empleadores que cuentan con empleados en relación de dependencia. La
                    misma se encarga de reparar los daños económicos en casos de accidentes de trabajo o enfermedades
                    profesionales.</p>
            </div>
        </div>
    </section>
</template>

<script>
import artImage from '../assets/images/art_insurance_matde.jpg';

export default {
    data() {
        return {
            artImage
        };
    }
};
</script>

<style scoped>
#art {
    text-align: center;
}
</style>
