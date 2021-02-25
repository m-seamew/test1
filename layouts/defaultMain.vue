<template>
  <div>
       <div id="loadcontent" class="main">
         <Header :bitbonprice="bitbonPrice"></Header>
         <Nuxt :bitbonprice="bitbonPrice"/>
         <Contacts></Contacts>
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
  head(){
    return {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0; user-scalable=no;'},
      ],
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
    const myScreenOrientation = window.screen.orientation;
    myScreenOrientation.lock("portrait"); 

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
    background-color: $bgdefault; 
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
    //background-color: $bgdefault;
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

