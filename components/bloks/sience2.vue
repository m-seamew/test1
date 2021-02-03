<template>
  <Blok 
    :slide_id="16"
    :footer_show="false"
    :title="$t('sience2.title')"
    :subtitle="$t('sience2.subtitle')"
    :first="false">
    
     <article>
      <main>
        <client-only>
          <img class="bg-icon sience1__bg-icon" src="~assets/img/sience/bgicon.svg" alt="bgicon">
        </client-only>
        <div class="main__container">
           <div class="sience__chapter sience__chapter--position-slide2" v-html="$t('sience2.article')"></div>
           <div class="sience__chapter sience__chapter--withimg-position"
            v-for="(el, index) in tablePoint($t('sience2.chapters'))" :key="index">
            <div class="siecne__img-container">
              <img :src='require(`~/assets/img/${el.img}`)' alt="document" class="img">
            </div>
            <div class="sience__chapter-text-cont">
              <h4 class="sience__chapter-header">{{el.header}}</h4>
              <div class="sience__chapter-text" v-html="el.text"></div> 
            </div>
            
          </div>
        </div>
      </main> 
     </article>  
  </Blok>
</template>

<script>
import Subnotes from '~/components/subnotes.vue';

export default {
  components:{
    Subnotes,
  },
  methods:{
     tablePoint(objData){
      const data = [];
      for(let i = 0; i < Object.keys(objData).length; i++){
        data.push(objData[i]);
      }  
      return data;
    }
  }
}

</script>

<style lang="scss">

  .sience__chapter--position-slide2{
    margin-bottom: Max(20px, 4%);
  }
</style> 

<i18n locale="ru" src="~/assets/lang/sience2/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/sience2/en.json"></i18n>