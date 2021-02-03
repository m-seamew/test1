<template>
  <client-only>
  <flickity ref="flickity" :options="flickityOptions" class="potential__logos-container">
          <div class="potential__logo-container potential__logo-container--microsoft">
            <img class="img__logo-flickity" src="~assets/img/potential/microsoft.png" alt="Microsoft logo">
          </div>
          <div class="potential__logo-container potential__logo-container--hp">
            <img class="img__logo-flickity" src="~assets/img/potential/hp.png" alt="HP logo">
          </div>
          <div class="potential__logo-container potential__logo-container--sap">
            <img class="img__logo-flickity" src="~assets/img/potential/sap.png" alt="Sap logo">
          </div>
          <div class="potential__logo-container potential__logo-container--oracle">
            <img class="img__logo-flickity" src="~assets/img/potential/oracle.png" alt="Oracle logo">
          </div>
          <div class="potential__logo-container potential__logo-container--amazon">
            <img class="img__logo-flickity" src="~assets/img/potential/amazon.png" alt="Amazon logo">
          </div>
          <div class="potential__logo-container potential__logo-container--ibm">
            <img class="img__logo-flickity" src="~assets/img/potential/ibm.png" alt="Amazon logo">
          </div>
          <div class="potential__logo-container potential__logo-container--huawei">
            <img class="img__logo-flickity" src="~assets/img/potential/huawei.png" alt="Amazon logo">
          </div>
          <div class="potential__logo-container potential__logo-container--blockfolio">
            <img class="img__logo-flickity" src="~assets/img/potential/blockstream.png" alt="Amazon logo">
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
        autoPlay: 1500,
        wrapAround: true
      }
  }),
  components: {
    //Flickity
  }
}
</script>

<style lang="scss">
  .potential__logo-container{
    width: 25%;
    flex: 0 0 25%;
    //height: 6.9em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 5%;
    margin-right: 5%;
  }

  .flickity-slider{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .img__logo-flickity{
    object-fit: contain;
    height: 100%;
  }


   .potential__logo-container--microsoft{
    height: 3.8em;
  }

  .potential__logo-container--hp{
    height: 4.14em;
  }

  .potential__logo-container--oracle{
    height: 4em;
  }

  .potential__logo-container--sap{
    height: 2em;
  }

  .potential__logo-container--amazon{
    height: 1.78em;
  }

  .potential__logo-container--ibm{
    height: 1.48em;
  }

  .potential__logo-container--huawei{
    height: 2.9em;
  }

  .potential__logo-container--blockfolio{
    height: 4.14em;
  }
</style>