<template>
  <div class="container">
    <TableBlok ></TableBlok>
    <Mainaboutsystem  ></Mainaboutsystem>
    <Infrastructure2></Infrastructure2>
  </div>
</template>

<script>
import Block from '~/components/Blok';
import Infrastructure2 from '~/components/bloks/infrastructure2';
import TableBlok from '~/components/bloks/tablecomp';
import Mainaboutsystem from '~/components/bloks/mainaboutsystem';

export default {
  data: () => ({
    lang: 'ru',
    test: false,
  }),
  components: {
    Infrastructure2,
    TableBlok,
    Mainaboutsystem,
  },
  methods: {
    changeLanguage(lang){
      this.lang = lang;
    }
  },
  computed: {
   
  },
  mounted(){
      this.$nextTick(function () {
      this.$nuxt.$emit('finishLoading');
    })
  },
  scrollToTop: false,
}

</script>

<style>

</style>

<i18n>
{
  "en": {
    "hello": "hello world!"
  },
  "ru": {
    "hello": "こんにちは、世界!"
  }
}
</i18n>
