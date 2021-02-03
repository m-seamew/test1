<template>
  <Blok :slide_id="6" :title="$t('token_2.title')" :subtitle="$t('token_2.subtitle')" :footer_show="false" :first="false">
    <client-only>
        <img class="bg-icon token__bg-icon" src="~assets/img/token1/bgicon.svg" alt="Bitbon logo">
    </client-only>
    <article>
      <main>
        <div class="main__container token__main-container token__container--token2-position">
          <div class="token__points token__points--token2-position">
           <div class="token__point">
             <div class="token__point-header">
                <div class="point-header__cont">
                  <img src="~assets/img/token1/ghost.png" alt="Ghost" class="img">
                  <div class="point-header__icon">
                    <div class="round">3</div>
                  </div>
                </div>
                <h3 class="token__point-title" v-html="$t('token_2.point_1.title')"></h3>
             </div>
             <div class="token__point-text" v-html="$t('token_2.point_1.text')"></div>
           </div>
           <div class="token__point">
              <div class="token__point-header">
                <div class="point-header__cont">
                  <img src="~assets/img/token1/money.png" alt="Money" class="img">
                  <div class="point-header__icon">
                      <div class="round">4</div>
                  </div>
                </div>
                <h3 class="token__point-title" v-html="$t('token_2.point_2.title')"></h3>
              </div>
              <div class="token__point-text" v-html="$t('token_2.point_2.text')"></div>
           </div>
          </div>
        
        <div class="note" v-html="$t('token_2.note')"></div>
      <div class="token__container-with-logo token__container-with-logo--token2">
          <div class="token__logo-cont token__logo-cont--token2">
            <p>Всего было выпущено Bitbon:</p>
            <div class="token__1mln">100,000,000</div>
          </div>
          <div class="token__chapter token__chapter--token2" v-html="$t('token_2.chapter_1.text')"></div>
      </div> 
      <div href="#" class="slide__navigation token2__navigation-link" v-html="`/${$t('token_2.chapter_1.comment')}/`"></div>
      </div>
      
      </main>
    </article>
  </Blok>
</template> 

<script>
export default {
  
}
</script>

<style lang="scss">


  @media (max-width: 1023px){
  .point__note-cont{
    padding-bottom: 20px;
  }
  }


  .token2__navigation-link{
    text-align: right;
    margin-bottom: 30px;
  }

  .token__logo-cont--token2{
    flex-direction: column; 
    flex: 0 0 39%;
    padding-right: 3%;
  }

  .token__1mln{
    font-size: 2.35em;
    font-weight: 700;
    color: #4195e1;
  }


  .token__chapter--token2{
    padding-left: 3%;
    max-width: 55%;
    flex: 0 0 55%;
  }

  .token__container--token2-position{
        margin-top: Min(64px, 6%);
  }

  .token__points--token2-position{
    margin-top: 0;
    margin-bottom: 8%; 
  }
  .token__container-with-logo--token2{
    margin-top: 8%;
  }

  
  @media (max-width: 875px) {
    .token__container-with-logo--token2{
      flex-wrap: wrap;
    }
    .token__logo-cont--token2{
    margin-top: 3.5%;  
    flex: 0 0 100%;
    padding-right: 0%;
    align-items: center;
    }
    .token__chapter--token2{
    margin-top: 2%;  
    padding-left: 4%;
    max-width: 100%;
    flex: 0 0 100%;
  }
  .token2__navigation-link{
    margin-left: 4%;
    text-align: left;
  }
  }
</style>


<i18n locale="ru" src="~/assets/lang/token2/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/token2/en.json"></i18n>