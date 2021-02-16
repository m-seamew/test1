<template>
  <div class="burger" :class="active? 'burger__active' : null">
    <div class="burger__container">
        <div @click="$emit('closeBurger')">Закрыть</div>

        <ul class="burger__menu">
          <li class="burger__list-item" v-for="(el, index) in checkElementIfIs(tablePoint($t('burger.firstpitch.points')))" :key="index">
            <a href="#"
              v-scroll-to="{
                el:`#${el.hash}`,
                onDone: menuFixFinish,
                offset: -50,
                duration: 500,
                cancelable: false,
              }" class="burger__list-link">{{el.name}}</a>
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
    menuFixFinish(){
        setTimeout(()=>{ this.$emit('bottomMenuFix', false)}, 0)
        this.$emit('closeBurger');
    },
    checkElementIfIs(arr){
      if(process.browser){
      const res = [];
      arr.forEach(el=>{
        document.querySelector(`#${el.hash}`) !== null ? res.push(el) : null;
      })
      return res;
      }
    }
  },
  watch:{
    active: (val)=>{
      val === true
        ? document.querySelector('body').style.overflow = "hidden"
        : document.querySelector('body').style.overflow = "auto";
    }
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
    z-index: 1000;
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