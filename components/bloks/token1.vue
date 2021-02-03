<template>
  <Blok :slide_id="6" :title="$t('token_1.title')" :subtitle="$t('token_1.subtitle')" :footer_show="false">
    <client-only>
        <img class="bg-icon token__bg-icon" src="~assets/img/token1/bgicon.svg" alt="Bitbon logo">
    </client-only>
    <div class="main__container token__main-container">
      <div class="token__container-with-logo">
          <div class="token__logo-cont">
            <img src="~assets/img/token1/logotoken.png" alt="Bitbon Token" class="img">
          </div>
          <div class="div token__chapter" v-html="$t('token_1.chapter_1.text')"></div>
      </div> 
        <div class="token__points">
        <div class="token__point">
          <div class="token__point-header">
            <div class="point-header__cont">
              <img src="~assets/img/token1/key.png" alt="Key" class="img">
              <div class="point-header__icon">
                  <div class="round round--1">1</div>
              </div>
            </div>
            <h3 class="token__point-title">{{$t('token_1.point_1.title')}}</h3>
          </div>
          <div class="token__point-text">
              {{$t('token_1.point_1.text')}}
          </div>
        </div>
        <div class="token__point">
          <div class="token__point-header">
            <div class="point-header__cont">
              <img src="~assets/img/token1/diamond.png" alt="Key" class="img">
              <div class="point-header__icon">
                  <div class="round">2</div>
              </div>
            </div>
            <h3 class="token__point-title">{{$t('token_1.point_2.title')}}</h3>
          </div>
          <div class="token__point-text">
              {{$t('token_1.point_2.text')}}
              <a href="#" class="slide__navigation" v-html="`/${$t('token_1.point_2.comment')}/`"></a>
          </div>
        </div>
      </div>
      <div class="point__note-cont">
        <div class="note">
          {{$t('token_1.note')}}
      </div>
      </div>
    </div>  
  </Blok>
</template> 

<script>
export default {
  
}
</script>

<style lang="scss">

  .point-header__cont{
    min-width: Max(30px, 5%);
    max-width: Max(30px, 5%);
    position: relative;
    margin-left: Max(9px, 0.55em);
    }

  .point-header__icon{
    position: absolute;
    top: 0;
    left: 0;
    width: Max(18px, 1.1em);
    height: Max(18px, 1.1em);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: Max(11px, 0.75em);
    color: white;
    border-radius: 50%;
    font-weight: 700;
    opacity: 0.7;
    background-color: #4195e1;
    transform: translate(-50%, -50%);
  }

  .token__main-container{
    margin-top: Min(82px, 8.5%);
  }
  .token__point-text{
    margin-top: 2.5%;
  }

  .round--1{
    margin-left: -1px;
  }
  .token__container-with-logo{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .token__logo-cont{
    flex: 0 0 26%;
    display: flex;
    position: relative;
    padding-right: 7%;
  }

  .token__chapter{
    padding-left: 7%;
    position: relative;
  }
  .token__chapter::before{
  content:'';
  width: 1px;
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: 0;
  background-color: #cbcbcb;
}

.token__point-header{
  display: flex;
  align-items: center;
}

.token__point-title{
  font-size: 1.1em;
  text-transform: uppercase;
  font-weight: 700;
  margin-left: Max(15px, 2%);
}

.token__point{
  flex: 0 0 47%
}

.token__points{
  display: flex;
  justify-content: space-between;
  margin-top: 11%;
  margin-bottom: 6%;
  justify-content: space-between;
}

.token__container-with-logo{
  margin-top: 3%;
}

.token__bg-icon{
  width: 23%;
  top: -2%;
  right: 4.3%;
}

  @media (max-width: 1023px){
  .point__note-cont{
    padding-bottom: 20px;
  }
  }

  @media (max-width: 730px) {
    .token__point{
      min-width: 250px;
      flex: 1 1 100%;
    }
    .token__point:not(:last-child){
      margin-bottom: Max(30px, 3%);
    }
    .token__points{
      flex-wrap: wrap;
    }
  }

  .point__note-cont{
        margin-bottom: 30px;
  }
</style>


<i18n locale="ru" src="~/assets/lang/token1/ru.json"></i18n>
<i18n locale="en" src="~/assets/lang/token1/en.json"></i18n>