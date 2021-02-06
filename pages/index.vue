<template>
  <div class="container">
    <Preloader></Preloader>
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

import Preloader from '~/components/loading'

export default {
  data: () => ({
    lang: 'ru',
    test: false,
  }),
  components: {
    Infrastructure2,
    TableBlok,
    Mainaboutsystem,
    Preloader,
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
      this.$store.dispatch('preloading/changeLoading');
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
