<template>
  <Blok 
    :slide_id="18"
    :footer_show="false"
    :title="$t('sience4.title')"
    :subtitle="$t('sience4.subtitle')"
    :first="false">

  <transition name="fade" mode="out-in">  
    <div class="sience4__video-container" v-if="video.book.isOpen === true">
        <div class="video__close" @click="video.book.isOpen = false">
          <img src="~assets/img/close.svg" class="video__close-img"/>
        </div>
        <Player :options="options" :source="video.book.source" :poster="video.book.poster"></Player>
    </div>
  </transition>

     <article>
      <main>
        <client-only>
          <img class="bg-icon sience1__bg-icon" src="~assets/img/sience/bgicon.svg" alt="bgicon">
          <img class="bg-icon sience4__bg-icon-footer" src="~assets/img/sience/gnost41.png" alt="bgicon">
        </client-only>
        <div class="main__container sience4__container">

          <!--<client-only>
 <div class="player-container">    
    <vue-core-video-player :src="require('~/assets/video/1.mp4')"></vue-core-video-player>
 </div>
          </client-only>-->
          <div class="sience4__left">
            <div class="video__container">
              <div class="video__img-container">
                <img src="~assets/img/sience/video.png" alt="video" class="img">
                <div class="video__button-container">
                  <div class="video__button" @click="video.book.isOpen = true">
                    <img src="~assets/img/sience/video__button.svg" alt="play" class="img">
                  </div>
                </div>
              </div>
              <div class="video__text-container">
                <div class="video__text-header bold">{{$t('sience4.product_1.header')}}</div>
                <div class="video__text-content" v-html="$t('sience4.product_1.text')"/> 
              </div>
            </div>

            <div class="video__container video__container--padding-top">
              <div class="video__img-container">
                <img src="~assets/img/sience/video1.jpg" alt="video" class="img">
                <div class="video__button-container">
                  <div class="video__button">
                    <img src="~assets/img/sience/video__button.svg" alt="play" class="img">
                  </div>
                </div>
              </div>
              <div class="video__text-container">
                <div class="video__text-header bold">{{$t('sience4.product_2.header')}}</div>
                <div class="video__text-content" v-html="$t('sience4.product_2.text')"/> 
              </div>
            </div>
          </div>

          <div class="sience4__right">

            <div class="sience4__chapter">
              <div class="sience4__chapter-img">
                <img src="~assets/img/sience/zakon.png" alt="zakon" class="img">
              </div>
              <div class="sience4__chapter-text-container">
                <div class="sience4__chapter-header bold">{{$t('sience4.product_3.header')}}</div>
                <div class="chapter__text-content" v-html="$t('sience4.product_3.text')"/> 
              </div>
            </div>
          </div>
        </div>
         <div class="sience4__subnote">
            <Subnotes :text="$t('sience4.subnotes')" :MaxWidth="40"></Subnotes>
          </div>
      </main> 
     </article>  
  </Blok>
</template>

<script>
import Subnotes from '~/components/subnotes.vue';
import Player from '~/components/video.vue';

export default {
  components:{
    Subnotes,
    Player
  },
  methods:{
    test(){console.log(11)}
  },
  data: ()=>({
    options:{
      title: 'Example Title',
    },
    video: {
      book: {
        source: [
          {
            type: 'video/mp4',
            size: '720',
            source: '1.mp4'
          }
        ],
        poster: 'poster.jpg',
        isOpen: false,
      }
    }
  })
}

</script>
<style lang="scss">
   @import '~/assets/scss/variables';
   
   .sience4{
     &__video-container{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    &__video-container::before{
       content: '';
       position: absolute;
       top: 0;
       bottom: 0;
       right: 0;
       left:0;
       background-color: black;
       background-color: rgba(0, 0, 0, 0.85);
       backdrop-filter: blur(6px);
     } 
     &__container{
       display: flex;
     }
   }

   .sience4__left{
     flex: 0 0 55%;
     border-right: 1px solid #cbcbcb;
   }

   .sience4__right{
     flex: 0 0 45%;

    .sience4{
      &__chapter-img{
        display: flex;
        justify-content: center;
        .img{
          width: 70%;
          height: 70%;
        }
      }

      &__chapter-text-container{
        margin-left: 6%
      }

    } 
   }

   .video{
     &__close{
    position: absolute;
    z-index: 1001;
    padding: 20px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.85);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    right: 0;
    top: 0;
    transform: translate(-50%, 50%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    }
    &__close-img{
      width: 20px;
      height:20px;
      object-fit: contain;
    }

     &__container{
     width: 100%;
     display: flex;
     align-items: center;
     border-bottom: 1px solid #cbcbcb;
     }

     &__container:last-child{
       border-bottom: none;
     }

     &__img-container{
      flex: 0 0 30%;
      width: 30%;
      height: min-content;
      display: flex;
      position: relative;
     }

     &__button-container{
       position: absolute;
       top: 0;
       left: 0;
       bottom: 0;
       right: 0;
       display: flex;
       align-items: center;
       justify-content: center;
     }

     &__button{
       width: 60%;
       transition: transform .3s, opacity .1s;
       cursor: pointer;
     }
     &__button:hover{
       transform: scale(1.3);
       transition: transform .3s;
     }
     &__button:active{
       opacity: 0.8;
       transition: opacity .1s; 
     }

     &__text-container{
       margin-left: Max(10px, 5%);
       margin-right: Max(10px, 5%);
     }

     &__container:first-child{
       padding-bottom: 5%;
     }

     &__container:nth-child(2n){
       margin-top: 5%;
       padding-bottom: 5%;
     }

     &__container:last-child{
       padding-bottom: 0;
     }

     &__text-header{
       margin-bottom: Max(5px, 1%);
     }
   }

   


  .sience4{
    &__chapter-header{
      font-size: $headerFontSize;
      margin-bottom: Max(8px, 1%);
    }
   
   &__subnote{
        margin-top: 11%;
        margin-bottom: Max(30px, 10%);
        margin-right: 5%;
      }
      &__bg-icon-footer{
        left: 5%;
        bottom: 0;
        width: 35%;
        top: auto;
        right: auto;
      }
  }
   .fade-enter-active, .fade-leave-active{
        transition: .3s;
    }
    .fade-leave-active {
        opacity: 0;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

       .sience4__subnote{
       margin-top: 8%;
       margin-bottom: 5%;
     }

     @media (max-width: 660px) {
  .sience4__right .sience4__chapter-text-container{
    margin-left: 0 ;
  }

  .sience4__chapter-header{
    text-align: center;
  }

  .sience4__bg-icon-footer{
    width: 40%;
  }
     .sience4__left{
       flex: 0 0 100%;
       margin-bottom: 5%; 
       border: none;
     }
     .sience4__right{
       flex: 0 0 100%;
       border-top: 1px solid #cbcbcb;
       padding-top: 5%;
       .img{
          width: 50% !important;
          height: 50%;
          margin-bottom: 10px;
        }
     }

     .sience4__container{
       flex-wrap: wrap;
     }

     
   }
</style> 

<i18n locale="ru" src="~/assets/lang/sience4/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/sience4/en.json"></i18n>