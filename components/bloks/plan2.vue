<template>
  <Blok :slide_id="23" :title="$t('plan_2.title')" :subtitle="$t('plan_2.subtitle')" :footer_show="false" :first="false">
    <article>
    <client-only>
        <img class="bg-icon plan__bg-icon" src="~assets/img/plan/bgicon.png" alt="">
        <Observer @firstobserve="animation"></Observer>
    </client-only>
    <main class="main__container plan__main-container">
      <div>
        <div class="plan__blok" v-for="(el, index) in tablePoint($t('plan_2.list'))" :key="index">
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
        </div>
      <div class="plan__subnotes">
        <Subnotes :text="$t('plan_2.subnotes')" :MaxWidth="50"></Subnotes>
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
  .plan__subnotes{
    margin-top: 4%;
  }

///////////////////


</style>
 

<i18n locale="ru" src="~/assets/lang/plan2/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/plan2/en.json"></i18n>