<template>
    <!-- teams
    ================================================== -->
    <section id="clients" class="s-clients">

        <div class="row section-header" data-aos="fade-up">
            <div class="col-full">
                <h3 class="subhead">Our Clients</h3>
                <h1 class="display-2">Glint has been honored to
                partner up with these clients</h1>
            </div>
        </div> <!-- end section-header -->

        <div class="row clients-testimonials" data-aos="fade-up">
            <div class="col-full">
                <div class="testimonials">

                    <slick
                        ref="slick"
                        :options="slickOptions">
                        <a href="#0" title="" class="clients__slide">
                            <img src="images/avatars/user-01.jpg" alt="Author image" class="testimonials__avatar">
                            <div class="testimonials__info">
                                <span class="testimonials__name">Tim Cook</span> 
                                <span class="testimonials__pos">CEO, Apple</span>
                            </div>
                        </a>
                        <a href="#0" title="" class="clients__slide">
                            <img src="images/avatars/user-02.jpg" alt="Author image" class="testimonials__avatar">
                            <div class="testimonials__info">
                                <span class="testimonials__name">Tim Cook</span> 
                                <span class="testimonials__pos">CEO, Apple</span>
                            </div>
                        </a>
                        <a href="#0" title="" class="clients__slide">
                            <img src="images/avatars/user-03.jpg" alt="Author image" class="testimonials__avatar">
                            <div class="testimonials__info">
                                <span class="testimonials__name">Tim Cook</span> 
                                <span class="testimonials__pos">CEO, Apple</span>
                            </div>
                        </a>
                    </slick>

                </div><!-- end testimonials -->
                
            </div> <!-- end col-full -->
        </div> <!-- end client-testimonials -->

    </section> <!-- end s-clients -->

</template>

<script>
import Slick from 'vue-slick';
export default {
    components: { Slick },
 
    data() {
        return {
            slickOptions: {
                centerMode: true,
                arrows: false,
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 2,
                //autoplay: true,
                pauseOnFocus: false,
                autoplaySpeed: 1000,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 5
                        }
                    },
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }
                ]
            },
        };
    },
 
    // All slick methods can be used too, example here
    methods: {
        next() {
            this.$refs.slick.next();
        },
 
        prev() {
            this.$refs.slick.prev();
        },
 
        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
    },
}
</script>

<style>

</style>
