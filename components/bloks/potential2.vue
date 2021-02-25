<template>
  <Blok :slide_id="20" :title="$t('potential2.title')" :subtitle="$t('potential2.subtitle')" :footer_show="false" :first="false">
    <div class="main__container potential__main-container">
      <div class="potential__chapter">
        <div class="potential__note-cont">
          <div class="note--firstline">
           {{$t('potential2.notes_1')}}
          </div>
          <div class="subnotes__hash potentian__subnotes">
            <p v-html="'/' + $t('potential2.subnotes_1') + '/'"></p>
          </div>

          <div class="potential__map-container">
            <LazyHydrate when-visible>
             <Map/>
            </LazyHydrate>
          </div>
        </div>
      </div>

      <div class="potential__chapter">
        <div class="potential__note-cont">
          <div class="note--firstline" v-html="$t('potential2.notes_2')"></div>
          <div class="subnotes__hash potentian__subnotes">
            <p v-html="'/' + $t('potential2.subnotes_2') + '/'"></p>
          </div>
        </div>
      </div>

      <div class="potential__chapter">
        <div class="potential__note-cont">
          <div class="note--firstline">
           {{$t('potential2.notes_3')}}
          </div>
          <div class="subnotes__hash potentian__subnotes">
            <p v-html="'/' + $t('potential2.subnotes_3') + '/'"></p>
          </div>

          <div class="potential__chapter3-list">
            <div class="potential__chapter3-stold">
              <div v-for="(el, index) in $t('potential2.chapter_3.left')" :key="index">{{el}}</div>
            </div>
            <div class="potential__chapter3-stold">
              <div v-for="(el, index) in $t('potential2.chapter_3.right')" :key="index">{{el}}</div>
            </div>
          </div>
        </div>
      </div>


      

      </div> 
  </Blok> 
</template> 

<script>
  import LazyHydrate from 'vue-lazy-hydration';
export default {
  data: () => ({
    isMobiles: true,
  }),
  components:{
    LazyHydrate,
    Chart: () => import('~/components/bloks/svg/chart'),
  },
  computed:{
    isMobile(){
      return this.$store.getters['isMobile/getIsMobile'];
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

  .potentian__subnotes{
    padding-left: max(15px, 3%);
    margin-top: 6px;
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


<i18n locale="ru" src="~/assets/lang/potential2/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/potential2/en.json"></i18n>