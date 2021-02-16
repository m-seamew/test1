<template>
  <div class="container">
    <Preloader></Preloader>

    <div id="start">
      <LazyHydrate when-idle>
        <TableBlok/>
      </LazyHydrate>
    </div>

    <div id="ipo">
      <LazyHydrate :when-visible="lazyOption">
        <ChartScreen/>
      </LazyHydrate>
    </div>

    <div id="fondirovanie">
      <LazyHydrate :when-visible="lazyOption">
        <Mainaboutsystem/>
      </LazyHydrate>
    </div>

    <div id="test2">
      <LazyHydrate :when-visible="lazyOption">
        <TargetProject/>
      </LazyHydrate>
    </div>

    <div>
      <LazyHydrate :when-visible="lazyOption">
        <Token1/>
      </LazyHydrate>
    </div>

    <div>
      <LazyHydrate :when-visible="lazyOption">
        <Token2/>
      </LazyHydrate>
    </div>

    <!----->

    <div>
      <LazyHydrate :when-visible="lazyOption">
        <Devs/>
      </LazyHydrate>
    </div>

    <div>
      <LazyHydrate :when-visible="lazyOption">
        <Service1/>
      </LazyHydrate>
    </div>

    <div>
      <LazyHydrate :when-visible="lazyOption">
        <Service2/>
      </LazyHydrate>
    </div>

    <div>
      <LazyHydrate :when-visible="lazyOption">
        <Service3/>
      </LazyHydrate>
    </div>


    <div>
      <LazyHydrate :when-visible="lazyOption">
        <Infrastructure1/>
      </LazyHydrate>
    </div>

    <div id="test">
      <LazyHydrate :when-visible="lazyOption">
        <Infrastructure2/>
      </LazyHydrate>
    </div>

   <div>
      <LazyHydrate :when-visible="lazyOption">
        <Infrastructure3/>
      </LazyHydrate>
    </div>


   <div>
      <LazyHydrate :when-visible="lazyOption">
        <Sience1/>
      </LazyHydrate>
    </div>

    <div>
      <LazyHydrate :when-visible="lazyOption">
        <Sience2/>
      </LazyHydrate>
    </div>

    <div>
      <LazyHydrate :when-visible="lazyOption">
        <Sience3/>
      </LazyHydrate>
    </div>

    <div>
      <LazyHydrate :when-visible="lazyOption">
        <Sience4/>
      </LazyHydrate>
    </div>


     <div>
      <LazyHydrate :when-visible="lazyOption">
        <Potential></Potential>
      </LazyHydrate>
    </div>


    <div id="test3">
      <LazyHydrate :when-visible="lazyOption">
        <Plan1/>
      </LazyHydrate>
    </div>


    <div>
      <LazyHydrate :when-visible="lazyOption">
        <Plan2/>
      </LazyHydrate>
    </div>

    <div>
      <LazyHydrate :when-visible="lazyOption">
        <Vuvod/>
      </LazyHydrate>
    </div>

    <div>
      <LazyHydrate :when-visible="lazyOption">
        <Stat/>
      </LazyHydrate>
    </div>
  
  </div>
</template>

<script>
import layoutMiddleware from '@/middleware/layoutMiddleware';
import Preloader from '~/components/loading';
import LazyHydrate from 'vue-lazy-hydration';
const VueScrollTo = require('vue-scrollto');

export default {
  layout: layoutMiddleware,
  data: () => ({
    lang: 'ru',
    observer: {},
    id: [],
    lazyOption: { rootMargin: '2000px' },
  }),
  components: {
    Preloader,
    LazyHydrate,
    Infrastructure1: () => import('~/components/bloks/infrastructure1'),
    Infrastructure2: () => import('~/components/bloks/infrastructure2'),
    Infrastructure3: () => import('~/components/bloks/infrastructure3'),
    TableBlok:       () => import('~/components/bloks/tablecomp'),
    Mainaboutsystem: () => import('~/components/bloks/mainaboutsystem'),
    ChartScreen:     () => import('~/components/bloks/chartscreen'),
    TargetProject:   () => import('~/components/bloks/targetproject'),
    Token1:          () => import('~/components/bloks/token1'),
    Token2:          () => import('~/components/bloks/token2'),
    Sience1:         () => import('~/components/bloks/sience1'),
    Sience2:         () => import('~/components/bloks/sience2'),
    Sience3:         () => import('~/components/bloks/sience3'),
    Sience4:         () => import('~/components/bloks/sience4'),
    Service1:        () => import('~/components/bloks/service1'),
    Service2:        () => import('~/components/bloks/service2'),
    Service3:        () => import('~/components/bloks/service3'),
    Devs:            () => import('~/components/bloks/devs'),
    Vuvod:           () => import('~/components/bloks/vuvod'),
    Stat:            () => import('~/components/bloks/stat.vue'),
    Plan1:           () => import('~/components/bloks/plan1'),
    Plan2:           () => import('~/components/bloks/plan2'),
    Potential:       () => import('~/components/bloks/potential'),
  },
  methods: {
    addHashToLocation(hash) {
      history.pushState(null, null, '#' + hash);
      this.$store.dispatch('locationhash/changeHash', hash);
    }
  },
  scrollToTop: false,
  mounted(){
    const location = window.location.hash.replace('#', '');
    this.$store.dispatch('locationhash/changeHash', location);

    this.$fire.databaseReady()
    .then(()=>{
        this.$fire.database.ref().once('value', snapshot => { 
          this.$fire.database.ref().update(
          {firstPitchLook: snapshot.val().firstPitchLook + 1
          })
        });
    })
  
  let target = [];
  this.id = this.$t('burger.firstpitch.points').map(el=> el.hash);
  this.id.forEach(el => {
    const element = document.querySelector(`#${el}`);
    if (element !== undefined) {
      target.push([el, document.querySelector(`#${el}`)]);
    }
  });
  console.log(target);

  if(process.browser){
        target.forEach( (el,index) => {
      if(el[1] !== null){
      this.observer[index] = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.6) {
            this.addHashToLocation(el[0]);             
            }
        });
      },{threshold: [0.25, 0.5, 0.75, 1]});
      this.observer[index].observe(el[1]);
      }    
    });
  }
/*
  const slug = this.$store.getters['slug/getSlug'];
     if(slug !== ''){
       const distance = document.querySelector(`#${slug}`);
       VueScrollTo.scrollTo(distance, 0);
       this.$store.dispatch('slug/changeSlug', '');
     }
  */
  this.$nextTick(function () {
      this.$store.dispatch('preloading/changeLoading', false);
  })
    
  },
  /*
  destroyed(){
      for(let i = 0; i < Object.keys(this.observer).length; i++){
          this.observer[i].disconnect();
      }
  }*/
}

</script>

<style>

</style>

