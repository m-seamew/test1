<template>
  <section class="contact__wrapper">
    <article class="contact__container">
      <header class="contact__header">
        <div class="contact__logo-container">
          <img :src="require('~/assets/img/preloader/preloader__logo.svg')" alt="Bitbon Expert Logo" class="img"> 
        </div>
        <div class="contact__logo-text">
          {{$t('contact.logo_text')}}
        </div>
      </header>
      <slot></slot>
      <main>
        <div class="contact__chaper contact__chapter--center margin-top--50">
          {{$t('contact.chapter_1')}}
        </div>

        <a href="#" class="contact__telegram margin-top--30">
          <div class="contact__telegram-text">{{$t('contact.telegram_button')}}</div>
        </a>

        <div class="contact__social margin-top--40">
          <h3 class="contact__social-title">
            {{$t('contact.social_header')}}
          </h3>
          <div class="social__container">

            <a href="#" class="social__link">
              <div class="social__item-cont">
                <img :src="require('~/assets/img/social/telegram.svg')" alt="telegram" class="social__img">
              </div>
            </a>

            <a href="#" class="social__link">
              <div class="social__item-cont">
                <img :src="require('~/assets/img/social/fb.svg')" alt="telegram"  class="social__img">
              </div>
            </a>

            <a href="#" class="social__link">
              <div class="social__item-cont">
                  <img :src="require('~/assets/img/social/insta.svg')" alt="instagram"  class="social__img">
              </div>
            </a>
          </div>
        </div>

        <div class="contact__chaper margin-top--25">
          {{$t('contact.chapter_2')}}
        </div>

        <div class="contact__chaper margin-top--20 padding-bottom-25">
          {{$t('contact.chapter_3')}}
        </div>


      </main>
    </article>
    <footer class="contact__author">
      <div class="contact__author-text">
        BITBON.EXPERT 2021
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  props:{
    bitbonprice: {
      type: Number,
      required: false,
      default: 0,
    }
  }
}
</script>

<style lang="scss">
  .contact{
    &__wrapper{
      background-color: #191a1a;
      height: auto;
      margin-top: 50px;
      color: #727272;
    }

    &__container{
      padding: Max(50px, 10%) Max(25px, 5%) 0 Max(25px, 5%);
    }

    &__logo-text{
      color: white;
      line-height: 1.2;
      border-left: 3px solid #ffee00;
      padding-left: 14px;
      margin-left: 14px;
      max-width: 250px;
      padding-top: 5px;
      padding-bottom: 5px;
    }

    &__logo-container{
      width: 32%;
      flex: 0 0 32%;
    }

    &__header{
      display: flex;
      align-items: center;
    }

    &__chapter--center{
      text-align: center;
    }

    &__telegram{
      display: flex;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: #039be5;
      border-radius: 9px;
      padding: 15px 15px;
      font-size: 1.1em;
      text-align: center;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
    &__telegram:hover{
      opacity: 0.9;
    }


    &__telegram:visited{
      background-color: rgba($color: #039be5, $alpha: 0.9);
    }
    &__telegram:active{
      background-color: rgba($color: #048ace, $alpha: 1);
    }

    &__author{
      background-color: #000000;
      color: #8b8b8b;
      text-align: center;
    }

    &__author-text{
      padding-top: 11px;
      padding-bottom: 11px;
    }

    &__social-title{
      color: white;
      text-align: center;
      margin-bottom: 25px;
    }
  }

  @media (min-width: 700px) and (max-width: 1199px){
    .contact__chaper{
      max-width: 90%;
      margin: 0 auto;
    }
  }

  .social{
    &__item-cont{
      height: 33px;
    }
    &__img{
      height:100%;
      object-fit: contain;
    }
    &__container{
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    &__link{
      display: block;
    }
  }

  .margin-top--50{
    margin-top: Max(50px, 10%);
  }

  .margin-top--25{
    margin-top: Max(25px, 5%);
  }

  .margin-top--40{
    margin-top: Max(40px, 7%);
  }

  .margin-top--20{
    margin-top: Max(20px, 4%);
  }

  .margin-top--30{
    margin-top: Max(30px, 6%);
  }

  .padding-bottom-25{
    padding-bottom: Max(25px, 5%);
  }

</style>
<i18n locale="ru" src="~/assets/lang/contacts/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/contacts/en.json"></i18n>