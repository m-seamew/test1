<template>
   <Blok :slide_id="2" :footer_show="false">
    <article>
      <main>
        <div class="main__container">
          <div class="note tablecomp__note--position">
            {{$t('tablecomp.note')}}
          </div>
          <div class="tablecomp__chapter tablecomp__chapter--beforetable" v-html="$t('tablecomp.chapter')"></div>
        </div>
        <TableMobile v-if="isMobile"></TableMobile>
        <TableComputer v-else></TableComputer>
      </main>
    </article>
   </Blok>
</template>

<script>
import TableMobile from '~/components/bloks/table/tableMobile';
import TableComputer from '~/components/bloks/table/tableComputer';

export default {
  async fetch(){
    this.bitbonPrice = this.$store.getters['bitbon/getPrice'];
  },
  data: () => ({
    bitbonPrice: 0,
    isMobile: true,
  }),
  methods:{
    tablePoint(objData){
      const data = [];
      for(let i = 0; i < Object.keys(objData).length; i++){
        data.push(objData[i]);
      }
      return data;
    },
    checkIfMobile(){
      this.isMobile = document.documentElement.clientWidth > 770 ? false : true;
    },
  },
  comments: {
    TableMobile,
    TableComputer,
  },
  mounted(){
    this.isMobile = document.documentElement.clientWidth > 770 ? false : true;
    window.addEventListener("resize", this.checkIfMobile);
  },
  beforeDestroy(){
    window.removeEventListener('resize', this.checkIfMobile); 
  }
}



  
 
</script>

<style lang="scss">
  @import '~/assets/scss/variables';

  .tablecomp__chapter--beforetable{
    padding-bottom: Max(10px, 3%);
  }

  .tablecomp__note--position{
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .tablecomp__table{
    display: flex;
    height: auto;
  }

  .table__point-header{
    //position: relative;
  }

  @media (max-width: 1023px){
    .tablecomp__table-column{
      padding-bottom: 20px;
    }
  }
  @media (min-width: 1025px){
    .tablecomp__table{
      height: 1080px;
    } 
  }

  .tablecomp__table-column{
    flex: 0 0 45%
  }
  .tablecomp__table-column-header{
    font-size: $headerFontSize;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 11%;
    padding-bottom: 6.3%;
  }
  .tablecomp__table-column--left{
    padding-left: 5%;
    background-color:rgba($color: #ffee00, $alpha: 0.35);
    
  }
  .tablecomp__table-column--right{
    padding-right: 5%;
  }

  .tablecomp__text--left{
    margin-right: 4.5%;
  }
  .tablecomp__text--right{
    margin-left: 4.5%;
  }

  .table__point-text{
    font-weight: 700;
    margin-top: Max(5px, 2.25%);
  }

  .table__point:not(:first-child){
    margin-top: Max(5px, 2.25%);
  }

  .table__comment{
    opacity: 0.6;
    line-height: 1.1;
    font-size: 0.74em;
    margin-top: 4%;
    margin-bottom: 13.5%;
    font-weight: 700;
  }
</style>

<i18n locale="ru" src="~/assets/lang/tablecomp/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/tablecomp/en.json"></i18n>