<template>
  <div>
       <div id="loadcontent" class="main main--pc">
         <div class="loyaut__left-sidebar">
           <Contacts> 
              <currency :bitbonprice="bitbonPrice" :menu__pcCont="styleOfContainer"></currency>
           </Contacts>
         </div>
         <div class="loyaut__center-sidebar">
            <Nuxt :bitbonprice="bitbonPrice"/>
         </div>
         
       </div>       
  </div>
</template>

<script>
import axios from 'axios';
import currency from '~/components/interface/components/menuCursLang'

export default {
  components: {currency},
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
    }
  }),
  methods: {
    checkIfMobile(){
      this.isMobile = document.documentElement.clientWidth > 770 ? false : true;
      this.$store.dispatch('isMobile/changeIsMobile', this.isMobile);
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
  },
  mounted(){
    this.isMobile = document.documentElement.clientWidth > 770 ? false : true;
    this.$store.dispatch('isMobile/changeIsMobile', this.isMobile)
    window.addEventListener("resize", this.checkIfMobile);
    
    /*setTimeout(()=>{document.querySelector('#loadcontent').classList.add("hide");}, 3500);

    this.$nuxt.$on('finishLoading', () => {   
        console.log('testing'); 
        setTimeout(()=>{document.querySelector('#loadcontent').classList.add("hide");}, 3500);
    })*/
  },
  beforeDestroy(){
    window.removeEventListener('resize', this.checkIfMobile); 
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/variables';
  .main{
    //transition: opacity .5s;
    //opacity: 0;
    background-color: $bgdefault; 
   // pointer-events: none;

  }

  .main--pc{
    display: flex;
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
    width: 100%;
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



  html{
    background-color: $bgdefault;
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
</style>

