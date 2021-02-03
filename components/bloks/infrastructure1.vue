<template>
  <Blok 
    :slide_id="12"
    :title="$t('infrastructure1slide.title')"
    :subtitle="$t('infrastructure1slide.subtitle')"
    :footer_show="false">
      
      <article>
        <div class="infrastructure-chapter infrastructure-chapter-relative">
          <div class="infrastructure-chapter__text-container infrastructure-chapter__text-container--inf1">
            <h3 class="subtitle subtitle infrastructure-chapter__subtitle--80pxdown">{{$t('infrastructure1slide.article.chapter1.title')}}</h3>
            <div v-html="$t('infrastructure1slide.article.chapter1.text')"></div>
          </div>
          <div class="infrastructure-chapter__img-container infrastructure-chapter__img-container--inf1">
            <img src="~assets/img/infrastructure/3list.png" alt="bitbon sytem symbol" class="infrastructure-chapter__img">
          </div>
        </div>
      <client-only>
        <img class="bg-icon infrastructure__bg-icon" src="~assets/img/infrastructure/bgicon.svg" alt="">
      </client-only>
      <div class="infrastructure-chapter infrastructure-chapter__second-inf1">
          <div class="infrastructure-chapter__img-container infrastructure-chapter__img-container--inf1-2">
            <img src="~assets/img/infrastructure/bitbonspace.png" alt="bitbon space symbol" class="infrastructure-chapter__img">
          </div>
          <div class="infrastructure-chapter__text-container infrastructure-chapter__text-container--inf2">
                  <h3 class="subtitle">{{$t('infrastructure1slide.article.chapter2.title')}}</h3>   
            <div v-html="$t('infrastructure1slide.article.chapter2.text')"></div>
          </div>
        </div>
    </article>
  </Blok>
</template>

<script>
export default {
  
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

    .infrastructure-chapter__img-container--inf1{
    position: absolute;
    top: 7%;
    right: -9%;
    display: flex;
    justify-content: flex-end;
    pointer-events: none;
    .infrastructure-chapter__img{
      width: 60%;
    }
  }

  .infrastructure-chapter__img-container--inf1-2{
    transform: translateX(-10%);
    flex: 0 0 44% !important; 
    max-width: 44%;
  }

   .infrastructure-chapter__second-inf1{
    //justify-content: space-between;
    align-items: center;
    display: flex  !important;
    margin-top: 10% !important;

  }

  .infrastructure-chapter__text-container--inf2{
    padding-left: 0 !important;
  }

  .infrastructure-chapter__text-container--inf1,
  .infrastructure-chapter__text-container--inf2{
    max-width: 55%
  }
  .infrastructure-chapter__subtitle--80pxdown{
    margin-top: 8%;
  }
  @media (max-width: 1023px) {
    .infrastructure-chapter:last-child{
      margin-bottom: 30px;
    }
    .infrastructure-chapter__img-container--inf1{
     display: none;
  }
    .infrastructure-chapter__text-container--inf1::before{
      content: '';
       background: url('~assets/img/infrastructure/3list.png');
       background-size: contain;
       background-repeat: no-repeat;
       background-position: center center;
       width: 40vw;
       height: 40vh; 
       position: absolute;
       z-index: 999;
       top: 40%;
       transform: translateY(-50%);
       right: -5%;
  }

  .infrastructure-chapter__text-container--inf2{
    margin-left: -5%;
  }
  .infrastructure-chapter-relative{
    position: relative;
  }
  }

  @media (min-width: 1025px) and (min-height: 780px) {
    .infrastructure-chapter__img-container--inf1{
    .infrastructure-chapter__img{
      width: 66% !important;
    }
  }
  }
</style>

<i18n locale="ru" src="~/assets/lang/infostructure1/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/infostructure1/en.json"></i18n>