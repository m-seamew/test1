<template>
  <div class="burger" :class="active? 'burger__active' : null">
    <div class="burger__container">
        <div @click="$emit('closeBurger')">Закрыть</div>

        <ul class="burger__menu">
          <li class="burger__list-item" v-for="(el, index) in tablePoint($t('burger.points'))" :key="index">
            <a href="#" v-scroll-to="`#${el.hash}`" class="burger__list-link" @click="$emit('closeBurger')">{{el.name}}</a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
const VueScrollTo = require('vue-scrollto');
export default {
  props:{
    active:{
      type: Boolean,
      required: true,
    }
  },
  methods:{
    tablePoint(objData){
      const data = [];
      for(let i = 0; i < Object.keys(objData).length; i++){
        data.push(objData[i]);
      }
      return data;
    },
  }
}
</script>

<style lang="scss">
  
  .burger{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -999;
    opacity: 0;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(6px);
    color: white;
    overflow-y: auto;
    transition: opacity .5s, z-index 0s .5s;
  }

  .burger__active{
    z-index: 999;
    opacity: 1;
    pointer-events: auto;
    transition: opacity .5s
  }

  .burger__container{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .burger__list-link, .burger__list-link:visited{
    color: white;
    text-decoration: none;
  }
</style>