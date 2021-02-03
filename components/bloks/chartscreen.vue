<template>
  <Blok :slide_id="3" :title="$t('chart_screen.title')" :footer_show="false">
    <div class="main__container">
      <div class="chart__chapter" v-html="$t('chart_screen.chapter_1.text')"></div>
    </div>  
    <client-only>
          <img class="bg-icon chart_screen__bg-icon" src="~assets/img/chartscreen/bgicon.svg" alt="bgicon">
    </client-only>

    <div class="chart-container">
      <img :src="require(`~/assets/img/${$t('chart_screen.chart')}`)" alt="chart" class="img chart">
    </div>
    <div class="main__container">
      <Subnotes :text="$t('chart_screen.subnotes')" :MaxWidth="60"></Subnotes>
    </div>  
  </Blok>
</template>

<script>
//import { Chart } from "frappe-charts/dist/frappe-charts.min.esm"

export default {
  data: ()=>({
    chart: {},
  }),
}
</script>

<style lang="scss">

  .chart-container{
    margin: 5% 0;
  }
  .chart_screen__bg-icon{
    width: 27%;
    margin-top: -7%;
    margin-right: -1%;
  }

  .frappe-chart .y.axis .line-horizontal {
    display: none;
  }

  .chart-container{
    width: 100%;
    height: 54%;
    pointer-events: none;
    //overflow-x: scroll ;
  }

  @media (max-width: 768px) {
    .chart-container{
    pointer-events: auto;
    width: 100%;
    height: 60vh;
    overflow-x: scroll ;
    direction: rtl;
    -ms-overflow-style: none;  /* IE 10+ */
    scrollbar-width: none;
    }

    .chart-container::-webkit-scrollbar { /* chrome based */
    width: 0px;  /* ширина scrollbar'a */
    background: transparent;  /* опционально */
    }

    .chart{
      height: 100%;
      width: auto;
     // object-fit: cover;
    }
  }


</style>

<i18n locale="ru" src="~/assets/lang/chartscreen/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/chartscreen/en.json"></i18n>