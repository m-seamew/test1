<template>
  <div class="tablecomp__table">
          <div class="tablecomp__table-column tablecomp__table-column--left">
            <div class="tablecomp__text--left">
              <h3 class="tablecomp__table-column-header" v-html="$t('tablecomp.column_left.title')"></h3>
                <ul v-for="(el, index) in tablePoint($t('tablecomp.column_left.points'))" :key="index">
                  <li class="table__point">
                    <div class="table__point-header" v-html="el.title"></div>
                    <div v-if="el.descr != 'bitbonPrice'" class="table__point-text" v-html="el.descr"></div>
                    <div v-else class="table__point-text">{{bitbonPrice}}</div>
                  </li>
                </ul>
                <div class="table__comment" v-html="$t('tablecomp.column_left.comment')"/>
            </div>
          </div>
          <div class="tablecomp__table-column tablecomp__table-column--right">
            <div class="tablecomp__text--right">
              <div class="tablecomp__table-column-header"  v-html="$t('tablecomp.column_right.title')"></div>
               <ul v-for="(el, index) in tablePoint($t('tablecomp.column_right.points'))" :key="index">
                  <li class="table__point">
                    <div class="table__point-header" v-html="el.title"></div>
                    <div class="table__point-text" v-html="el.descr"></div>
                  </li>
                </ul>
            </div>  
          </div>
  </div>
</template>

<script>
export default {
   props:{
    bitbonPrice:{
      type: Number,
      default: 0,
    }  
  },
  methods:{
    tablePoint(objData){
        const data = [];
        for(let i = 0; i < Object.keys(objData).length; i++){
          data.push(objData[i]);
        }
        return data;
    },
  }
}
</script>

<style lang="scss">

</style>

<i18n locale="ru" src="~/assets/lang/tablecomp/ru.json"></i18n> 
<i18n locale="en" src="~/assets/lang/tablecomp/en.json"></i18n>