<template>
  <Blok 
    :slide_id="4"
    :footer_show="false"
    :title="$t('mainaboutsystem.title')"
    :first="true">
    
     <article>
      <main>
        <client-only>
          <img class="bg-icon about__bg-icon" src="~assets/img/aboutsystem/bgicon.png" alt="bgicon">
        </client-only>
        <div class="main__container">
          <div class="note about__note">
            {{$t('mainaboutsystem.note')}}
          </div>
          <div class="about__chapter about__chapter--position">
            <div class="about-chapter-text" v-html="$t('mainaboutsystem.article')"></div>
          </div>
           <div class="about__chapter about__chapter--withimg-position">
            <div class="about__img-container">
              <img src="~assets/img/aboutsystem/hand.png" alt="hand" class="img">
            </div>
            <div class="about-chapter-text" v-html="$t('mainaboutsystem.chapter_1')"></div> 
          </div>
          <div class="about__chapter about__chapter--withimg-position">
            <div class="about__img-container">
              <img src="~assets/img/aboutsystem/smile.png" alt="hand" class="img">
            </div>
            <div class="about-chapter-text" v-html="$t('mainaboutsystem.chapter_2')"></div> 
          </div>
        </div>
        <div class="about__subnote">
           <Subnotes :text="$t('mainaboutsystem.subnotes')" :MaxWidth="44"></Subnotes>
        </div>
      </main> 
     </article>  
  </Blok>
</template>

<script>
import Subnotes from '~/components/subnotes.vue';

export default {
  components:{
    Subnotes,
  },
}

</script>
<style lang="scss">
   @import '~/assets/scss/variables';
  .about__note{
    font-size: $notesBigFontSize;
  }
  .about__chapter--position{
    margin-top: 4%;
    margin-bottom: 4.1%;
  }

  .about__chapter{
    display: flex;
  }

  .about__chapter--withimg-position:not(:last-child){
    margin-bottom: 2.8%;
  }

  .about__chapter--withimg-position:last-child{
    margin-bottom: 3.2%;
  }

  .about__img-container{
    flex: 0 0 6.7%;
    margin-right: Max(10px, 2.6%);
  }

  .about__bg-icon{
    width: 29%;
    margin-top: -3%;
    margin-right: 7.1%;
  }

  .about__subnote{
    margin-right: 5%;
  }
</style> 

<i18n locale="ru" src="~/assets/lang/mainaboutsystem/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/mainaboutsystem/en.json"></i18n>