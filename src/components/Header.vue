<template>
    <!-- header
    ================================================== -->
    <header class="s-header" :class="{'menu-is-open': openMenu}">

        <div class="header-logo">
            <a class="site-logo" href="index.html">
                <img src="../assets/images/logo.png" alt="Homepage">
            </a>
        </div>

        <nav class="header-nav">

            <a href="#0"
              class="header-nav__close"
              title="close"
              @click="openMenu = false">
              <span>Close</span>
            </a>

            <div class="header-nav__content">
                <h3>Navigation</h3>
                
                <ul class="header-nav__list">
                    <li class="current"><a class="smoothscroll" v-smooth-scroll href="#home" title="home">Home</a></li>
                    <li><a class="smoothscroll" v-smooth-scroll href="#about" title="about">About</a></li>
                    <li><a class="smoothscroll" v-smooth-scroll href="#services" title="services">Services</a></li>
                    <li><a class="smoothscroll" v-smooth-scroll href="#works" title="works">Works</a></li>
                    <li><a class="smoothscroll" v-smooth-scroll href="#clients" title="clients">Clients</a></li>
                    <li><a class="smoothscroll" v-smooth-scroll href="#contact" title="contact">Contact</a></li>
                </ul>
    
                <p>Perspiciatis hic praesentium nesciunt. Et neque a dolorum <a href='#0'>voluptatem</a> porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>
    
                <ul class="header-nav__social">
                    <li>
                        <a href="#"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-whatsapp"></i></a>
                    </li>
                    
                </ul>

            </div> <!-- end header-nav__content -->

        </nav>  <!-- end header-nav -->

        <a 
          class="header-menu-toggle"
          href="#0"
          @click="openMenu = true">
            <span class="header-menu-text">Menu</span>
            <span class="header-menu-icon"></span>
        </a>

    </header> <!-- end s-header -->
</template>

<script>
export default {
  data: () => ({
    openMenu: false
  })
}
</script>

<style>
</style>
