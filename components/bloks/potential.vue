<template>
  <Blok :slide_id="19" :title="$t('potential.title')" :subtitle="$t('potential.subtitle')" :footer_show="false">
     <client-only>
        <img class="bg-icon service__bg-icon" src="~assets/img/service/shuttle.png" alt="Bitbon logo">
    </client-only>
    <div class="main__container potential__main-container">
     
      <div class="potential__chapter">
        <div class="potential__note-cont potential__note-cont--company">
          <div class="note">
            {{$t('potential.chapter_1.text')}}
           </div>
        </div>
        <CompanyCompSlider v-if="isMobile"/>
        <CompanyComp v-else/>
      </div>

      <div class="potential__chapter">
        <div class="potential__note-cont">
          <div class="note">
            {{$t('potential.chapter_2.text')}}
           </div>
        </div>
        <LogoCountriesSlider v-if="isMobile"/>
        <LogoCountries v-else/>
      </div>

      <div class="potential__chapter">
        <div class="potentiall__note-cont">
          <div class="note">
            {{$t('potential.chapter_3.text')}}
           </div>
           <FondSlider  v-if="isMobile" :data="tablePoint($t('potential.chapter_3.fonds'))"></FondSlider>
           <Fond v-else :data="tablePoint($t('potential.chapter_3.fonds'))"></Fond>
        </div> 
      </div>
      </div> 
  </Blok> 
</template> 

<script>
import CompanyComp from '~/components/bloks/potential/logoCompany';
import CompanyCompSlider from '~/components/bloks/potential/logoCompanySlider';

import LogoCountries from '~/components/bloks/potential/logoCountries';
import LogoCountriesSlider from '~/components/bloks/potential/logoCountriesSlider';

import FondSlider from '~/components/bloks/potential/fondSlider';
import Fond from '~/components/bloks/potential/fond';

export default {
  data: () => ({
    isMobiles: true,
  }),
  components:{
    CompanyComp,
    CompanyCompSlider,
    LogoCountries,
    LogoCountriesSlider,
    FondSlider,
    Fond
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
  .potential__main-container{
    margin-bottom: 30px;
  }
  .potential__note-cont--company{
    margin-bottom: Max(15px, 2.5%);
  }

  .potential__chapter:not(:first-child){
    margin-bottom: Max(20px, 4%);
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


<i18n locale="ru" src="~/assets/lang/potential/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/potential/en.json"></i18n>