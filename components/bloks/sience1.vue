<template>
  <Blok 
    :slide_id="15"
    :footer_show="false"
    :title="$t('sience1.title')"
    :subtitle="$t('sience1.subtitle')"
    :first="true">
    
     <article>
      <main>
        <client-only>
          <img class="bg-icon sience1__bg-icon" src="~assets/img/sience/bgicon.svg" alt="bgicon">
        </client-only>
        <div class="main__container">
          <div class="note sience__note">
            {{$t('sience1.note')}}
          </div>
           <div class="sience__chapter sience__chapter--withimg-position"
            v-for="(el, index) in tablePoint($t('sience1.chapters'))" :key="index">
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
   @import '~/assets/scss/variables';

  .sience1__bg-icon{
    width: 40%;
    top: -6%;
  }

  .siecne__img-container{
    flex: 0 0 15%;
    margin-right: Max(10px, 2.6%);
    margin-left: -1.65%;
    .img{
      vertical-align: middle;
    }
  }

  @media (max-width: 770px) {
    .siecne__img-container{
      flex: 0 0 30%;
    }
    
  }

  .sience__chapter:first-child{
    margin-top: Max(20px, 3.7%); 
  }

  .sience__chapter{
    display: flex;
    align-items: center;
  }

  .sience__chapter-header{
    font-weight: 700;
    margin-bottom: .7%;
  }

  .sience__chapter--withimg-position:not(:last-child){
    margin-bottom: Max(20px, 2.8%);
  }

  .sience__chapter--withimg-position:last-child{
    margin-bottom: Max(30px, 4%);
  }

  .sience__note{
    margin-bottom: Max(20px, 4%);
  }
</style> 

<i18n locale="ru" src="~/assets/lang/sience1/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/sience1/en.json"></i18n>