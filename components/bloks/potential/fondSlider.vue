<template>
  <client-only>
    <flickity ref="flickity" :options="flickityOptions" class="potential__logos-container--fond">
      
        <div class="potential__logo-item--fond" v-for="(el, index) in data" :key="index">
            <div class="potential__logo-container--fond">
                <img :src='require(`~/assets/img/${el.img}`)' alt="logo fond" class="img--full">
            </div>
            <div class="potential__logo-fond-comment" v-html="el.text"></div>
        </div>
    </flickity>
  </client-only>
</template>

<script>

export default {
  data: () => ({
    flickityOptions: {
        freeScroll: false,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 2500,
        wrapAround: true
      }
  }),
  components: {
    //Flickity
  },
  props:{
    data: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
   @import '~/assets/scss/variables';


  .potential__logo-container--fond{
    width: 100%;
    height: 1.6em;
  }


  .potential__logo-item--fond{
    width: 100%;
    flex: 0 0 50%;
    min-width: 150px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    margin-top: Max(15px, 4%);
    padding-left: 25%;
    padding-right: 25%;
    padding-bottom: 10px;
  }

  .potential__logos-container--fond{
    display: block;
  }

  .potential__logo-fond-comment{
    margin-top: Min(10px, 2%);
    color: $fontHeader;
    text-align: center;
    font-size: 0.9em;
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

</style>