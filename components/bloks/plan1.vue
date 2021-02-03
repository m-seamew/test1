<template>
  <Blok :slide_id="22" :title="$t('plan_1.title')" :subtitle="$t('plan_1.subtitle')" :footer_show="false">
    <article>
    <client-only>
        <img class="bg-icon plan__bg-icon" src="~assets/img/plan/bgicon.png" alt="">
        <Observer @firstobserve="animation"></Observer>
    </client-only>
    <main class="main__container plan__main-container plan__main-container--1">

      <div class="plan__blok" v-for="(el, index) in tablePoint($t('plan_1.list'))" :key="index">
        <div class="plan__block-left">
          <div class="header--rotate">{{el.period}}</div>
        </div>
        <div class="plan__block-right">
          <ul class="plan__list">
            <li class="plan__list-item" v-for="(element, punkt) in el.tasks" :key="punkt">
              <div class="plan__tick-container">
               <client-only  v-if="element.done == 'true'">
                 <vue-lottie class="tick plan__tick" ref="lottie" :autoplay="false" :data="animationData" :height="25" :width="25"></vue-lottie>
               </client-only>
               <client-only  v-else>
                 <vue-lottie class="tick--round plan__tick" ref="lottie" loop :autoplay="true" :data="animationData2" :height="25" :width="25"></vue-lottie>
               </client-only>
               </div>
              <div class="plan__list-text" v-html="element.text"></div>
            </li>
          </ul>
        </div>

      </div>
     </main>   
    </article>  
  </Blok>
</template> 

<script>  
    import vueLottie from 'vue-lottie-ssr/src/components/vue-lottie.vue';
    import animationData from '~/assets/img/tick.json';
    import animationData2 from '~/assets/img/round.json';
    
export default {
   components: {
      vueLottie
   },
  data () {
     return {
        animationData,
        animationData2,
     }
  },
  methods: {
    tablePoint(objData){
      const data = [];
      for(let i = 0; i < Object.keys(objData).length; i++){
        data.push(objData[i]);
      }
      return data;
    },
    animation(){
      setTimeout(() => {
        for(let i = 0; i < this.$refs.lottie.length; i++){
         setTimeout(() => {this.$refs.lottie[i].play()}, 150 * i);
        }
      }, 300);
    }
   },
}
</script>

<style lang="scss">
  @import '~/assets/scss/variables';

  .plan__blok{
    display: flex;
    //justify-content: space-between;
   // flex: 0 0 5%;
  }

  .plan__block-left{
    flex: 0 0 1.7em;
    height: inherit;
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .plan__blok--right{
    flex: 0 0 70%;
    height: inherit;
  }

  .header--rotate{
    transform: rotate(-90deg);
    font-weight: 700;
    font-size: $fontOfStatList;
  }

  .plan__blok:not(:last-child) .plan__block-left .header--rotate::before{
    content: '';
    position: absolute;
    border-bottom: 3px dotted #bbbbbb;
    width: 100%;
    top: 50%;
    right: 100%;
    transform: translate(-5px, -50%);
    width: 1080px;
    pointer-events: none;
  }

  .plan__blok:not(:first-child) .plan__block-left .header--rotate::after{
    content: '';
    position: absolute;
    border-bottom: 3px dotted #bbbbbb;
    width: 100%;
    top: 50%;
    left: 100%;
    transform: translate(5px, -50%);
    width: 1080px;
    pointer-events: none;
  }

  .plan__list-item{
    display: flex;
    align-items: flex-start;
  }

  .plan__list{
    line-height: 1.5;
  }

  .plan__tick-container{
    flex-shrink: 0;
    flex-grow: 0;
    margin-left: 2.5%;
    margin-right: 5px;
    margin-top: .165em;
  }

  
  .tick, .tick--round{
    height: 1em !important;
    width: 1em !important;
    object-fit: contain;
  }

  .plan__list-text{
    flex: 0 0 90%;

  }

  .plan__blok:not(:first-child) .plan__list{
    padding-top: 3.5%;
  }

  .plan__bg-icon{
    width: 26%;
    right: 8%;
  }
///////////////////

  @media (max-width: 1023px){
  .plan__main-container--1{
      padding-bottom: 30px;
  }
  }

  @media (min-width: 750px){
    .plan__main-container--1{
      margin-top: -3%; 
      .plan__list{
        line-height: 1.4;
      }
    }
  }
</style>




<i18n locale="ru" src="~/assets/lang/plan1/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/plan1/en.json"></i18n>