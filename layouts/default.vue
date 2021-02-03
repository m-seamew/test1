<template>
  <div>
       <div id="loadcontent" class="main">
         <Header :bitbonprice="bitbonPrice"></Header>
         <Nuxt :bitbonprice="bitbonPrice"/>
         <Footer v-if="isMobile" @burgerOpen="burger('open')"></Footer>
       </div>       
  </div>
</template>

<script>
import axios from 'axios';

export default {
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
  }),
  methods: {
    checkIfMobile(){
      this.isMobile = document.documentElement.clientWidth > 770 ? false : true;
      this.$store.dispatch('isMobile/changeIsMobile', this.isMobile);
    }
  },
  beforeMount(){
    setTimeout(()=>{document.querySelector('#loadcontent').classList.add("hide");}, 3500);
    setTimeout(()=>{document.querySelector('#loadcontent').classList.add("hide--test");}, 3500);
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
    const myScreenOrientation = window.screen.orientation;
    myScreenOrientation.lock("portrait"); 

    this.isMobile = document.documentElement.clientWidth > 770 ? false : true;
    this.$store.dispatch('isMobile/changeIsMobile', this.isMobile)
    window.addEventListener("resize", this.checkIfMobile);
    /*

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
   // opacity: 0;
    background-color: $bgdefault; 
   // pointer-events: none;

  }

  .hide{
   animation: visibl .5s forwards;
   pointer-events: auto;
   opacity: 1;
  }

   .hide-test{
   pointer-events: auto;
   opacity: 1;
  }
  

  @keyframes visibl {
  0%   { opacity: 0;
       }
  60%  {opacity: 0.8;
        }
  100% { opacity: 1;
        }
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

