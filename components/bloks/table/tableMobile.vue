<template>
  <div>
  <div class="table__mobile-headers">
    <h3 class="tablecomp__table-column-header" :class="active ? null : 'active'"  v-html="$t('tablecomp.column_left.title')" @click="showPrew"></h3>
    <h3 class="tablecomp__table-column-header" :class="active ? 'active' : null"  v-html="$t('tablecomp.column_right.title')"  @click="showNext"></h3>
  </div>  
  <VueSlickCarousel ref="carousel" :arrows="false" :dots="false" @swipe="active = !active" class="table__slider">
    <div class="tablecomp__table-column tablecomp__table-column--left">
      <div class="tablecomp__text--left">
        
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
             
               <ul v-for="(el, index) in tablePoint($t('tablecomp.column_right.points'))" :key="index">
                  <li class="table__point">
                    <div class="table__point-header" v-html="el.title"></div>
                    <div class="table__point-text" v-html="el.descr"></div>
                  </li>
                </ul>
            </div>  
          </div>
  </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  props:{
    bitbonPrice:{
      type: Number,
      default: 0,
    },
  },
  data: ()=>({
    active: true,
  }),
  methods:{
    tablePoint(objData){
      const data = [];
      for(let i = 0; i < Object.keys(objData).length; i++){
        data.push(objData[i]);
      }
      return data;
    },
    showNext() {
        this.$refs.carousel.next();
        this.active = !this.active;
    },
    showPrew() {
        this.$refs.carousel.prev();
        this.active = !this.active;
    },
  }
}
</script>

<style lang="scss" scoped>
  

  .table__mobile-headers{
    display: flex;
    margin-left: 5%;
    margin-right: 5%;
    justify-content: space-around;
  }

  .tablecomp__table-column-header{
    margin-top: 5% !important;
  }

  

  .tablecomp__table-column--right{
    //background-color: rgba(255, 238, 0, 0.35);
  }

  .tablecomp__table-column{
    padding-top: 5%;
    opacity: 1;
    transition: .3s;
  }

  .tablecomp__table-column:focus{
    border: none;
    outline: none;
  }

  .table__point{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba($color: white, $alpha: 0.5);
    padding: 10px 0;
    font-size: 1.1em;
  }

  .tablecomp__text--right .table__point{
    border-bottom: 1px solid rgba($color: black, $alpha: 0.1);
  }
  .table__comment{
    margin-bottom: 3% !important;
  }

  .tablecomp__text--right {
    margin-right: 4.5%;
  }

  .table__point-text{
    margin-top: 0 !important;
  }

  .tablecomp__table-column-header:not(.active){
    opacity: 0.5;
    transition: opacity .3s;
    pointer-events: auto;
  }

  .tablecomp__table-column-header.active{
    pointer-events: none;
  }


  .table__slider{
    background-color: rgba(255, 238, 0, 0.35) !important; 
  }

  .tablecomp__table-column--left{
    width: auto !important;
    background-color: transparent !important;
  }

 
</style>

<i18n locale="ru" src="~/assets/lang/tablecomp/ru.json"></i18n> 
<i18n locale="en" src="~/assets/lang/tablecomp/en.json"></i18n>