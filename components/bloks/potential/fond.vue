<template>
   <div class="potential__logos-container--fond"> 
             <div class="potential__logo-item--fond" v-for="(el, index) in data" :key="index">
               <div class="potential__logo-container--fond">
                  <img :src='require(`~/assets/img/${el.img}`)' alt="logo fond" class="img--full">
               </div>
               <div class="potential__logo-fond-comment" v-html="el.text">
               </div>
           </div>
   </div>
</template>

<style lang="scss">

</style>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    }
  }
}
</script>