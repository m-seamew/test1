<template>
  <section class="contact__wrapper inside-menu__wrapper">
    <article class="">
      <header class="contact__header contact__container">
        <div class="contact__logo-container">
          <img :src="require('~/assets/img/preloader/preloader__logo.svg')" alt="Bitbon Expert Logo" class="img"> 
        </div>
        <div class="contact__logo-text">
          {{$t('contact.logo_text')}}
        </div>
      </header>
      <slot></slot>
      <main>
        <div class="margin-top--30 inside-menu__container">
          <div v-for="(el, index) in $t('footer.menu')" :key="index" class="inside-menu__slide-container"
          :class="checkIsActive(el.slug) ? 'footer__slide-container--active' : null"
          :style="checkIsActive(el.slug) ? createActiveStyles(el.bg_active) : null"
          @mouseenter="changeActive(el, index)"
          @mouseleave="fixActive(index)">
                <a class="footer__link" :href="el.link"></a>
                <div class="inside-menu__slide-item">
                  <div class="footer__img-container inside-menu__img-container">
                    <img :src='require(`~/assets/img/footer/${el.img}`)' alt="menu point" width="90px" height="90px">
                  </div>
                  <div class="inside-menu__slide-text">{{el.text}}</div>
                </div>
            </div> 

        </div>
      </main>
    </article>
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
  }, 
  methods:{
    checkIsActive(slug){
      return this.$route.path.indexOf(slug) == 0  ? true : false; 
    },
    createActiveStyles(colorArr){
      return {
        backgroundImage: `linear-gradient(to bottom, ${[...colorArr]})`,
      }
    },
    changeActive(element, indexEl){
      const arr = [...document.querySelectorAll('.inside-menu__slide-container')];
      arr.forEach((el, index) => {
        if(index === indexEl){
          el.style.backgroundImage = this.createActiveStyles(element.bg_active).backgroundImage;
        }else{
          el.style.backgroundImage = "none";
        }
      });
    },
    fixActive(){
      const arr = [...document.querySelectorAll('.inside-menu__slide-container')];
      const index = arr.indexOf(document.querySelector('.footer__slide-container--active'));
      const data = this.$t('footer.menu');
      arr.forEach(el => {
        if(el.classList.contains('footer__slide-container--active')){
          el.style.backgroundImage = this.createActiveStyles(data[index].bg_active).backgroundImage;
        }else{
          el.style.backgroundImage = "none";
        }
      });
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

  .inside-menu__wrapper{
    overflow-y: auto !important;
  }

  .inside-menu__wrapper::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  //border-radius: 10px;
  background-color: #F5F5F5;
}

.inside-menu__wrapper::-webkit-scrollbar
{
  width: 8px;
  background-color: #F5F5F5;
}

.inside-menu__wrapper::-webkit-scrollbar-thumb
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #ffee00;
}

  .inside-menu__slide-container {
    position: relative;
    min-height: 124px;
    font-size: 1em;
    line-height: 1.23;
    overflow: hidden;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 0 5%;
}

.inside-menu__slide-container:not(:hover)::after{
  content: "";
    display: block;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 8%;
    right: 8%;
    z-index: 0;
}

.inside-menu__container:not(:hover) .inside-menu__slide-container.footer__slide-container--active::after{
  display: none;
}

.inside-menu__slide-item{
  display: flex;
  align-items: center;
  padding: 0;
  width: 100%;

}

.inside-menu__img-container{
  width: 90px;
  height: 90px;
  margin: 0 4% 0 4%;
  flex: 0 0 90px;
}

.inside-menu__slide-text{
  font-size: 1.25em;
  font-weight: 700;
  text-align: left;
  margin-left: 10px;
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