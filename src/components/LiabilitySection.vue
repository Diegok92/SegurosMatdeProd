<template>
    <section id="liability" class="container my-5" data-aos="fade-up">
        <h2 class="text-center mb-4">Responsabilidad Civil y Garantías IATA</h2>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <img :src="liabilityImage" alt="Liability Insurance" class="img-fluid rounded mb-4" />
                <p>Ofrecemos seguros de responsabilidad civil y cauciones, incluyendo garantías para obras públicas y
                    privadas, y cauciones IATA.</p>
            </div>
        </div>
    </section>
</template>

<script>
import liabilityImage from '../assets/images/liability_iata_matde.jpg';

export default {
    data() {
        return {
            liabilityImage
        };
    }
};
</script>

<style scoped>
#liability {
    text-align: center;
}
</style>
