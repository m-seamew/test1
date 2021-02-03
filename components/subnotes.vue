<template>
  <div class="subnotes" :class="[end ? 'subnotes--end' : null]">
    <div class="subnotes__img-container">
      <img src="~assets/img/subnotes/news.png" alt="news" class="img">
    </div>
    <div class="subnotes__text" :style="{maxWidth: MaxWidth + '%'}">
      {{text}} <span v-html="$t('subnotes.link_text')"></span>
    </div>
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
   @import '~/assets/scss/variables';
   
  .subnotes{
    display: flex;
    line-height: 1.21;
    font-size: $notesFontSize;
  }

  .subnotes__img-container{
    width: Max(30px, 5%);
    margin-right: Max(15px, 1.9%);
  }

  .subnotes--end{
    justify-content: flex-end;
  }

  .subnotes__text{
    margin-top: Max(5px, 1.2%);
    margin-bottom: 25px;
  }
</style>