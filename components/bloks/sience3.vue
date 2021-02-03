<template>
  <Blok 
    :slide_id="17"
    :footer_show="false"
    :title="$t('sience3.title')"
    :subtitle="$t('sience3.subtitle')"
    :first="false">
     
     <article>
      <main>
        <client-only>
          <img class="bg-icon sience1__bg-icon" src="~assets/img/sience/bgicon.svg" alt="bgicon">
        </client-only>
        <div class="main__container">
           <div class="sience__chapter sience__chapter--withimg-position"
            v-for="(el, index) in tablePoint($t('sience3.chapters'))" :key="index">
            <div class="siecne__img-container">
              <img :src='require(`~/assets/img/${el.img}`)' alt="document" class="img">
            </div>
            <div class="sience__chapter-text-cont">
              <h4 class="sience__chapter-header">{{el.header}}</h4>
              <div class="sience__chapter-text" v-html="el.text"></div> 
            </div>    
          </div>
          <div class="sience__chapter sience__chapter--position-slide3 sience__chapter--header" v-html="$t('sience3.article')"></div>
           <div class="sience__chapter sience__chapter--float sience__chapter--withimg-position sience__chapter--wrap">
            <div class="siecne__img-container siecne__img-container--big">
              <img :src="require(`~/assets/img/${$t('sience3.chapter2.img')}`)" alt="document" class="img">
            </div>
            <div class="sience__chapter-text-cont">
              <h4 class="sience__chapter-header sience__chapter-header--big">{{$t("sience3.chapter2.header")}}</h4>
              <div class="sience__chapter-text" v-html="$t('sience3.chapter2.text')"></div> 
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
   @import '~/assets/scss/variables';

  .sience__chapter--position-slide3{
    margin-top: Max(30px, 6.5%);
    margin-bottom: Max(20px, 4.5%);
  }

  .sience__chapter--header{
    font-weight: 700;
    text-align:center;
  }

  .siecne__img-container--big{
    flex: 0 0 26%;
    margin-right: Max(15px, 4%);
    margin-left: 0%;
  }

  .sience__chapter-header--big{
    font-size: $headerFontSize;
  }


  @media (max-width: 730px) {
    .siecne__img-container--big{
      display: block;
      width: 30%;
      float: left;
      
      .img{
        width:100%;
        height: 100%;
      }
    }

    .sience__chapter--float{
      display: block;
    }

    .sience__chapter-header--big{
      //text-align: center;
      margin: 20px 0 10px 0;
    }

    .sience__chapter--wrap{
      flex-wrap: wrap;
    }
  }
</style> 

<i18n locale="ru" src="~/assets/lang/sience3/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/sience3/en.json"></i18n>