import vueLottie from 'vue-lottie-ssr/src/components/vue-lottie.vue';
import Vue from 'vue';
Vue.use(vueLottie);
Vue.component('vueLottie', vueLottie); 

const Base = Vue.options.components['vueLottie'];
const CustomLottie = Base.extend({
  methods: {
    reverseAnim(params){
      this.animation.setDirection(params);
    },
    goFrameAndPlay(value, isFrame){
      this.animation.goToAndPlay(value, isFrame)
    }
  }
})

Vue.component('CustomVueLottie', CustomLottie); 