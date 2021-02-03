<template>
  <div class="loading-page">
    <div class="preloader__container">
      <div class="preloader__logo">
         <img :src="require('~/assets/img/preloader/preloader__logo.svg')" alt="Bitbon Expert" class="preloader__img">
      </div>
      <div class="preloader__subtitle">
        <client-only>
          <vue-typer 
          :text="$t('preloader.subtitle')"
          :repeat='0'
          initial-action='typing'
          :pre-type-delay='0'
          :type-delay='50'
          erase-style='clear'
          ></vue-typer>
        </client-only>
      </div> 
    </div>
    <div class="preloader__text-about">
        {{$t('preloader.text_about')}}
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
   @import '~/assets/scss/variables';
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(to bottom, #434343 2%, #101010 100%);
  text-align: left;
  display: flex;
  justify-content: left;
}

.preloader__text-about{
   line-height: 1.54;
   opacity: 0.25;
   font-size: $preloaderTextAbout;
   color: #ffffff;
}


.preloader__subtitle{
 
  margin-top: Max(20px, 9%);

  max-width: 18em;

  border-left: 5px solid #ffee00;
  padding-left: Max(8px, 3.65%);
  min-height: 2.5em;
}

.preloader__container{
  margin: auto 0;
  padding: 0 10%;
  width: 100%;
}

.preloader__logo{
  width: 50%;
}

.preloader__img{
  width: 100%;
  height: auto;
  object-fit: contain;
}

.preloader__text-about{
  position: absolute;
  bottom: 7%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}


.vue-typer{
  font-size: $subheaderFontSize;
  line-height: 1.15;
  font-family: 'Proxima Nova';
  font-weight: 700;
}
.vue-typer .custom.char.typed {
  color: #ffffff !important;
}

.vue-typer .custom.char.selected {
  color: #ffffff !important;
}

.vue-typer .custom.caret {
  display: none;
}
</style>
