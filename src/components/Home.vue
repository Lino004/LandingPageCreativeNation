<template>
    <!-- home
    ================================================== -->
    <section
      id="home"
      class="s-home target-section"
      data-parallax="scroll"
      data-image-src="https://firebasestorage.googleapis.com/v0/b/landingpagecreativenation.appspot.com/o/bg%2Fhero-bg.jpg?alt=media&token=7821834b-73f7-4ce6-b6db-6c7f5ca31785"
      data-natural-width=3000
      data-natural-height=2000
      data-position-y=center>

        <div class="overlay"></div>
        <div class="shadow-overlay"></div>

        <div class="home-content">

            <div class="row home-content__main">

                <h3>Welcom to Creative Nation</h3>

                <h1>
                    We are a creative group <br>
                    of people who design <br>
                    influential brands and <br>
                    digital experiences.
                </h1>

                <div class="home-content__buttons">
                    <a href="#contact" v-smooth-scroll class="btn btn--stroke">
                        Start a Project
                    </a>
                    <a href="#about" v-smooth-scroll class="btn btn--stroke">
                        More About Us
                    </a>
                </div>

            </div>

            <div class="home-content__scroll">
                <a href="#about" v-smooth-scroll class="scroll-link">
                    <span>Scroll Down</span>
                </a>
            </div>

            <div class="home-content__line"></div>

        </div> <!-- end home-content -->


        <ul class="home-social">
            <li>
                <a href="#0"><i class="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></a>
            </li>
            <li>
                <a href="#0"><i class="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></a>
            </li>
            <li>
                <a href="#0"><i class="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></a>
            </li>
            <li>
                <a href="#0"><i class="fa fa-whatsapp" aria-hidden="true"></i><span>Whatsapp</span></a>
            </li>
           
        </ul> 
        <!-- end home-social -->
    </section> <!-- end s-home -->
</template>

<script>
export default {
  computed: {
    img () {
      return require('../assets/images/hero-bg.jpg');
    }
  }
}
</script>

<style>

</style>
