<template>
  <client-only>
  <div class="mobile__menu">
    <div class="mobile__menu-container">
      <div class="like__continer menu__container">
         <div class="menu__button" @click="animation">
            <CustomVueLottie class="like" ref="lottie" :autoplay="false"  :data='HeartData' :height="30" :width="30"></CustomVueLottie>
            <div class="like__amount">
              {{like}}
            </div>
         </div>
      </div>
      <div class="menu__container--menu menu__container">
        <div class="menu__button" @click="enterMenu">
          <img :src="require('~/assets/img/menu/burger.svg')" alt="menu burger" class="img">
        </div>
      </div>
      <div class="menu__button menu__button--bitbon menu__container">
        <a class="mobile__link" href="#"></a>
        <div class="menu__button-text menu__button-text--bitbon">Bitbon +</div>
        <img :src="require('~/assets/img/menu/gift.svg')" alt="gift" class="img img--button-bitbon">
      </div>
    </div>
  </div>
  </client-only>
</template>

<script>
import HeartData from '~/assets/img/menu/heart.json';

export default {
  data: ()=>({
    HeartData,
    isLike: false,
  }),
  methods:{
    enterMenu(){
      this.$emit('burgerOpen');
    },
    animation(){
      this.isLike ? this.animationDislike() : this.animationLike(); 
      this.isLike = !this.isLike;
    },
    animationLike(){
          this.$refs.lottie.reverseAnim(1);
          setTimeout(() => {
           this.$refs.lottie.play();
          },);

          localStorage.setItem('isLike', 'true');

          this.$fire.database.ref().update(
            {firstPitchLike: this.$store.getters['stat/getStat'].firstPitchLike + 1}
          )
    },
    animationDislike(){
           this.$refs.lottie.reverseAnim(-1);
           setTimeout(() => {
           this.$refs.lottie.play();
           },);

           localStorage.setItem('isLike', 'false');

           const result = this.$store.getters['stat/getStat'].firstPitchLike - 1;
           if(result < 0){
             result = 0;
           }

           this.$fire.database.ref().update(
            {firstPitchLike: result}
          )
    }
  },
  computed:{
    like(){
      return this.$store.getters['stat/getStat'].firstPitchLike;
    }
  },
  mounted(){
    this.$fire.databaseReady();
    const tempIsLike = localStorage.getItem('isLike');
    if(tempIsLike !== undefined && tempIsLike == "true") {
      this.isLike = true;
      this.$refs.lottie.goFrameAndPlay(96, false)
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/variables';

  .mobile__menu{
    position: absolute;
    top: Min(-20px, -62px);
    left: 0;
    right: 0;
  }

  .mobile__menu-container{
    padding: 0 Max(8px, 2%);
    height: 47px;
    display: flex;
    justify-content: center;
  }

  .menu__button{
    border-radius: 7px;
    backdrop-filter: blur(3px);
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    position: relative;
    line-height: 1;
    height: 100%;
  }

  .menu__container:not(:last-child){
    margin-right: Max(5px, 2%);
  }

  .menu__button--bitbon{
    background-color: #000000;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }

  .menu__button--bitbon::before{
    content: "%";
    position: absolute;
    display: block;
    font-size: 69px;
    font-weight: 700;
    top: 0;
    right: 0;
    line-height: 47px;
    z-index: -1;
    color: #ffe400;
    opacity: 0.1;
  }


  .mobile__link{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .menu__button-text{
    font-size: $subheaderFontSize;
  }

  .menu__button-text--bitbon{
    text-transform: uppercase;
    font-weight: 700;
    color: #ffee00;
    flex-shrink: 0;
  }

  .img--button-bitbon{
    margin-top: -3px;
    margin-left: 5px;
  }

  .like{
    width: 50px !important;
    height: 100% !important;
    object-fit: contain;
  }

  .like__amount{
    min-width: 30px;
  }

  .menu__container--menu{
    flex: 0 0 47px;
  }

</style>