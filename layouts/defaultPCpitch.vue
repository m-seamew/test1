<template>
  <div>
       <div id="loadcontent" class="main main--pc main-pc-black default-pc__pitch">
         <div class="loyaut__left-sidebar">
           <InsidePitchMenu> 
              <currency :bitbonprice="bitbonPrice" :menu__pcCont="styleOfContainer"></currency>
           </InsidePitchMenu>
         </div>
         <div class="loyaut__center-sidebar">
            <Nuxt :bitbonprice="bitbonPrice"/>
         </div>
            <div class="loyaut__right-sidebar" :style="styleOfLeftMenu">
              <h3 class="menu__header">Навигация по презентации</h3>
              <ul>
                <li v-for="(el, index) in checkElementIfIs(menu)" :key="index" class="menu__pc-item-container">
                  <div class="menu__pc-item" :class="el.hash === checkHash ? 'active' : null"
                     v-scroll-to="{
                     el:`#${el.hash}`,
                     offset: -50,
                     duration: 500,
                     cancelable: false,
                     }"
                  >
                  {{el.name}}</div>
                </li>
              </ul>
            <MobileMenu></MobileMenu>
            </div>
         
       </div>       
  </div>
</template>

<script>
import axios from 'axios';
import currency from '~/components/interface/components/menuCursLang';
import MobileMenu from '~/components/interface/mobileMenu.vue';

export default {
  components: {currency, MobileMenu},
  async fetch(){
    await axios
          .get('https://bc-api.bit.trade/api/price?currency=usd')
          .then(res => {
            this.bitbonPrice = res.data;
            this.$store.dispatch('bitbon/changePrice', res.data)
          })
          .catch(err => console.log(err));
  },
  data: () => ({
    bitbonPrice: 0,
    isMobile: true,
    styleOfContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      //marginTop: 'Min(50px, 10%)',
      //marginBottom: 'Min(50px, 10%)',
    },
    styleOfLeftMenu:{
      transform: 'translateY(0)'
    },
    menu: [],
    tempLeftMenu: 0,
  }),
  head(){
    return {
      meta: [
        { name: 'viewport', content: 'width=device-width; initial-scale=1.0'},
      ],
    }
  },
  methods: {
    checkIfMobile(){
      this.isMobile = document.documentElement.clientWidth > 770 ? false : true;
      this.$store.dispatch('isMobile/changeIsMobile', this.isMobile);
    },
    transformY(){
      if(process.browser){
          const change = window.pageYOffset + window.innerHeight/2 -100;
         
            this.styleOfLeftMenu = {
              transform: `translateY(${change}px)`,
            }
            this.tempLeftMenu = change;
          
      } 
    },
    checkElementIfIs(arr){
      const res = [];
      arr.forEach(el=>{
        document.querySelector(`#${el.hash}`) !== null ? res.push(el) : null;
      })
      return res;
    }
  },
  beforeMount(){
    this.$fire.databaseReady()
        .then(()=>{
          this.$fire.database.ref().on('value', snapshot => {
             this.$store.dispatch('stat/changeStat' , snapshot.val());
          })
        })
        .then(()=>{
          this.$fire.database.ref().on('child_changed', snapshot => {
             this.$store.dispatch('stat/changeStat' , snapshot.val());
          })
        })
        .catch(err => console.log(err));
         
    this.menu = this.$t('burger.firstpitch.points');
  },
  computed:{
    checkHash(){
      return this.$store.getters['locationhash/getHash'];
    }
  },
  mounted(){
    this.isMobile = document.documentElement.clientWidth > 770 ? false : true;
    this.$store.dispatch('isMobile/changeIsMobile', this.isMobile)
    window.addEventListener("resize", this.checkIfMobile);
    window.addEventListener('scroll', this.transformY);
    this.hash = window.location.hash;
    this.transformY();
    
    /*setTimeout(()=>{document.querySelector('#loadcontent').classList.add("hide");}, 3500);

    this.$nuxt.$on('finishLoading', () => {   
        console.log('testing'); 
        setTimeout(()=>{document.querySelector('#loadcontent').classList.add("hide");}, 3500);
    })*/
    setTimeout(_=>{document.querySelector('html').style.overflow = "auto"}, 500);
  },
  beforeDestroy(){
    window.removeEventListener('resize', this.checkIfMobile); 
    window.removeEventListener('scroll', this.transformY);
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/variables';
  .main{
    
  .blok-wrapper{
    margin: 0;
  }
  }

  html {
    overflow: hidden;
  }

  .main--pc{
    display: flex;
  }

  .main-pc-black{
     background-color: $backgroundBlack;
     min-height: 100vh;
  }

  .loyaut__right-sidebar{
   // position: fixed;
    //top: 50%;
    //right: 50px;
    margin-left: 50px;
    height: fit-content;
    border-radius: 7px;
    backdrop-filter: blur(3px);
    background-color: #f3f3f3;
    //transform: translateY(-50%);
    width: 200px;
    transition: transform .75s ease-in-out;
    transition-delay: .25s;
    //z-index: 999;
    .menu__button--bitbon:before {
    line-height: 56px;
    }
  }

  .loyaut__left-sidebar{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    z-index: 9999;
    font-size: .5em;
    line-height: 1.3;

    .contact__wrapper{
      margin-top: 0;
      height: 100%;
      position: relative;
      overflow: hidden;
    }

    .contact__author{
      position: absolute;
      bottom: 0;
      width: 100%;
      //left: 0;
    }

    .contact__header{
      flex-wrap: wrap;
    }

    .contact__logo-container{
      width: 50%;
      flex: 0 0 50%;
    }

    .contact__logo-text{
      margin-left: 0;
      padding-left: 9px;
      margin-top: 21px;
      flex: 0 0 100%;
      max-width: 200px;
      margin-bottom: 25px;
    }

    .contact__chaper.contact__chapter--center.margin-top--50{
      margin-top: 20px;
    }

    .social__item-cont:hover{
      opacity: 0.7;
    }

    .social__item-cont:active{
      opacity: 0.8;
    }

    @media (max-height: 700px) {
      font-size: 13px;

      .contact__logo-container{
        width: 40%;
        flex: 0 0 40%;
      }

      .contact__chaper{
        max-width: 100%;
      }

      .contact__logo-text{
        margin-top: 15px;
        padding-right: 9px;
        margin-bottom: 15px;
      }

      .contact__chaper.contact__chapter--center.margin-top--50{
        margin-top: 15px;
      }

      .contact__telegram{
        padding: 10px;
      }

      .social__item-cont{
        height: 25px;
      }


      .margin-top--30 {
         margin-top: 15px;
      }

      .margin-top--40{
        margin-top: 20px;
      }

      .margin-top--25{
        margin-top: 20px;
      }

      .contact__social-title {
        margin-bottom: 20px;
      }

    }

    @media (min-height: 700px) and (max-height: 740px){

      .contact__logo-container{
        width: 50%;
        //max-height: 9vh;
        flex: 0 0 50%;
        align-items: center;
      }
      
      .contact__logo-text{
        margin-top: 15px;
        padding-right: 9px;
        margin-bottom: 15px;
      }

      .contact__chaper.contact__chapter--center.margin-top--50{
        margin-top: 15px;
      }

      .contact__telegram{
        padding: 10px;
      }

      .social__item-cont{
        height: 25px;
      }


      .margin-top--30 {
         margin-top: 25px;
      }

      .margin-top--40{
        margin-top: 30px;
      }

      .margin-top--25{
        margin-top: 25px;
      }

      .contact__social-title {
        margin-bottom: 25px;
      }
    }
  }

  .loyaut__center-sidebar{
    margin-left: 380px;
    margin-top: 40px;
    width: fit-content;
    height: auto;
  }

  .hide{
   animation: visibl .5s forwards;
   //pointer-events: auto;
   opacity: 1;
  }

   .hide-test{
  // pointer-events: auto;
   opacity: 1;
    }
  
  .menu__pc-item-container{
    padding: 8px 11px;
  }
  .menu__pc-item{
    color: $textMenuPC;
    font-size: .6em;
    line-height: 1; 
    margin-right: 17px;
    margin-left: 17px;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
  }
  
  .menu__pc-item:hover{
    opacity: .8;
  }

  .menu__pc-item:active{
    opacity: 0.5;
  }

  .menu__pc-item.active::before{
    content: '';
    opacity: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -11px;
    width: 5px;
    background-color: #005dff;
    transition: opacity .3s;
    transition-delay: .3s; 
  }

  .menu__pc-item::before{
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -11px;
    width: 5px;
    background-color: #005dff;
    transition: opacity .3s;
  }

  .menu__pc-item-container:last-child{
    padding-bottom: 25px
  }

  .menu__header{
    color: $textMenuPC;
    line-height: 1.45;
    font-size: .6em;
    font-weight: 700;
    padding: 25px 17px;
    text-transform: uppercase;
  }


  html{
    line-height: $mainLineHeight;
    font-family: $mainFont;
    font-size: $mainFontSize;
    color: $mainFontColor;
    height: 100%;
    
    @media screen and (max-width: $desktopWidth) {
      font-size: 16px;
    }
    @media screen and (max-width: $tableWidth) {
      font-size: 15px;
    }
    @media screen and (max-width: $phoneWidth) {
      font-size: 14px;
    }
  }


  .mobile__menu-container{
    display: flex;
    flex-direction: column;
    padding: 8px 0;
    font-size: .5em;
  }

  .menu__container--menu{
    display: none;
    pointer-events: none;
  }

  .default-pc__pitch .menu__container{
    margin-right: 0 !important;
  }

  .mobile__menu{
    top: auto;
    bottom: 0;
    transform: translateY(calc(100% + 14px));
  }

  .img--button-bitbon {
    margin-top: -3px;
    margin-left: 5px;
    max-width: 20px;
  }

  .menu__button{
    display: flex;
    justify-content: center;
  }

  .like__continer{
    margin-bottom: 14px;
  }

  .like{
    cursor: pointer;
  }

  .like:hover{
    opacity: .9;
  }

  .like:active{
    opacity: .7;
  }

  .mobile__menu-container{
    height: auto;
  }

  .menu__button--bitbon{
    padding: 18.5px 0;
  }
</style>

