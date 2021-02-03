<template>
  <client-only>
  <flickity ref="flickity" :options="flickityOptions" class="potential__logos-container potential__logos-container--countries">
      <div class="potential__logo-item--country" v-for="(el, index) in tablePoint($t('potential.chapter_2.contries'))" :key="index">
        <div class="potential__logo-container--pc potential__logo-container--country">
          <img class="img__logo-flickity" :src='require(`~/assets/img/${el.img}`)' :alt="el.header">
      </div>
      
      <div class="potential__logo-text">{{el.header}}</div>
      
    </div>
  </flickity>
  </client-only>
</template>

<script>
export default {
  data: () => ({
    flickityOptions: {
        freeScroll: true,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 2500,
        wrapAround: true
      }
  }),
  methods:{
    tablePoint(objData){
      const data = [];
      for(let i = 0; i < Object.keys(objData).length; i++){
        data.push(objData[i]);
      }
      return data;
    }
  }
}
</script>

<style lang="scss" scoped>

   .potential__logo-item--country{
     display: flex;
     flex-direction: column;
     align-items: center;
   }
  

  .potential__logo-item--country{
    width: 25%;
    flex: 0 0 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;
    margin-left: 5%;
    margin-right: 5%;
  }


  .potential__logos-container--countries{
    margin-top: Max(15px, 2%);
   // margin-bottom: Max(15px, 2%);
  }
  
  .img__logo-flickity{
    object-fit: contain;
    height: 100%;
  }

  .potential__logo-container--country{
    height: 3.33em;
  }

  .potential__logo-text{
    text-align: center;
    margin-top: Max(10px, 1%);
  }
</style>


<i18n locale="ru" src="~/assets/lang/potential/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/potential/en.json"></i18n>