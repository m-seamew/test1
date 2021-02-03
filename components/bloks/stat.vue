<template>
  <Blok :slide_id="24" :title="$t('stat.title')" :subtitle="$t('stat.subtitle')" :footer_show="false">
    <article>
    <client-only>
        <img class="bg-icon stat__bg-icon" src="~assets/img/stat/bgicon.png" alt="">
        <Observer @firstobserve="animation"></Observer>
    </client-only>
    <main class="main__container vuvod__main-container">

      <div class="stat__element" v-for="(el, index) in tablePoint($t('stat.list'))" :key="index">
        
        <div class="stat__container-left">
          <div class="stat__list-subheader">{{el.subtitle}}</div>
          <div class="stat__list-header stat__list-header--positio" v-html="el.title"></div>
        </div>

        <div class="stat__container-right">
          <div class="stat__list-cur-container">
            <div class="stat__num--big" v-if="el.index !== ''">{{el.index}}</div>
            <animated-number :value='value[index]' :formatValue="formatToPrice" :duration="1000" :delay="300"/>
          </div>
          <div class="stat__list-cur-comment" v-if="el.comment !== ''">{{el.comment}}</div>
        </div>

       
      </div>
    </main>  
    </article>  
  </Blok>
</template> 

<script>
import observer from './observer.vue';
import AnimatedNumber from "animated-number-vue";

export default {
  components: { observer,  AnimatedNumber },
   data: () => ({
     value: [],
     tempValue: []
   }),
   async fetch(){
     this.curPrice = await this.$store.getters['bitbon/getPrice'];
   },
   methods: {
     animation(){
       const list = this.$t('stat.list');
        for(let i = 0; i < Object.keys(list).length; i++){
        this.tempValue[i] = Number(list[i].amount);
        }
        setTimeout(() => {this.value = this.tempValue}, 0);
     },
     formatToPrice(value) {
      return `<h3 class="stat__num--big">${'&nbsp;' + Number(value).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>`; 
    },
    tablePoint(objData){
      const data = [];
      for(let i = 0; i < Object.keys(objData).length; i++){
        data.push(objData[i]);
      }
      return data;
    },
   },
   beforeMount(){
     const list = this.$t('stat.list');
     for(let i = 0; i < Object.keys(list).length; i++){
        this.value.push(0);
     }
   }
}
</script>

<style lang="scss">
  @import '~/assets/scss/variables';

  .stat__list-cur-container{
    display: flex;
    justify-content: flex-end;
  }

  .stat__element{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .stat__list-header{
    font-size: $headerFontSize;
    font-weight: 700;
  }

  .stat__num--big{
    font-size: $fontOfStatList;
    font-weight: 700;;
  }

  .stat__list-header--positio{
    margin-top: Max(5px, .7%);
  }

  .stat__element{
    padding: 3.9% 0;
  }

  .stat__element:not(:last-child){
    border-bottom: solid 1px #d2d2d2;
  }

  .stat__element:first-child{
    padding-top: 0;
  }

  .stat__list-comment-text{
    text-align: end !important; 
  }

  .stat__element:last-child{
    margin-bottom: 30px; 
  }

  .stat__list-cur-comment{
    text-align: right;
  }

  .stat__bg-icon{
    width: 20%;
    right: 11%;
  }
///////////////////
  @media (max-width: 1023px) {
    .stat__element:last-child {
    padding-bottom: 0;
}
  }

</style>


<i18n locale="ru" src="~/assets/lang/stat/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/stat/en.json"></i18n>