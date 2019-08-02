<template>
     <!-- works
    ================================================== -->
    <section id='works' class="s-works">

        <div class="intro-wrap">
                
            <div class="row section-header has-bottom-sep light-sep" data-aos="fade-up">
                <div class="col-full">
                    <h3 class="subhead">Recent Works</h3>
                    <h1 class="display-2 display-2--light">We love what we do, check out some of our latest works</h1>
                </div>
            </div> <!-- end section-header -->

        </div> <!-- end intro-wrap -->

        <div class="row works-content">
            <div class="col-full masonry-wrap">
                <div v-masonry transition-duration="3s" item-selector=".masonry__brick" class="masonry">
    
                    <div v-masonry-tile class="masonry__brick" data-aos="fade-up"
                         v-for="(img, index) in images" :key="index"
                         @click="showPhotoSwipe(index)">
                        <div class="item-folio">
                                
                            <div class="item-folio__thumb">
                                <a class="thumb-link" :title="img.titre" data-size="1050x700">
                                    <img :src="img.src" 
                                         :srcset="`${img.src} 1x, ${img.srcset} 2x`" alt="">
                                </a>
                            </div>
    
                            <div class="item-folio__text">
                                <h3 class="item-folio__title">
                                   {{img.titre}}
                                </h3>
                                <p class="item-folio__cat">
                                   {{img.subtitle}}
                                </p>
                            </div>
    
                            <a :href="img.link" class="item-folio__project-link" title="Project link">
                                <i class="icon-link"></i>
                            </a>
    
                        </div>
                    </div> <!-- end masonry__brick -->

                </div> <!-- end masonry -->
            </div> <!-- end col-full -->
        </div> <!-- end works-content -->
        
        <v-photoswipe :isOpen="isOpen" :items="images" :options="options" @close="hidePhotoSwipe"></v-photoswipe>

    </section> <!-- end s-works -->
    
</template>

<script>
import { PhotoSwipe } from 'v-photoswipe'

export default {
  components: {
    'v-photoswipe': PhotoSwipe,
  },
  data () {
    return {
      isOpen: false,
      options: {
        index: 0
      },
      images: [
        {
          src: "/images/portfolio/eben'brush.png",
          srcset: "@/assets/images/portfolio/eben'brush@2x.png",
          titre: "Eben'brush",
          subtitle: 'Branding',
          title: "Eben'brush is a beniness makeup artist.",
          link: 'https://www.behance.net/',
          w: 1600,
          h: 1600,
        },
        {
          src: "/images/portfolio/allcheaper.jpg",
          srcset: "/images/portfolio/allcheaper@2x.jpg",
          titre: 'allcheaper',
          subtitle: 'Branding',
          title: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.",
          link: 'https://www.behance.net/',
          w: 1600,
          h: 1600,
        },
        {
          src: "/images/portfolio/the-beetle.jpg",
          srcset: "/images/portfolio/the-beetle@2x.jpg",
          titre: 'The Beetle',
          subtitle: 'Web Development',
          title: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.",
          link: 'https://www.behance.net/',
          w: 1600,
          h: 1600,
        },
        {
          src: "/images/portfolio/Cosmox.jpg",
          srcset: "/images/portfolio/Cosmox@2x.jpg",
          titre: 'Grow Green',
          subtitle: 'Branding',
          title: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.",
          link: 'https://www.behance.net/',
          w: 1600,
          h: 1600,
        },
        {
          src: "/images/portfolio/logodog.jpg",
          srcset: "/images/portfolio/logodog@2x.jpg",
          titre: 'logodog',
          subtitle: 'Web design',
          title: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.",
          link: 'https://www.behance.net/',
          w: 1600,
          h: 1600,
        },
        {
          src: "/images/portfolio/LAASTKING.jpg",
          srcset: "@/assets/images/portfolio/LAASTKING@2x.jpg",
          titre: 'Palmeira',
          subtitle: 'Web design',
          title: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.",
          link: 'https://www.behance.net/',
          w: 1600,
          h: 1600,
        },
      ]
    }
  },
  mounted: function(){
    this.$redrawVueMasonry();
  },
  methods: {
    showPhotoSwipe (index) {
      this.isOpen = true
      this.$set(this.options, 'index', index)
    },
    hidePhotoSwipe () {
      this.isOpen = false
    }},
};
</script>

<style>

.item {
  border: 1px solid #ac0;
  width: 200px;
}
.masonry-container {
      width: 55%;
    margin: 0 auto;
}
</style>
