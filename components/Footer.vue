<template>
  <div> <Burger :active="isActive" @closeBurger="burger('close')" @bottomMenuFix="fixingBottomMenu"></Burger>
  <div class="footer__wrapper" :class="isSmall ? 'footer__wrapper--small' : 'footer__wrapper--big'">
    <MobileMenu @burgerOpen="burger('open')"></MobileMenu>

    <div class="footer__container">
       <div class="footer__container-content">
         <client-only>

         <flickity ref="flickity" :options="flickityOptions">
            <div v-for="(el, index) in $t('footer.menu')" :key="index" class="footer__slide-container" :class="checkIsActive(el.slug) ? 'footer__slide-container--active' : null">
                <a class="footer__link" :href="el.link"></a>
                <div class="footer__slide-item">
                  <div class="footer__img-container">
                    <img :src='require(`~/assets/img/footer/${el.img}`)' alt="menu point" class="img">
                  </div>
                  <div class="footer__slide-text">{{el.text}}</div>
                </div>
            </div>
          </flickity>

         </client-only>   
       </div> 
    </div>
  </div>
  </div>
</template>

<script>
import MobileMenu from '~/components/interface/mobileMenu.vue';

export default {
  async fetch(){
    this.linkLoader = this.$store.getters['users/getlinks'];
  },
  comments:{
    MobileMenu,
    },
  data: () => ({
    linkLoader: [],
    flickityOptions: {
        contain: true,
        freeScroll: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
    },
    isActive: false,
    scroll: 0,
    isSmall: false,
    isSmallFixed: false,
  }),
  methods:{
    scrolCheck(){
      this.scroll < 0 ? this.scroll = 0 : null;
      if(window.scrollY > this.scroll) {
          setTimeout( ()=>{this.isSmall = true},300);
      } else {

        if(this.isSmallFixed === false){
          setTimeout( ()=>{this.isSmall = false},300);
        }
        else {
           setTimeout( ()=>{this.isSmall = true},300);
        }
        
      }
      this.scroll = window.scrollY; 
    },
    fixingBottomMenu(){
      setTimeout( ()=>{this.isSmallFixed = false}, 2000);
    },
    tablePoint(objData){
      const data = [];
      for(let i = 0; i < Object.keys(objData).length; i++){
        data.push(objData[i]);
      }
      return data;
    },
    checkIsActive(slug){
      return this.$route.path == slug ? true : false; 
    },
    burger(param){
      if(param === 'open') {
      this.isActive = true;
      this.isSmallFixed = true;
      } else {
      this.isActive = false;}
    }
  },
  mounted(){ 
    window.addEventListener('scroll', this.scrolCheck);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrolCheck);
  }
}
</script>

<style lang="scss">

  @keyframes slideDown{
  from {
    transform: translateY(0);
  } 
  to {
    transform: translateY(54px);
  }
  }

  @keyframes slideUp{
  from {
    transform: translateY(54px);
  } 
  to {
    transform: translateY(0);
  }
  }

  .footer__img-container{
    width: 55px;
    height:55px;
    margin: 0 auto;
    //transition:  height .3s, opacity 1s;
    opacity: 1;
    //transform: scale(0);
  }
  .footer__slide-item{ 
    width: 100%;
    padding: 15%;
  }

  .footer__slide-container:not(:last-child) .footer__slide-item{
   // border-left: 1px solid rgba($color: white, $alpha: .08);
    border-right: 1px solid rgba($color: white, $alpha: .08);
  }
  
  .footer__container-content{
    width: 100%;
   // margin: auto;
  }

  .footer__slide-container{
    position: relative;
    width: 30%;
    //height: auto;
    min-height: 124px;
    //max-height: 124px;
    font-size: 13px;
    line-height: 1.23;
    overflow: hidden;
    color: #6e6e6e;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 0 5%;
    transition: max-height .5s;

  }

  .footer__slide-container--active{
    background-image: linear-gradient(to bottom, #3e4f94, #00083e);
    color: white
  }

  .footer__slide-container--active .footer__slide-item{
    border-right: none !important;
  }

  .footer__link{
    display: block;
    color: #6e6e6e;
    text-decoration: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .footer__link:visited{
     color: #6e6e6e;
     text-decoration: none;
  }

  .footer__wrapper{
    width: 100%;
    background-image: linear-gradient(to bottom, #434343 2%, #101010 100%);
    backdrop-filter: blur(6px);
    position: fixed;
    max-height: 124px;
    //animation: slideDown 2s forwards linear;
    //animation: slideDown 2s backwards;
    bottom: 0;
    z-index: 999;
    //max-height: 124px;
    height: 124px;
    //transition:  all .5s;
    //animation: slideDown 2s backwards;

    .flickity-viewport{
       max-height: 124px;
    }
  }

  .footer__wrapper--big{
    animation: slideUp .5s forwards linear;
  }
  .footer__slide-text{
    margin-top: 7px;
  }



  .footer__wrapper--small{
    //height: 70px;
    //min-height: 70px;
    //height: 70px;
    animation: slideDown .5s forwards linear;

    .footer__img-container{
      display: none;
    }

      .footer__slide-text{
    margin-top: 4px;
  }
  /*  .footer__slide-container{
       max-height: 70px;
      // height: 70px;
       transition:  height .3s, max-height .3s;
       padding: 0% 5%;
    }

    .flickity-viewport{
     max-height: 70px !important;
      //transition:  height .3s, max-height .3s,  transform .2s;
    }
    .footer__slide-item{
      transition:  height .3s, max-height .3s;
    }

    .footer__img-container{
      height: 0px;
      opacity: 0;
      transition:  height .3s, opacity .05s;
}*/
  }

  
</style>

