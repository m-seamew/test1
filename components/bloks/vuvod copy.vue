<template>
  <Blok :slide_id="25" :title="$t('vuvod.title')" :subtitle="$t('vuvod.subtitle')" :footer_show="false">
    <article>
    <client-only>
        <img class="bg-icon vuvod__bg-icon" src="~assets/img/vuvod/bgicon.png" alt="">
    </client-only>
    <main class="main__container vuvod__main-container">
      <div class="vuvod__chapter-text" v-html="$t('vuvod.article.chapter_1.text')"></div>

      <div class="vuvod__chapter-price vuvod__chapter-price--position">
        <div class="chapter__header">{{$t('vuvod.article.chapter_2.title')}}</div>
        <div class="price price--big price--blue">${{curPrice}}</div>
        <div class="vuvod__chapter-text text--80" v-html="$t('vuvod.article.chapter_2.text')"></div>
      </div>

      <div class="vuvod__subnotes-hash-container">
        <div class="subnotes-hash__left-side">

        </div>
        <div class="subnotes-hash__right-side">
          <div class="subnotes-text" v-html="$t('vuvod.article.chapter_2.text')"></div>
        </div>
      </div>
    </main>  
    </article>  
  </Blok>
</template> 

<script>
export default {
   data: () => ({
     curPrice: 0,
   }),
   async fetch(){
     this.curPrice = await this.$store.getters['bitbon/getPrice'];
   }
}
</script>

<style lang="scss">

  .subnotes-text{
    padding: 1.7em 1.25em;
  }

  .subnotes-hash__left-side{
    flex: 0 0 20%;
    height: inherit;
    background-color: silver;
  }
  .vuvod__bg-icon{
    right: 7.8%;
    width: 26%;
  }

  @media (max-width: 730px){
    .subnotes-hash__left-side{
    flex: 0 0 40%;
  }
  }

  .price--big{
    font-size: 4.07em;
    font-weight: 700;
  }
  .price--blue{
    color: #4195e1,
  }

  .vuvod__chapter-price{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .vuvod__chapter-price--position{
    margin-top: 5.5%;
    margin-bottom: 5.5%;
  }

  .text--80{
    margin: 0 auto;
    width: 80%;
  }

  .vuvod__subnotes-hash-container{
    background-color: #fffbbe;
    display: flex;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
    margin-bottom: 30px;
    transition: box-shadow 0.3s ease-in-out;
  }

  .vuvod__subnotes-hash-container:hover{
    box-shadow: 0 -10px 20px 0 rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
  }






//

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


<i18n locale="ru" src="~/assets/lang/vuvod/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/vuvod/en.json"></i18n>