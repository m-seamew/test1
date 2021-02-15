import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload,{
    preLoad: 1.3,
    observer: true,

    observerOptions: {
    rootMargin: '500px',
    threshold: 0.1
    }
});