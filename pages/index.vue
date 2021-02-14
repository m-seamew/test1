<template>
  <div class="container pitch__cont" :class="$device.isMobileOrTablet ? 'pitch__cont--mobile' : null"> 
    <Preloader></Preloader>   
    
    <div class="pitches__container" :class="$device.isMobileOrTablet ? 'pitches__container--mobile' : null">
      <PitchPreviewComponent v-for="(el, index) in columnGen('odd')" :key="index" :data="el"/>
    </div>
    <div class="pitches__container" :class="$device.isMobileOrTablet ? 'pitches__container--mobile' : null">
      <PitchPreviewComponent v-for="(el, index) in columnGen('even')" :key="index" :data="el"/>
    </div>
  </div> 
</template>

<script>
import layoutMiddleware from '@/middleware/layoutMiddleware';
import Preloader from '~/components/loading'
import PitchPreviewComponent from '~/components/PitchPreviewComponent';

export default {
  layout: layoutMiddleware,
  data: () => ({
    lang: 'ru',
    test: false,
  }),
  components: {
    PitchPreviewComponent,
    Preloader
  },
  methods: {
    changeLanguage(lang){
      this.lang = lang;
    },
    tablePoint(objData){
      const data = [];
      for(let i = 0; i < Object.keys(objData).length; i++){
        data.push(objData[i]);
      }
      return data;
    },
    columnGen(param){
    
      const arr = this.tablePoint(this.$t('pitchpreview'));
      let res = [];

      if(param === 'odd'){
        arr.forEach((el,index)=>{
        if(index %2 === 0){res.push(el);}
        })
      }else if(param === 'even'){
        arr.forEach((el,index)=>{
        if(index %2 !== 0){res.push(el);}
        })
      }
      return res;
    }
  },
  mounted(){
    this.$nextTick(function () {
      this.$store.dispatch('preloading/changeLoading', false);
    });
    setTimeout(_=>{
      const cont = document.querySelectorAll('.pitches__container');
      cont.forEach(el=>el.style.transform = "translateX(0)")
      }, 501);
  },
  scrollToTop: false,
}

</script>

<style>

    .pitch__cont{
      display: flex;
    }
    .pitch__cont--mobile{
      flex-wrap: wrap;
    }

    .pitches__container{
    flex: 0 0 35%;
    width: 35%;
    max-width: 450px;
    margin-right: 30px;
    }

    .pitches__container:not(:last-child){
      margin-bottom: 30px;
    }

    .pitches__container:last-child{
      padding-bottom: 40px;
    }

    .pitches__container--mobile{
      width: 92%;
      flex: 0 0 92%;
      margin-left: 4%;
      margin-right: 4%;
    }
    
    .pitches__container{
      transform: translateX(-300%);
      transition: transform .7s linear;
    }
</style>

<i18n locale="ru" src="~/assets/lang/pitchpreview/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/pitchpreview/en.json"></i18n>

