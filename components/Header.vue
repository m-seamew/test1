<template>
  <div class="header__wrapper">
    <div class="header__container">
      <div class="header__container-content">
        <div class="header__logo">
          <img class="header__logo-img" src="~assets/img/header/logo.png" alt="Bitbon Today logo">
        </div>
        <div class="header__currentprice">
          Bitbon <span class="green-text">${{bitbonprice}}</span>
        </div>
        <div class="header__languages">
          <div class="header__lang-cont">
            <img class="header__lang-img" :src="findCurLang('img')" :alt="findCurLang('alt')">
          </div>
          <div class="header__lang-text">{{findCurLang('title')}}</div>
          <div class="header__languages-change">
            <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
              <div class="header__languages header__languages-change--column">
                <div class="header__lang-cont">
                  <img class="header__lang-img" :src="findLang(locale.code, 'img')" :alt="findLang(locale.code, 'alt')">
                </div>
                <div class="header__lang-text">{{findLang(locale.code, 'title')}}</div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch(){
    this.languages = this.$store.getters['lang/getLang'];
  },
  data: () => ({
    languages: [],
    currentLanguage: {},
  }),
  props:{
    bitbonprice: {
      type: Number,
      required: false,
      default: 0,
    }
  },
  computed: {
    availableLocales () {
      return [this.$i18n.locales.find(i => i.code === this.$i18n.locale), ...this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)];
    }
  },
  methods:{
    findLang(code, param){
      const check = this.languages.find(el => el.lang == code);
      switch(param){
        case 'img': return check.img;
        case 'alt': return check.alt;
        case 'title': return check.title;
      }
    },  
    findCurLang(param){
      const check = this.languages.find(el => el.lang == this.$i18n.locale);
       switch(param){
        case 'img': return check.img;
        case 'alt': return check.alt;
        case 'title': return check.title;
      }
    },
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

  .header__container{
    width: 100%;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(6px);
    position: fixed;
    top: 0;
    z-index: 999;
  }

  .header__container-content{
    width: 90vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .header__logo{
    width: calc(56px + 44 * (100vw / 1920));
    padding: 1.9em 1.6em;
    background-image: linear-gradient(to bottom, #2b2b2b 3%, #000000 100%);
    border-radius: 5px;
  }
  @media (max-width: 1023px){
    .header__logo{
    width: calc(56px + (44 + 44 * 0.7) * ((100vw - 320px) / 1920));
    }
  }

  .header__logo-img{
    width: 100%;
    object-fit: contain;
  }

  .header__currentprice, .header__lang-text{
    color: #d8d8d8;
    font-size: 13px;
    text-transform: uppercase;
    line-height: 50px;
  }

  .header__lang-text{
    margin-top: -1px;
  }

  .header__languages{
    font-family: 'Roboto Mono', monospace;
    display: flex;
    position: relative;   
  }

  .header__lang-cont{
    display: flex;
    height: 50px;
    width: 24px;
    align-items: center;
    margin-right: 5px;
  }

  .header__lang-img{
    width: 100%;
    object-fit: contain;
  }

  .header__wrapper{
    padding-bottom: calc(5em + 20px);
  }

  @media (min-width: 1024px){
    .header__wrapper{
      padding-bottom: 60px;
    }
  }

  .header__languages-change{
    position: absolute;
    left: 0;
    padding-left: Max(8px, 2%);
    padding-right: Max(8px, 2%);
    background-image: linear-gradient(to bottom, #2b2b2b 3%, #000000 100%);
    border-radius: 5%;
    transform: translateX(Min(-8px, -2%));
    pointer-events: none;
    opacity: 0;
    transition: .4s;
    //margin-left: -Max(10px, 3%);
  }

  .header__languages:hover{
    .header__languages-change{
      pointer-events: all;
      opacity: 1;
      transition: .4s;
    }
  }

  .header__languages-change--column{
    display: flex;
    justify-content: column;
  }
</style>>
