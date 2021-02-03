<template>
  <Blok :slide_id="6" :title="$t('service_1.title')" :subtitle="$t('service_1.subtitle')" :footer_show="false">
     <client-only>
        <img class="bg-icon service__bg-icon" src="~assets/img/service/shuttle.png" alt="Bitbon logo">
    </client-only>
    <div class="main__container token__main-container">
      <div class="token__container-with-logo service__container-with-logo">
          <div class="service__img-cont service__img-cont--full">
            <div class="service__img-header"  v-html="$t('service_1.chapter_1.img-text')"></div>
          </div>
          <div class="service__chapter--withline service__chapter--full" v-html="$t('service_1.chapter_1.text')"></div>
      </div> 
      <div class="service__chapter" v-html="$t('service_1.chapter_2')"></div>
      <div class="token__container-with-logo">
          <div class="service__img-cont">
            <img src="~assets/img/service/services2.png" alt="Services Bitbon" class="img service__img--2">
          </div>
          <div class="service__chapter-text" v-html="$t('service_1.chapter_3.text')"></div>
      </div> 

      <div class="service__note-cont">
        <div class="note">
          {{$t('service_1.note')}}
      </div>
      </div>
      
    </div>   
    <div class="service__subnote">
           <Subnotes :text="$t('service_1.subnotes')" :MaxWidth="46"></Subnotes>
    </div>
  </Blok> 
</template> 

<script>
export default {
  
}
</script>

<style lang="scss">
  @import '~/assets/scss/variables';
  .service__subnote{
    margin-top: 4.5%;
    margin-right: 5%;
  }

  .service__chapter{
    margin: Min(44px, 4%) 0;
  }

  .service__note-cont{
    margin-top: Min(44px, 4%);
  }
  .service__img-cont{
    flex: 0 0 29%;
    min-width: 29%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .service__img--2{
    width: 70%;
  }

  .service__chapter--withline{
    padding-left: Max(15px, 3%);
    position: relative;
  }

  .service__chapter--withline::before{
  content:'';
  width: 1px;
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: 0;
  background-color: #cbcbcb;
  }

  .service__img-header{
    font-size: $headerFontSize;
    text-transform: uppercase;
    font-weight: 700;
    position: relative;
    margin-right: 10px; 
  }

  .service__img-header::before{
    content: '';
    background-image: url('~assets/img/service/service1.png');
    width: 2.8em;
    height: 2.8em;
    background-size: contain;
    position: absolute;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    transform: translate(-40%, -65%);
  }

  .service__bg-icon{
    width: 27%;
    top: 1.5%;
    right: 3%;
  }
   @media (max-width: 730px) {
    .service__img-cont--full{
      flex: 0 0 40%;
      margin-left: 0;
      text-align: left;
      
    }
    .service__img-header{
      font-size: 1em;
      margin-right: 5px;
    }
    

  }
/*
  @media (max-width: 730px) {
    .service__container-with-logo{
      flex-wrap: wrap;
    }
    .service__img-cont--full{
      flex: 0 0 100%;
      margin-left: 0;
      text-align: left;
    }
    .service__chapter--full{
      //text-align: center;
      padding-left: 0;
      width: 100%;
      margin-top: Max(10px, 2%);
    }
    .service__chapter--full::before{
      display: none;
    }
  } */


</style>


<i18n locale="ru" src="~/assets/lang/service1/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/service1/en.json"></i18n>