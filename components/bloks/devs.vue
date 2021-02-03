<template>
  <Blok :slide_id="8" :title="$t('devs.title')" :subtitle="$t('devs.subtitle')" :footer_show="false">
    <article>
    <client-only>
        <img class="bg-icon devs__bg-icon" src="~assets/img/devs/bgicon.png" alt="">
    </client-only>

    <main class="main__container devs__main-container">
      <div class="container--with-logo">
          <div class="logo__container logo__container--devs">
            <img src="~assets/img/devs/simcord.png" alt="Simcord company" class="img">
          </div>
          <div class="chapter__container-line chapter__container-line--devs" v-html="$t('devs.article.chapter_1.text')"></div>
      </div> 
      
      <div class="number__container devs__numbers">
        <div class="number__element" v-for="(el, index) in tablePoint($t('devs.article.data'))" :key="index">
            <div class="number__num">{{el.num}}</div>
            <div class="number__title">{{el.title}}</div>  
        </div>
      </div>

      <div class="chapter--position-devs">
        <h4 class="chapter__header" v-html="$t('devs.article.chapter_2.title')"></h4>
        <div class="chapter__text--position-devs" v-html="$t('devs.article.chapter_2.text')"></div>
          <div class="subnotes__hash">
            <p v-html="'/' + $t('devs.article.chapter_2.comment') + '/'"></p>
        </div>
      </div>

    <div class="devs__subnote">
        <Subnotes :text="$t('devs.subnotes')" :MaxWidth="46"></Subnotes>
    </div>
    </main>  
    </article>  
  </Blok>
</template> 

<script>
export default {
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

  .devs__main-container{
    padding-top: Max(15px, 2%);
  }

  .container--with-logo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    //margin-top: 3%;
  }

  .logo__container{
    display: flex;
    position: relative;
  }

  .logo__container--devs{
    flex: 0 0 32%;
    padding-right: 3.5%;
  }

  .chapter__container-line{
    position: relative;
  }

  .chapter__container-line::before{
  content:'';
  width: 1px;
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: 0;
  background-color: #cbcbcb;
  }

  .chapter__container-line--devs{
    padding-left: 3.5%;
  }

  .chapter--position-devs{
    margin-top: Max(15px, 2.5%);
    margin-bottom: Max(15px, 5%);
  }

  .chapter__header{
    font-weight: 700;
  }

  .devs__numbers{
    margin-top: 5%;
    margin-bottom: 2.5%;
  }

  .devs__bg-icon{
    width: 35%;
    bottom: 0;
    left: 0;
    right: auto;
    top: auto;
  }

</style>


<i18n locale="ru" src="~/assets/lang/devs/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/devs/en.json"></i18n>