<template>
  <div id="app">
    <Header/>
    <Home/>
    <About/>
    <Services/>
    <Work/>
    <Teams/>
    <Contacts/>
    <Footer/>
  </div>
</template>

<script>
import AOS from 'aos'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Work from './components/Work.vue'
import Teams from './components/Teams.vue'
import Contacts from './components/Contacts.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Home,
    About,
    Services,
    Work,
    Teams,
    Contacts,
    Footer
  },
  mounted () {
    AOS.init( {
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 300,
      once: true,
      disable: 'mobile'
    });
  }
}
</script>

<style type="text/css">
@import url('./assets/css/base.css');
@import url('./assets/css/main.css');
@import url('./assets/css/vendor.css');
</style>
