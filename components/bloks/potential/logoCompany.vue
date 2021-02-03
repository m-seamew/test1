<template>
  <div class="potential__logos-container--pc"> 
    <div class="potential__logo-item">
      <div class="potential__logo-container--pc potential__logo-container--microsoft">
        <img class="img__logo-flickity" src="~assets/img/potential/microsoft.png" alt="Microsoft logo">
      </div>
    </div>
    <div class="potential__logo-item">
      <div class="potential__logo-container--pc potential__logo-container--hp">
        <img class="img__logo-flickity" src="~assets/img/potential/hp.png" alt="HP logo">
      </div>
    </div>
    <div class="potential__logo-item">
      <div class="potential__logo-container--pc potential__logo-container--sap">
        <img class="img__logo-flickity" src="~assets/img/potential/sap.png" alt="Sap logo">
      </div>
    </div>
    <div class="potential__logo-item">
      <div class="potential__logo-container--pc potential__logo-container--oracle">
            <img class="img__logo-flickity" src="~assets/img/potential/oracle.png" alt="Oracle logo">
        </div>
        </div>
        <div class="potential__logo-item">
        <div class="potential__logo-container--pc potential__logo-container--amazon">
            <img class="img__logo-flickity" src="~assets/img/potential/amazon.png" alt="Amazon logo">
        </div>
        </div>
        <div class="potential__logo-item">
        <div class="potential__logo-container--pc potential__logo-container--ibm">
            <img class="img__logo-flickity" src="~assets/img/potential/ibm.png" alt="Amazon logo">
        </div>
        </div>
        <div class="potential__logo-item">
        <div class="potential__logo-container--pc potential__logo-container--huawei">
            <img class="img__logo-flickity" src="~assets/img/potential/huawei.png" alt="Amazon logo">
        </div>
        </div>
        <div class="potential__logo-item">
        <div class="potential__logo-container--pc potential__logo-container--blockfolio">
            <img class="img__logo-flickity" src="~assets/img/potential/blockstream.png" alt="Amazon logo">
        </div>
        </div>
      </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" >

   .potential__logos-container--pc{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .potential__logo-item{
    width: 25%;
    flex: 0 0 25%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: Max(10px, 2%);
  }

  .potential__logo-container--pc{
    display: flex;
    align-items: center;
    justify-content: center;
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