<template>
  <div class="container">
    <Preloader></Preloader>

    <div>
      <LazyHydrate when-idle>
        <TableBlok/>
      </LazyHydrate>
    </div>

    <div id="test1">
      <LazyHydrate never>
        <ChartScreen/>
      </LazyHydrate>
    </div>

    <div>
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
 <!----->

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
        <Potential/>
      </LazyHydrate>
    </div>


    <div>
      <LazyHydrate :when-visible="lazyOption">
        <Potential/>
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
/*
import Infrastructure1 from '~/components/bloks/infrastructure1';
import Infrastructure2 from '~/components/bloks/infrastructure2';
import Infrastructure3 from '~/components/bloks/infrastructure3';

import TableBlok from '~/components/bloks/tablecomp';
import Mainaboutsystem from '~/components/bloks/mainaboutsystem';
import ChartScreen from '~/components/bloks/chartscreen';

import TargetProject from '~/components/bloks/targetproject';
import Token1 from '~/components/bloks/token1';
import Token2 from '~/components/bloks/token2';

import Sience1 from '~/components/bloks/sience1';
import Sience2 from '~/components/bloks/sience2';
import Sience3 from '~/components/bloks/sience3'; 
import Sience4 from '~/components/bloks/sience4'; 

import Service1 from '~/components/bloks/service1';
import Service2 from '~/components/bloks/service2';
import Service3 from '~/components/bloks/service3'; 


import Devs from '~/components/bloks/devs'; 

import Vuvod from '~/components/bloks/vuvod';
import Stat from '~/components/bloks/stat.vue';
import Plan1 from '~/components/bloks/plan1';
import Plan2 from '~/components/bloks/plan2';

import Potential from '~/components/bloks/potential';*/

import layoutMiddleware from '@/middleware/layoutMiddleware';
import Preloader from '~/components/loading';
import LazyHydrate from 'vue-lazy-hydration';
const VueScrollTo = require('vue-scrollto');

export default {
  layout: layoutMiddleware,
  data: () => ({
    lang: 'ru',
    observer: {},
    id: [
      'test1',
      'test2',
      'test3'
    ],
    lazyOption: { rootMargin: '1000px' },
  }),
  components: {
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

    Preloader,
    LazyHydrate,
  },
  methods: {
    addHashToLocation(hash) {
      location.hash = hash;
    }
  },
  scrollToTop: false,
  beforeMount(){
  },
  mounted(){
    this.$fire.databaseReady()
    .then(()=>{
        this.$fire.database.ref().once('value', snapshot => { 
          this.$fire.database.ref().update(
          {firstPitchLook: snapshot.val().firstPitchLook + 1
          })
        });
    })
  
  const targer = this.id.map(el => [el, document.querySelector(`#${el}`)]);

  if(process.browser){
        targer.forEach( (el,index) => {
      this.observer[index] = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.6) {
            this.addHashToLocation(`#${el[0]}`);             
            }
        });
      },{threshold: [0.25, 0.5, 0.75, 1]});
      this.observer[index].observe(el[1]);
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

