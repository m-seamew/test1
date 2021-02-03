<template>
  <Blok :slide_id="3" :title="$t('target_project.title')" :footer_show="false">
    <div class="main__container">
      <div class="target__container-with-logo">
          <div class="target__logo-cont">
            <img src="~assets/img/targetproject/logobitbon.svg" alt="Bitbon System" class="img">
          </div>
          <div class="div chart_screen__chapter" v-html="$t('target_project.chapter_1.text')"></div>
      </div> 

      <div class="target__chapter target__chapter--beforetable-big" v-html="$t('target_project.chapter_2.text')"></div>
      <div class="target__chapter target__chapter--beforetable" v-html="$t('target_project.chapter_3.text')"></div>


        <div class="targer__note-container">
        <div class="note target__note">
          <div class="target__note-text">{{$t('target_project.note')}} </div>             
        </div>
        
        </div>
        
    </div>  
    <client-only>
          <img class="bg-icon target__bg-icon" src="~assets/img/targetproject/bgicon.svg" alt="bgicon">
          <img src="~assets/img/targetproject/pick.png" alt="Bitbon Ghost character" class="bg-icon target__pick-icon">
    </client-only>
    <div class="main__container">
      
    </div>  
  </Blok>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .target__container-with-logo{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .target__logo-cont{
    flex: 0 0 24%;
    display: flex;
    position: relative;
    padding-right: 5%;
  }
  .chart_screen__chapter{
    padding-left: 5%;
    position: relative;
  }
  .chart_screen__chapter::before{
  content:'';
  width: 1px;
  position: absolute;
  top: -5px;
  bottom:-5px;
  left: 0;
  background-color: #cbcbcb;
}

.target__chapter--beforetable-big{
   padding-top: 6%;
  }
  
.target__note{
  width: 55%;
  height: max-content;
  
}
.target__pick{ 
  float: right;
  width: 45%;
  object-fit: cover !important;
}  



.target__pick-icon{
  bottom: 0;
  right: 5%;
  top: auto;
  left: auto;
  width: 40%;
  z-index: 1;
}


.targer__note-container{
  padding-top: 2%
}

.target__chapter--beforetable{
  padding-top: 2%;
}

.target__bg-icon{
  width: 46%;
  top: -13%;
  right: -3%;
}

@media (max-width: 1024px) {
  .targer__note-container{
  padding-top: 6%;
  padding-bottom: 30px;
}


.target__bg-icon {
    top: -8%;
}
.target__chapter--beforetable{
  padding-top: 4%;
}
}
@media (min-width: 1024px) and (max-width: 1024px){
  .target__pick{
    margin-bottom: -6%;
  }
}
@media (min-width: 1100px){
  .target__pick{
    margin-bottom: -6%;
  }
  .targer__note-container{
    padding-top: 5%
  }
  .target__chapter--beforetable{
   padding-top: 4%;
  }
}

@media (max-width: 730px) {
  .target__pick-icon{
    position: absolute;
    width: 70%;
    right: 20%;
    bottom: -1%;
  }
  .target__note-text{
    margin-right: 5%;
  }
  .target__note{
    margin-bottom: 45%;
    width: 100%;
  }
  
}

.target__note-container{
  display: flex;
  .target__pick{
    order: 2;
  }
}

@media (max-width: 1023px){
  .targer__note-container{
      padding-bottom: 30px;
  }
}
</style> 

<i18n locale="ru" src="~/assets/lang/targetproject/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/targetproject/en.json"></i18n>