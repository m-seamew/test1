<template>
  <Blok 
    :slide_id="13"
    :title="$t('infrastructure3slide.title')"
    :subtitle="$t('infrastructure3slide.subtitle')"
    :first="false"
    :footer_show="false">
      
    <article>
      <div class="infrastructure-chapter infrastructure-chapter__second-inf3  infrastructure-chapter__second-inf3--position">
        <div class="infrastructure-chapter__text-container infrastructure-chapter__text-container--inf3-1">
          <h3 class="subtitle">
            {{$t('infrastructure3slide.article.chapter1.title')}}
          </h3>   
          <div v-html="$t('infrastructure3slide.article.chapter1.text')"></div>
        </div>
        <div class="infrastructure-chapter__img-container infrastructure-chapter__img-container--inf3-1">
          <img
            v-lazy="require(`~/assets/img/infrastructure/app.png`)"
            src="~/assets/img/lazyloading.svg"
            alt="bitbon space symbol"
            class="infrastructure-chapter__img"
          >
          </div>
      </div>
      <client-only>
        <img
          v-lazy="require(`~/assets/img/infrastructure/bgicon.svg`)"
          src="~/assets/img/lazyloading.svg"
          class="bg-icon infrastructure__bg-icon"
        >
      </client-only>
      <div class="infrastructure-chapter infrastructure-chapter__second-inf3 infrastructure-chapter__text-container--inf3-1--position">
        <div class="infrastructure-chapter__img-container infrastructure-chapter__img-container--inf3-1">
          <img 
            v-lazy="require(`~/assets/img/infrastructure/graph.jpg`)"
            src="~/assets/img/lazyloading.svg"
            alt="bitbon trade"
            class="infrastructure-chapter__img"
          >
        </div>
        <div class="infrastructure-chapter__text-container infrastructure-chapter__text-container--inf3-2">
          <h3 class="subtitle">
            {{$t('infrastructure3slide.article.chapter2.title')}}
          </h3>   
          <div v-html="$t('infrastructure3slide.article.chapter2.text')"></div>
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
    .infrastructure-chapter__img-container--inf3-1{
    flex: 0 0 50% !important;
    max-width: 100%;
    }

   

    .infrastructure-chapter__text-container--inf3-2{
    //  margin-left: Max(10px, 4%);
    }

    .infrastructure-chapter__text-container--inf3-1{
     padding-left: 5%;
    }
    .infrastructure-chapter__img-container--inf3-1{
           margin-right: 0 !important;
    }
    .infrastructure-chapter__second-inf3{
      display: flex;
      align-items: center;
    }

    .infrastructure-chapter__text-container--inf3-1--position{
      margin-top: 0% !important;
    }

 @media (max-width: 600px) {
       .infrastructure-chapter__img-container--inf3-1{
          flex: 0 0 35% !important;
  }
   .infrastructure-chapter__text-container--inf3-1--position{
      margin-top: 5% !important;
      margin-bottom: 5% !important;
    }
    }

</style>

<i18n locale="ru" src="~/assets/lang/infostructure3/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/infostructure3/en.json"></i18n>