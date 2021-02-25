<template> 
  <Blok :poster="true" :slide_id="1" :footer_show="false" :class="!$device.isDesktop ? 'mainscreen--fix-mobile' : null">
    <div class="mainscreen__fakebg">
      <header class="mainscreen__header">
          <div class="mainscreen__header-text">
            {{$t('mainscreen.data')}}
          </div>
      </header>
      <client-only>
         <Observer @firstobserve="animation"></Observer>
      </client-only>
      <div class="mainscreen__logo-cont">
            <div class="mainscreen__logo-text">
               {{$t('mainscreen.logo_text')}}
            </div>
            <div class="mainscreen__logo-img">
              <img src="/preloader__logo.svg" class="mainscreen__img--black-filter">
            </div>  
      </div>
      <div class="mainscreen__container-bg">
      </div>
      <article class="mainscreen__container">
       
        <!--<img :src="require('~/assets/img/mainscreen/light-bottom.png')" alt="3list logo" class="tree-list">
        
        <img :src="require('~/assets/img/mainscreen/treelist.png')" alt="3list logo" class="tree-list">
        <img :src="require('~/assets/img/mainscreen/light-top.png')" alt="3list logo" class="tree-list">-->
        <div class="tree-list__container">
           <img :src="require('~/assets/img/mainscreen/3list.png')" alt="3list logo" class="tree-list">
        </div>
        
        <img :src="require('~/assets/img/mainscreen/lefthand.png')" alt="3list logo" class="hand left-hand">
        <img :src="require('~/assets/img/mainscreen/righthand.png')" alt="3list logo" class="hand right-hand">
        <h1>
          <div class="mainscreen__title">
            {{$t('mainscreen.title')}}
          </div>
          <div class="mainscreen__title-name">
            <div class="mainscreen__title-name-container">
              <img :src="require('~/assets/img/mainscreen/treelist.svg')" alt="tree list" class="mainscreen__tree-list">
            </div>
            
            <div class="mainscreen__bitbon-system" v-html="$t('mainscreen.title_company')"></div>
          </div>
          
        </h1>
      </article>
    </div>
  </Blok>   
</template>

<script>
import observer from './observer.vue';
export default {
  components: {observer},
  methods:{
    animation(){
      setTimeout( function(){
        const animation = [...document.querySelectorAll('.hand'),
                      document.querySelector('.mainscreen__container-bg'),
                      document.querySelector('.tree-list')];
      animation.forEach(el => el.classList.add('active'));
		  }, 500);
    }
  }
}
</script>

<style lang="scss">

  .mainscreen__img--black-filter{
    filter: brightness(0) saturate(100%);
    width: 65%;
  }

  .tree-list__container{
    transition: transform 2s;
    position: absolute;
    top: 15%;
    left: 50%;
    width: 38%;
    transform: translateX(-50%);
  }


  .mainscreen__title-name{
    display: flex;
    align-items: center;
    margin-left: calc(10% + 15px + Max(6px, 1%) );
    margin-top: Max(25px, 5%)
  }

  .mainscreen__tree-list{
      height: 4.7em;
      object-fit: contain;
      margin-right: Max(10px, 4%);
  }


  .mainscreen__title-name-container{
    height: 12%;
  }

  .mainscreen__title{
    color: #fff;
    text-transform: uppercase;
    font-size: .9em;
    font-weight: 700;
    padding-left: 15px;
    border-left: 5px solid #ffee00;
    border-left-width: Max(6px, 1%);
    margin-top: 53%;
    margin-left: 10%;
  }

  .mainscreen__bitbon-system{
    font-size: 2.6em;
    color: white;
  }

  .mainscreen--fix-mobile{
    min-height: 98vw;
  }

  .mainscreen__logo-text{
    font-weight: 600;
    margin-bottom: 14px;
  }

  .mainscreen__header-text{
    color: white;
    font-weight: 700;
    font-size: .75em;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-left: 5%;
  }

  .mainscreen__logo-img{

  }

  .mainscreen__logo-cont{
    position:absolute;
    right: 5%;
    top: 0;
    z-index: 101;
    color: #000000;
    font-size: .65em;
    max-width: 27%;
    text-align: center;
    padding: 5% 0;
    background-color:#ffee00; 
    font-weight: 500; 
  }

  .mainscreen__header{
    backdrop-filter: blur(30px);
    background-color: rgba($color: #000, $alpha: .35)
  }

  .mainscreen__container,
  .mainscreen__container-bg{
    position: absolute;
    top: 12%;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .mainscreen__container-bg{
    background: url('~@/assets/img/mainscreen/bg.jpg');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform 10s;
  }

  .mainscreen__container-bg.active{
    transform:scale(1.05);
  }


  .mainscreen__fakebg{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('~@/assets/img/mainscreen/bg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .tree-list{
    width: 100%;
    object-fit: contain;
    z-index: 98;
    transform: scale(0);
    transition: transform 2s;
  }

  .tree-list.active{
    transform: scale(1);
  }

  .left-hand{
    position: absolute;
    left: 0;
    top: 11%;
    z-index: 99;
    width: 46%;
    transform: translateX(-100%);
  }

  .left-hand.active{
    animation: hand-left 4s forwards;
    animation-delay: .5s;
  }

   .right-hand.active{
    animation: hand-right 4s forwards;
    animation-delay: 2s;
  }

  @keyframes hand-left {
    0% {
      transform: translateX(-100%) rotate(-25deg);
    }

    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

   @keyframes hand-right {
    0% {
      transform: translateX(100%) rotate(-15deg);
    }

    100% {
      transform: translateX(0) rotate(0deg);
    }
  }


   .right-hand{
    position: absolute;
    right: 0;
    top: 10%;
    z-index: 99;
    width: 48%;
    transform: translateX(100%);
  }

  @media (max-width: 770px){
    .mainscreen__logo-text{
      margin-bottom: 6px;
    }

    .mainscreen__logo-cont{
      max-width:35%;
    }
    .mainscreen__bitbon-system{
      font-size: 2em;
    }

    .mainscreen__tree-list{
      height: 2.7em;
    }
  }

  @media (max-width: 400px){
     .mainscreen__logo-cont{
      max-width:40%;
    }
  }
</style>


<i18n locale="ru" src="~/assets/lang/mainscreen/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/mainscreen/en.json"></i18n>