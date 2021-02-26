<template>
  <Blok :slide_id="20" :title="$t('potential3.title')" :subtitle="$t('potential3.subtitle')" :footer_show="false" :first="false">
    <client-only>
        <img
          v-lazy="require(`~/assets/img/potential/potential3bg.svg`)"
          src="~/assets/img/lazyloading.svg"
          class="bg-icon potential3__bg-icon"
        >

        <img
          v-lazy="require(`~/assets/img/potential/potential3ghost.png`)"
          src="~/assets/img/lazyloading.svg"
          class="bg-icon potential3__ghost"
        >
    </client-only>
  <ObserverRecall @animationstop="isAnimation = false" @nextobserve="isAnimation = true"></ObserverRecall>

  <div class="main__container potential__main-container">

  <div class="potenteial3__main-chapter"  id="potential3__anim"> 
    <client-only>
    <div class="potential__chapter potential3__with-planet" :style="{height:`${(300 * scale) + 'px'}`}" id="pot3__cont">
      <div class="potential__planet-container" id="potential3__anim-item"  :style="{transform: `scale(${scale}) translateY(${-(1 - scale) * 100 + '%'})`, width:`${(300 * scale) + 'px'}`, height:`${(300 * scale) + 'px'}`}">
        <LazyHydrate when-visible>
          <Planet :focus="isAnimation"/>
        </LazyHydrate>
      </div>
    </div> 
    </client-only>

    <div class="potential3__text-container">
      <div class="potential3__text-item potential3__text-item--blue" v-html="$t('potential3.point_1')"/>
      <div class="potential3__text-item potential3__text-item--yellow" v-html="$t('potential3.point_2')"/>
      <div class="subnotes__hash">
          <p v-html="'/' + $t('potential3.subpoint') + '/'"></p>
      </div>
    </div>

      
      </div> 

      <div class="potentian3__note-cont">
        <div class="note">
          {{$t('potential3.note')}}
        </div>
      </div>

        <div class="potential3__subnote">
           <Subnotes :text="$t('potential3.subnotes')" :MaxWidth="55"></Subnotes>
        </div>
      </div> 
  </Blok> 
</template> 

<script>
  import LazyHydrate from 'vue-lazy-hydration';
export default {
  data: () => ({
    isMobiles: true,
    isAnimation: true,
  }),
  components:{
    LazyHydrate,
    Planet: () => import('~/components/bloks/svg/planet'),
  },
  computed:{
    isMobile(){
      return this.$store.getters['isMobile/getIsMobile'];
    },
    scale(){
      if(process.browser){
      const el = document.querySelector('#potential3__anim')
      const elParam = el !== null ? el.getBoundingClientRect() : null;
      return (elParam.width/300)/(1080*0.9/300);
      }
    }
  },
  methods:{
    tablePoint(objData){
      const data = [];
      for(let i = 0; i < Object.keys(objData).length; i++){
        data.push(objData[i]);
      }
      return data;
    }
  },
}
</script>

<style lang="scss">
  @import '~/assets/scss/variables';

  .potential3__text-item{
    position: relative;
    padding-left: 1.5em;
  }

  .potenteial3__main-chapter{
    display: flex;
    align-items: flex-start
  }



  .potential3__text-container{
    flex: 0 0 65%;
    margin-top: 1em;
    margin-bottom: 20px;
  }

  .potential3__text-item--blue::before{
    content: '';
    position: absolute;
    top: 0.15em;
    left: 0;
    width: .5em;
    height: .5em;
    border-radius: 50%;
    border: .2em solid #3e7de1;
  }

   .potential3__text-item--yellow::before{
    content: '';
    position: absolute;
    top: 0.15em;
    left: 0;
    width: .5em;
    height: .5em;
    border-radius: 50%;
    border: .2em solid #d1a23b;
  }



  .potential3__bg-icon{
    width: 80%;
  }

  .potential3__with-planet{
    margin-top: 2em;
    flex: 0 0 35%;
  }

  .potential3__ghost{
    width: 30%;
    top: auto;
    bottom: 0;
    right: 5%;
  }

 

  .potential3__subnote .subnotes--end{
    justify-content: flex-start;
    margin-top: max(20px, 6%);
    margin-bottom: max(20px, 6%)
  }

    @media (max-width: 720px){
    .potenteial3__main-chapter{
      flex-wrap: wrap;
    }

    .potential3__text-container{
      flex: 0 0 100%;
    }

    .potential3__with-planet{
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0 !important; 
    }
  }



  .potentian__subnotes{
    padding-left: max(15px, 3%);
    margin-top: 6px;
  }

  .potentian3__note-cont .note{
    font-size: 1.4em;
    line-height: 1.45;
    text-transform: uppercase;
    //margin-top: max(20px, 6%);
  }

  .potential__chapter3-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: max(15px, 3%);
    padding-right: max(15px, 3%);
    margin-top: max(15px, 2%);
  }

  .potential__map-container{
    padding-left: max(15px, 6%);
    padding-right: max(15px, 6%);
    margin-top: max(15px, 3%);

    & svg {
      width: 100%;
      height: auto;
    }
  }

  .potential__main-container{
    margin-bottom: 30px;
  }

  .potential__chapter3-stold{
    min-width: 250px;
    flex: 0 0 50%;
    line-height: 1.6;
  }

  .potential__chapter{
    margin-bottom: Max(20px, 3%);
  }


  .potential__logo-container--fond{
    width: 100%;
    height: 1.6em;
  }


  .potential__logo-item--fond{
    flex: 0 0 33%;
    min-width: 150px;
    max-width: 30%;
    justify-content: center;
    align-items: center;
    margin-top: Max(15px, 4%);
    margin-left: 5px;
    margin-right: 5px;
  }

  .potential__logos-container--fond{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  }

  .potential__logo-fond-comment{
    margin-top: Min(10px, 2%);
    color: $fontHeader;
    text-align: center;
    font-size: 0.9em;
  }

</style>


<i18n locale="ru" src="~/assets/lang/potential3/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/potential3/en.json"></i18n>