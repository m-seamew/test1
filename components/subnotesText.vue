<template>
  <div class="subnotes" :class="[end ? 'subnotes--end' : null]">
    <div class="subnotes__img-container subnotes-text__img-container">
      <img src="~assets/img/subnotes/news.png" alt="news" class="img img--inherit">
    </div>
    <div class="subnotes__text" :style="{maxWidth: MaxWidth + '%'}" v-html="text"></div>
  </div>
</template>

<script>
export default {
  props:{
    text:{
      type: String,
      required: true,
    },
    link:{
      type: String,
      required: false,
      default: './'
    },
    MaxWidth:{
      type: Number,
      required: false,
      default: 50,
    },
    end:{
      type: Boolean,
      required: false,
      default: true,
    }
  }
}
</script>

<style lang="scss">
  .img--inherit{
    width: inherit;
  }

  .subnotes-text__img-container{
    width: Max(30px, 5%);
    margin-right: max(35px, 6.9%);
  }
</style>