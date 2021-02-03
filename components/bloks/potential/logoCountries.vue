<template>
  <div class="potential__logos-container--pc potential__logos-container--countries">

    <div class="potential__logo-item--country" v-for="(el, index) in tablePoint($t('potential.chapter_2.contries'))" :key="index">
      <div class="potential__logo-container--pc potential__logo-container--country">
        <img class="img__logo-flickity" :src='require(`~/assets/img/${el.img}`)' :alt="el.header">
      </div>
      <div class="potential__logo-text">{{el.header}}</div>
    </div>
    
  </div>
</template>

<script>
export default {
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

   .potential__logos-container--pc{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .potential__logo-item--country{
    width: 20%;
    flex: 0 0 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    //margin-bottom: 20px;
  }

  .potential__logo-container--pc{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .potential__logos-container--countries{
    margin-top: Max(25px, 3%);
    margin-bottom: Max(25px, 4%);
  }
  
  .img__logo-flickity{
    object-fit: contain;
    height: 100%;
  }

  .potential__logo-container--country{
    height: 3.33em;
  }

  .potential__logo-text{
    margin-top: Max(10px, 1%);
  }

</style>


<i18n locale="ru" src="~/assets/lang/potential/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/potential/en.json"></i18n>