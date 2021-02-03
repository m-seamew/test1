<template>
  <Blok :slide_id="6" :title="$t('service_2.title')" :subtitle="$t('service_2.subtitle')" :footer_show="false" :first="false">
    <client-only>
        <img class="bg-icon service__bg-icon" src="~assets/img/service/shuttle.png" alt="Bitbon logo">
    </client-only>
    <article class="main__container service2__main-container">
      <div class="token__container-with-logo service__container-with-logo service__container-wrap">
          <div class="service__img-cont--service2">
            <div class="service__img-header--service2">
              <div class="service__img-cont--world">
                 <img class="img service__img--world" src="~assets/img/service/world.png" alt="world">
              </div>
              <div class="service__text-header--service2" v-html="$t('service_2.chapter_1.img-text')"></div>
            </div>
          </div>
          <div class="service__chapter--withline-service2 service__chapter--service2" v-html="$t('service_2.chapter_1.text')"></div>
      </div> 

      <div class="service__chapter--2" v-html="$t('service_2.chapter_2.text')"></div>
      <div class="subnotes__hash">
        <p>{{$t('service_2.chapter_2.sub')}}</p>
        <p>{{'/' + $t('service_2.chapter_2.author') + '/'}}</p>
      </div>

      <div class="token__container-with-logo service__container-with-logo service__container-wrap">
          <div class="service__img-cont--service2">
            <div class="service__img-header--service2">
              <div class="service__img-cont--world">
                 <img class="img service__img--money" src="~assets/img/service/money.png" alt="world">
              </div>
              <div class="service__text-header--service2" v-html="$t('service_2.chapter_3.img-text')"></div>
            </div>
          </div>
          <div class="service__chapter--withline-service2 service__chapter--service2" v-html="$t('service_2.chapter_3.text')"></div>
      </div> 

      <div class="service__chapter--2" v-html="$t('service_2.chapter_4.text')"></div>
      <div class="subnotes__hash">
        <p>{{$t('service_2.chapter_4.sub')}}</p>
        <p>{{'/' + $t('service_2.chapter_4.author') + '/'}}</p>
      </div>
    </article>
  </Blok> 
</template> 

<script>
export default {
  
}
</script>

<style lang="scss" >
  @import '~/assets/scss/variables';

  .service__chapter--2{
    margin-top: 3.3%;
    margin-bottom: 1.8%;
  }
  .service__img-header--service2{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .service__img-cont--service2{
    flex: 0 0 35%;
  }

  .service__img-header--service2{
    font-size: $headerFontSize;
    text-transform: uppercase;
    font-weight: 700;
  }

  .service__text-header--service2{
    padding-right: 10px;
    padding-left: 10px;
    display: block;
    text-align: center;
  }

  .service__chapter--withline-service2{
    padding-left: 4%;
    position: relative;
  }

  .service__img-cont--world{
    width:30px;
    height: 30px;
  }

  .service__img--money{
    width: 35px;
    height: 35px;
  }
  .service__img--money, .service__img--world{
    margin-bottom: 5px;
  }



  @media (max-width:1024px) {
    .service2__main-container{
      margin-bottom: 30px;
    }
    
  }

  .service__chapter--withline-service2::before{
  content:'';
  width: 1px;
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: 0;
  background-color: #cbcbcb;
  }

  .service2__main-container .service__container-with-logo:not(:first-child){
    margin-top: Max(15px, 5.5%);
  }


  @media (max-width: 730px) {
    .service__chapter--withline-service2::before{
      display: none;
    }

    .service__img-cont--service2{
      flex: 0 0 100%
    }

    .service__chapter--withline-service2{
      padding-left: 0;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  } 

   @media (max-width: 730px) {
    .service__container-wrap{
      flex-wrap: wrap;
    }
    .service__img-header--service2{
      align-items: flex-start;
    }
    .service__text-header--service2{
      padding-left: 0;
      margin-top: 5px;
      text-align: left;
    }

  }
</style>


<i18n locale="ru" src="~/assets/lang/service2/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/service2/en.json"></i18n>