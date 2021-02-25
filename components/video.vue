<template>
  <client-only>
    <div class="player__container">
      <vue-plyr :options="options">
          <video
            controls
            crossorigin
            playsinline
            :data-poster="require(`~/assets/img/${poster}`)"
          >
          <source v-for="(el, index) in source" :key="index"
            :size="el.size"
            src="https://www.youtube.com/watch?v=LO_VEv1wFio&ab_channel=Columnsl"
            :type="el.type"  
          /> 
        </video>
        </vue-plyr>   
    </div>
  </client-only>
</template>

<script>
export default {
  props:{
    options:{
      type: Object,
      required: true,
    },
    source:{
      type: Array,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss">
  .player__container{
    width: 90%;
  }
</style>