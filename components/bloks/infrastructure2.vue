<template>
  <Blok 
    :slide_id="1"
    :title="$t('infrastructure2slide.title')"
    :first="false"
    :subtitle="$t('infrastructure2slide.subtitle')"
    :footer_show="false">
      
      <article>
        <div class="infrastructure-chapter">
          <div class="infrastructure-chapter__img-container">
            <img src="~assets/img/infrastructure/server.png" alt="server" class="infrastructure-chapter__img">
          </div>
          <div class="infrastructure-chapter__text-container">
            <h3 class="subtitle">{{$t('infrastructure2slide.article.chapter1.title')}}</h3>
            <div v-html="$t('infrastructure2slide.article.chapter1.text')"></div>
          </div>
        </div>
      <client-only>
        <div style="clear:both" v-show="checkSize"></div>
        <img class="bg-icon infrastructure__bg-icon" src="~assets/img/infrastructure/bgicon.svg" alt="">
      </client-only>
      <div class="infrastructure-chapter">
        <div class="infrastructure-chapter__img-container infrastructure-chapter__img-container--left">
          <img src="~assets/img/infrastructure/building.png" alt="building" class="infrastructure-chapter__img">
        </div>
        <div class="infrastructure-chapter__text-container">
          <h3 class="subtitle infrastructure-chapter__subtitle--50pxdown">{{$t('infrastructure2slide.article.chapter2.title')}}</h3>
            <div v-html="$t('infrastructure2slide.article.chapter2.text')"></div>
          </div>  
      </div>  
    </article>
  </Blok>
</template>

<script>
export default {
  data: function(){
    return {
      checkSize: false,
    }
  },
  methods: {
    checkBrowser(){
      let size = document.documentElement.clientWidth;
      return this.checkSize = size < 1023 ? true : false;
    }
  },
  mounted(){
    this.blockparam = document.documentElement.clientWidth < 1023 
      ? this.checkSize = true
      : this.checkSize = false;
    window.addEventListener("resize", this.checkBrowser);

  },
  beforeDestroy(){
    window.removeEventListener('resize', this.checkBrowser); 
  },
}
</script>

<style lang="scss">

  .infrastructure-chapter{
    display: flex;
    margin-bottom: 4.4%;
  }

  .infrastructure-chapter:not(:first-child){
    margin-top: 4.4%;
  }

  .infrastructure-chapter:first-child{
    margin-bottom: 0;
  }

  .infrastructure__bg-icon{
    width: 35%;
    margin-top: -6%;
    margin-right: 2%;
  }

  .infrastructure-chapter__img-container{
    flex: 0 0 34%;
    margin-left: -2%;
  }

  .infrastructure-chapter__img-container--left{
    flex: 0 0 47%;
    margin-top: 1.3%;
    padding-left: 1.3%;
    margin-right: -5%;
    order: 2;
  }

  .infrastructure-chapter__img{
    width: 100%;
    object-fit: contain;
  }

  .infrastructure-chapter__text-container{
    padding-left: 5%;
    padding-right: 5%;
  }

  .infrastructure-chapter__subtitle--50pxdown{
    margin-top: Min(55px , calc(5px + 50 * (90vh / 1080)));
  }

  @media (max-width: 1023px) {
    .infrastructure-chapter{
      display: block;
    }
    .infrastructure-chapter__img-container{
      width: 34%;
      float: left;
      margin-right: 10px;
    }
    .infrastructure-chapter__img-container--left{
      width: 42%;
      float: right;
      margin-right: -5%;
    }   
  }

  @media (min-width: 1024px) and (max-height: 632px){
   .infrastructure-chapter__subtitle--50pxdown{
      margin-top: 10px;
   }
  }
</style>

<i18n locale="ru" src="~/assets/lang/infostructure2/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/infostructure2/en.json"></i18n>