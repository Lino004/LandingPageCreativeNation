<template>
  <!-- about
    ================================================== -->
    <section id='about' class="s-about">

        <div class="row section-header has-bottom-sep" data-aos="fade-up">
            <div class="col-full">
                <h3 class="subhead subhead--dark">Hello There</h3>
                <h1 class="display-1 display-1--light">We Are Creative Nation</h1>
            </div>
        </div> <!-- end section-header -->

        <div class="row about-desc" data-aos="fade-up">
            <div class="col-full">
                <p>
                test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt. 
                </p>
            </div>
        </div> <!-- end about-desc -->

        <div class="row about-stats stats block-1-4 block-m-1-2 block-mob-full" data-aos="fade-up">
                
            <div class="col-block stats__col">
                <number
                  class="stats__count"
                  ref="number1"
                  :from="numberFrom"
                  animationPaused
                  :to="127"
                  :duration="duration"
                  easing="Power4.easeOut"/>
                <h5>Awards Received</h5>
            </div>
            <div class="col-block stats__col">
                <number
                  class="stats__count"
                  ref="number2"
                  :from="numberFrom"
                  animationPaused
                  :to="800"
                  :duration="duration"
                  easing="Power4.easeOut"/>
                <h5>Cups of Coffee</h5>
            </div>
            <div class="col-block stats__col">
                <number
                  class="stats__count"
                  ref="number3"
                  :from="numberFrom"
                  animationPaused
                  :to="109"
                  :duration="duration"
                  easing="Power4.easeOut"/>
                <h5>Projects Completed</h5>
            </div>
            <div class="col-block stats__col">
                <number
                  class="stats__count"
                  ref="number4"
                  :from="numberFrom"
                  animationPaused
                  :to="102"
                  :duration="duration"
                  easing="Power4.easeOut"/>
                <h5>Happy Clients</h5> 
            </div>

        </div> <!-- end about-stats -->

        <div class="about__line"></div>

    </section> <!-- end s-about -->
</template>

<script>
export default {
  data: () => ({
    numberFrom: 0,
    numberTo: 5000,
    duration: 4,
    scaleClass: false,
    scrollPosition: null  
  }),
  watch: {
    scrollPosition (val) {
      if (val > 904) {
        this.playAnimation()
      }
    }
  },
  methods: {
    playAnimation() {
      this.$refs.number1.play();
      this.$refs.number2.play();
      this.$refs.number3.play();
      this.$refs.number4.play();
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.updateScroll);
  }
}
</script>

<style>

</style>
