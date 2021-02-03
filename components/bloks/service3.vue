<template>
  <Blok :slide_id="6" :title="$t('service_3.title')" :subtitle="$t('service_3.subtitle')" :footer_show="false" :first="false">
    <client-only>
        <img class="bg-icon service__bg-icon" src="~assets/img/service/shuttle.png" alt="Bitbon logo">
        <img class="bg-icon service__bg-img--left-bottom" src="~assets/img/service/service3_img.png" alt="Bitbon Ghost">
    </client-only>
    <article class="main__container service2__main-container">
      <div class="token__container-with-logo service__container-with-logo">
          <div class="service__img-cont--service3">
            <div class="service__img-header--service2 service__text-header--mb">
              <div class="service__img-cont--world">
                 <img class="img service__img--hand" src="~assets/img/service/hand.png" alt="hand">
              </div>
              <div class="service__text-header--service2" v-html="$t('service_3.chapter_1.img-text')"></div>
            </div>
          </div>
          <div class="service__chapter--withline-service2 service__chapter--service2 service__chapter--padding-3" v-html="$t('service_3.chapter_1.text')"></div>
      </div> 

      <div class="token__container-with-logo service__container-with-logo">
          <div class="service__img-cont--service3">
            <div class="service__img-header--service2 service__text-header--mb">
              <div class="service__img-cont--world"> 
                 <img class="img service__img--contract" src="~assets/img/service/contract.png" alt="smart contract">
              </div>
              <div class="service__text-header--service2" v-html="$t('service_3.chapter_2.img-text')"></div>
            </div>
          </div>
          <div class="service__chapter--withline-service2 service__chapter--service2 service__chapter--padding-3" v-html="$t('service_3.chapter_2.text')"></div>
      </div> 
    <div class="service3__subnote">
           <div class="service__comment--service3">{{$t('service_3.comment')}}</div> 
           <SubnotesText :text="$t('service_3.subnotes')" :MaxWidth="100" :end="false"></SubnotesText>
    </div>
    </article>
  </Blok> 
</template> 

<script>
import SubnotesText from '~/components/subnotesText';
export default {
  components:{
    SubnotesText,
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/variables';

  .service__img-cont--service3{
    flex: 0 0 26%;
  }

  .service__chapter--padding-3{
    padding-left: 3%;
  }

  .service__bg-img--left-bottom{
    width: 37%;
    bottom: 0;
    left: 3.5%;
    top: auto;
    right: auto;
  }

  .service__img--hand, .service__img--contract{
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    vertical-align:bottom;
  }

  .service__img--contract{
     margin-bottom: 13px;
  }

  .service__comment--service3{
    text-transform: uppercase;
    font-weight: 700;
    font-size: $notesFontSize;
    line-height: 1.4;
    //width: 37%;
    margin-bottom: 9%;
  }

  .service__sub-chapter{
    line-height: 1.46;
    font-size: $notesFontSize;
    color: $fontHeader;
  }

  
  .service3__subnote{
    margin-left: 50%;
    margin-top: 10%;
  }




  @media (max-width: 1024px) {
    .service__bg-img--left-bottom{
    width: 30%;
    }
  } 

  @media (max-width: 730px) {
    .service__img-cont--service3{
      flex: 0 0 32%;
    }
    .service__chapter--padding-3{
      padding-left: 0;
    }
    .service3__subnote{
      margin-left: 31%;
      margin-top: 5%;
    }
    .service__text-header--mb{
      font-size: 1em !important; 
    }

    .service__chapter--padding-3{
      border-left: 1px solid  #cbcbcb;;
      padding: 0 0 0 5px;
    }
  } 


///






  
</style>


<i18n locale="ru" src="~/assets/lang/service3/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/service3/en.json"></i18n>