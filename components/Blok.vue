<template>
  <section
   :class="[
      blockparam, 
      blockparam == 'blok-wrapper-vertical' && footer_show === true ? 'block-wrapper-vartical--fixfooter-mobile' : null
    ]"
    class="blok-wrapper">

    <header>
      <div class="blok-header">
        <div class="blok-header__number">{{$t('blok_template.slide_number') + ' ' + slide_id}}</div>
        <div class="blok-header__author">
          <div class="blok-header__author-text"><div v-html="$t('blok_template.author')"/></div>
          <div class="blok-header__author-logo">
            <img class="blok-header__author-img" src="~assets/img/bloktemplate/logoauthor.svg" alt="Bitbon Today">
          </div>
        </div>
      </div>

      <div class="blok-header__titles-cont">
        <h3 class="blok-header__title"  :class="first ? 'blok-header__title--first' : null" v-show="title">{{title}}</h3>
        <h5 class="blok-header__subtitle" :class="first ? 'blok-header__subtitle--first' : null" v-show="subtitle">{{subtitle}}</h5>
      </div>
    </header>

      <slot>
      </slot>

    <footer class="blok-footer">
      <a v-show="footer_show" :href='`https://bitbon.today/${link}/`' class="blok-footer__link">www.bitbon.today</a>
      <img src="~assets/img/bloktemplate/blockfooter.svg" alt="bitbon today" class="blok-footer__img">
    </footer>
  </section>
</template>

<script>
export default {
  data: function(){
    return{
      blockparam: 'blok-wrapper-horizontal',
    }
  },
  props:{
    slide_id: {
      type: Number,
      required: true,
    },
    footer_show: {
      type: Boolean,
      default: true,
      required: false,
    },
    link_lang:{
      type: String,
      default: ''
    },
    title:{
      type: String,
      required: false,
    },
    subtitle:{
      type: String,
      required: false,
    },
    first:{
      type: Boolean,
      required: false,
      default: true,
    }

  },
  methods:{
    displayWindowSize(){
      this.blockparam = document.documentElement.clientWidth > document.documentElement.clientHeight 
        ? 'blok-wrapper-horizontal'
        :'blok-wrapper-vertical';
    },
    mobilefooterfix(){
      this.blockparam === 'blok-wrapper-vertical' && this.footer_show === true ? this.test = true : this.test = false;
      return this.footer_show === true ? true : false;
    }
  },
  computed:{
    link(){
      if (this.link_lang === '') return this.$i18n.locale;
      return this.link_lang;
    }
  },
  mounted(){
    this.blockparam = document.documentElement.clientWidth > document.documentElement.clientHeight 
      ? 'blok-wrapper-horizontal'
      :'blok-wrapper-vertical';
    window.addEventListener("resize", this.displayWindowSize);
  },
  beforeDestroy(){
    window.removeEventListener('resize', this.displayWindowSize); 
  }
}
</script>


<style lang="scss">
  @import '~/assets/scss/variables';
  .blok-footer{
    pointer-events: none;
  }
  .blok-wrapper{
    margin: 0 auto;
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    background-image: linear-gradient(to bottom, #fefefe, #f7f7f7 51%, #e6e6e6);
    -webkit-box-shadow: 0px 0px 15px 0px rgba(50, 50, 50, 0.5);
    -moz-box-shadow:    0px 0px 15px 0px rgba(50, 50, 50, 0.5);
    box-shadow:         0px 0px 15px 0px rgba(50, 50, 50, 0.5);
    border-radius: 2px;
    position: relative;
    max-width: 1080px !important;
    max-height: 1080px !important;
    overflow: hidden;
    line-height: 1.3;
    margin-bottom: 1vh;
  }
  .blok-wrapper:not(:first-child){
    margin-top: 1vh;
  }
  .blok-header{
    display: flex;
    justify-content: space-between;
  }
  .blok-header__author-logo{
    display: flex;
    width: 22%;
  }
  @media (max-width: 420px){
    .blok-header__author-logo{
    width: 21%;
    margin-bottom: 1px;
    }
  }
  .blok-wrapper-vertical{
      width: 90vw;
      height: $screen_vertical_mode;
      font-size: Min(27px, calc(13px + 14 * (#{$screen_vertical_mode}/1080)));
    .blok-header__number{
      font-size: Min(20px, calc(10px + 10 * (#{$screen_vertical_mode}/1080)));
    }
    .blok-header__author-text, .blok-footer__link{
      font-size: Min(17px, calc(10px + 7 * 0.7 * (#{$screen_vertical_mode}/1080)));
    }
  }
  @media (orientation: portrait) and (max-width: 1024px) {
   .blok-wrapper-vertical{
      width: 98vw;
      height: auto;
    }
  }
  .blok-wrapper-horizontal{
      width: $screen_horizontal_mode;
      height:90vh;
      font-size: Min(27px, calc(13px + 14 * 0.7 * (#{$screen_horizontal_mode}/1080)));
      .blok-header__number{
        font-size: Min(20px, calc(10px + 10 * 0.7 * (#{$screen_horizontal_mode}/1080)));
      }
      .blok-header__author-text, .blok-footer__link{
         font-size: Min(17px, calc(10px + 7 * 0.7 * (#{$screen_horizontal_mode}/1080)));
      }
  }
  .blok-header__number{
    text-transform: uppercase;
    color: #333333;
    line-height: 1.2;
    opacity: 0.5;
    flex-shrink: 0;
    padding-top: 30px;
    padding-left: 40px;
    padding-top: Min(30px, calc(10px + 20 * (100vh/1080)));
    padding-left: Min(40px, calc(10px + 30 * (100vh/1080)));
  }
  .blok-header__author{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 35px;
    padding-right: 40px;
    max-width: 72%;
    padding-top: Min(35px, calc(15px + 20 * (100vh/1080)));
    padding-right: Min(40px, calc(10px + 30 * (100vh/1080)));
  }
  .blok-header__author-text{
    max-width: 232px;
    opacity: 0.3;
    font-weight: bold;
    margin-right: 3%;
    text-align: right;
    color: #000000;
    text-transform: uppercase;
  }
  .blok-header__author-img{
    width: 100%;
    object-fit: contain;
  }
  .blok-footer__link{
    font-weight: bold;
    text-decoration: none;
    opacity: 0.3;
    position: absolute;
    left: 55px;
    bottom: 40px;
    display: block;
    cursor: pointer;
    color: black;
    left: Min(55px, calc(10px + 45 * (100vh/1080)));
    bottom: Min(40px, calc(10px + 30 * (100vh/1080)));
  }
  .blok__content{
    margin-left: 55px;
    margin-right: 55px;
    padding-bottom: 10px;
  }
  .blok-footer__link:visited{
    color: black;
  }
  .blok-footer__img{
    position: absolute;
    max-width: 320px;
    max-height: 190px;
    object-fit: contain;
    right: -60px;
    bottom: -50px;
    z-index: -1;
  }
  @media (max-width: 1023px) {
    .blok-footer__img{
      right: -5.5%;
      bottom: -5%;
      z-index: -1;
      width: 50%;
    }  
  }
  .blok-header__titles-cont{
    margin-bottom: Min(48px, 5%);
  }
  .blok__content, .blok-header__titles-cont{
    //margin-left: Min(55px, calc(10px + 45 * (100vh/1080)));
    //margin-right: Min(55px, calc(10px + 45 * (100vh/1080)));
    margin-left: Min(55px, 5%);
    margin-right: Min(55px, 5%);
  }
  .blok-header__title{
    font-weight: 700;
    font-size: $headerFontSize;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: $fontHeader;
  }
  .blok-header__title--first{
    font-size: $headerFontSizeFirst;
    color: $mainFontColor;
    text-transform: none;
  }
  .blok-header__subtitle{
    font-weight: 700;
    font-size: $subheaderFontSize;
    line-height: 1.2;
    margin-top: 0;
    text-transform: uppercase;
    color: $fontHeader;
  }
  .blok-header__subtitle--first{
    font-size: $subheaderFontSizeFirst;
    color: $mainFontColor;
  }
  @media (max-width: 1023px) {
    .blok-header__title--first{
    font-size: $headerFontSizeFirst * 0.75;
    }
    .blok-header__subtitle--first{
    font-size: $subheaderFontSizeFirst *0.85;
    }
  }
  @media (orientation: landscape) and (max-width: 1024px) {
   .blok-wrapper-horizontal{
      width: $screen_vertical_mode;
      height: 90vw;
    }
  }
  @media (max-width: 730px){
    .blok-header__number{
      font-size: calc(10px + (10 + 10 * 0.7) * ((#{$screen_vertical_mode} - 320px) / 1080)) !important;
      }
      .blok-header__author-text, .blok-footer__link{
      font-size: calc(10px + (5 + 5 * 0.7) * ((#{$screen_vertical_mode} - 320px) / 1080)) !important;
      }
    .blok-header__author{
      padding-top: calc(15px + (20 + 20 * 0.7) * ((100vh - 320px)/1080));
      padding-right: calc(10px + (30 + 30 * 0.7) * ((100vw - 320px)/1080));
    }  
    .blok-header__number{
      padding-top: calc(10px + (20 + 20 * 0.7) * ((100vh - 320px)/1080));
      padding-left: calc(10px + (30 + 30 * 0.7) * ((100vw - 320px)/1080));
    }
    .blok-footer__link{
      left: calc(10px + (45 + 45 * 0.7) * ((100vw - 320px)/1080));
      bottom: calc(10px + (30 + 30 * 0.7) * ((100vh - 320px)/1080));
    }
    .blok__content, .blok-header__titles-cont{
      margin-left: calc(10px + (45 + 45 * 0.7) * ((100vw - 320px)/1080));
      margin-right: calc(10px + (45 + 45 * 0.7) * ((100vw - 320px)/1080));
    }
  }
   @media (max-height: 1024px) and (max-width: 720px){
     .blok-wrapper-vertical{
        font-size: calc(13px + (14 + 14 * 0.7) * (100vh - 570px) / 1080) !important;
    }
      .blok-wrapper-horizontal{
        font-size: calc(13px + (14 + 14 * 0.7) * (100vw - 320px) / 1080) !important;
    }
  }
  @media (min-width: 1025px) and (max-height: 750px){
    .blok-header__author-text{
      font-size: Min(17px, calc(12px + (5 * 5 * 0.7) * ((90vh - 631px)/1080)))
    }
    .blok-wrapper-horizontal{
      font-size: calc(13px + (14 + 14 * 0.7) * (100vh - 631px) / 1080) !important;
    }
  }
  @media (min-width: 1025px) and (min-height: 1080px) and (max-height: 1199px) {
    .blok-wrapper-horizontal{
      font-size: calc(13px + 14 * 0.75 * (100vh / 1080)) !important;
    }
  }
  @media (min-width: 1025px) and (min-height: 1200px) {
    .blok-wrapper-horizontal{
      font-size: 27px !important;
    }
  }
  @media (max-height: 950px){
    .blok-wrapper-horizontal{
      font-size: calc(13px + (14 + 14 * 0.7) * (100vh - 631px) / 1080) !important;
    }
  }
  @media (max-width: 730px){
    .blok-wrapper-vertical{
      font-size: calc(13px + (14 + 14 * 0.7) * (100vw - 320px) / 1080) !important;
      height: auto;
      max-height: max-content !important;
    }
    
    .block-wrapper-vartical--fixfooter-mobile{
      padding-bottom: 35px;
    }
    .blok-wrapper-horizontal{
      font-size: calc(13px + (14 + 14 * 0.7) * ((100vh - 570px) / 1080)) !important;
    }
  }
 //for block labdscape position on phones. Needed the tests.
  @media screen and (min-width: 320px) and (max-width: 1024px) and (orientation: landscape) {
    html {
      transform: rotate(-90deg);
      transform-origin: left top;
      width: 100vh;
      overflow-x: hidden;
      position: absolute;
      top: 100%;
      left: 0;
    }
  } 
   @media screen and (min-width: 320px) and (max-width: 1024px) and (orientation: landscape) {
    .blok-wrapper-horizontal{
      font-size: Max(13px, calc(13px + (14 + 14 * 0.7) * ((100vh - 320px) / 1080))) !important;
      height: 99vh;
      width: auto;
      //width: $screen_horizontal_mode; 
      padding-bottom: 0;
    }
    .blok-wrapper-horizontal{
      width: 100%;
    }
    .blok-header__number{
      font-size: Max(13px, calc(13px + (14 + 14 * 0.7) * ((#{$screen_horizontal_mode} - 320px) / 1080))) !important;
      }
    .blok-header__author-text, .blok-footer__link{
        font-size: Max(10px, calc(10px + (5 + 5 * 0.7) * ((#{$screen_horizontal_mode} - 320px) / 1080))) !important;
    }
     @media (max-width: 730px){
    .blok-wrapper-horizontal{
      font-size: calc(13px + (14 + 14 * 0.7) * ((100vh - 320px) / 1080)) !important;
    }
  }
  } 
 @media (max-width: 375px){
    .blok-header__author-text{
    font-size: 8px !important;
    }
  }
</style>

<i18n locale="ru" src="~/assets/lang/bloktemplate/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/bloktemplate/en.json"></i18n>