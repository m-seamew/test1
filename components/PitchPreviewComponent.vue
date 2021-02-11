<template>
  <section class="preview">
    <NuxtLink :to="data.link">
    <div class="preview__img-container">
      <img :src="require(`~/assets/img/pitchpreview/${data.img}`)" alt="preview" class="img">
    </div>
    <client-only>
    <div class="preview__text">
        <div class="preview__text-container">
          <h3 class="preview__content-header">
            {{data.title}}
          </h3>
          <p class="preview__content-text">
            {{data.content}}
          </p>
          <div class="preview__stat">
            <div class="preview__stat-item">
              <div class="preview__stat-icon">
                <img src="" alt="" class="img--height">
              </div>
              <p class="preview__stat-text">0</p>
            </div>
            <div class="preview__stat-item">
              <div class="preview__stat-icon">
                <img src="" alt="" class="img--height">
              </div>
              <p class="preview__stat-text">0</p>
            </div>
          </div>
        </div>     
    </div>  
    </client-only>
    <div class="preview__text--absolute" :style="{color:data.color.text, backgroundImage: data.gradient}">
        <div class="preview__text-container">
          <h3 class="preview__content-header" :style="{color:data.color.header}">
            {{data.title}}
          </h3>
          <p class="preview__content-text">
            {{data.content}}
          </p>
          <div class="preview__stat" v-if="data.indeveloping == 'false'">
            <div class="preview__stat-item">
              <div class="preview__stat-icon">
                <img src="" alt="" class="img--height">
              </div>
              <p class="preview__stat-text" :style="{color:data.color.stat}">{{stat[0]}}</p>
            </div>
            <div class="preview__stat-item">
              <div class="preview__stat-icon">
                <img src="" alt="" class="img--height">
              </div>
              <p class="preview__stat-text" :style="{color:data.color.stat}">{{stat[1]}}</p>
            </div>
          </div>
        </div>   
    </div>
    </NuxtLink>
  </section>
</template>

<script>
export default {
  data: ()=>({
    like: 0,
    look: 0,
  }),
  props:{
    data: {
      type: Object,
      required: true,
    }
  },
  computed:{
    stat(){
      const stat = this.$store.getters['stat/getStat'];
      const statPrev = [];
      statPrev.push(
        stat[this.data.id + 'Like'] !== undefined ? stat[this.data.id + 'Like'] : 0,
        stat[this.data.id + 'Look'] !== undefined ? stat[this.data.id + 'Look'] : 0
      );    
      return statPrev;
    }
  }
}
</script>

<style lang="scss">
  .preview{
    height: fit-content;
    background-color: darkgray;
    border-radius: 6px;
    position: relative;
    transition: transform .5s;
    transition-delay: .3s;
  }

  .preview:not(:last-child){
    margin-bottom: 30px;
  }

  .preview::before{
    content: '';
    position: absolute;
    top: 50%;
    bottom: 0;
    left: 4%;
    right: 4%;
    box-shadow: 0 3px 20px 0 #000000;
    z-index: 0;
    border-radius: 10px;
  }

  .preview:hover{
    transform: scale(1.05);
    transition: transform .5s;
    transition-delay: .3s;
  }

  .preview__text{
    margin-top: -20%;
    opacity: 0;
    pointer-events: none;
  }

  .preview__text--absolute > .preview__text-container{
    padding-top: 10%;
  }

  .preview__text-container{
    padding: 0 6%;
    line-height: 1.23;
  }

  .preview__text--absolute{
    position: absolute;
    bottom: 0%;
    z-index: 2;
    color: white;
   // backdrop-filter: blur(15px) opacity(0.5);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .preview__content-text{
    font-size: .5em !important;
    margin-top: 10px;
    padding-bottom: 15px;
  }

  .preview__content-header{
    font-weight: 700;
    color: white;
    line-height: 1.14;
    font-size: 0.8em !important;
  }

  .preview__img-container{
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
  }

  .preview__stat{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
  }
  .preview__stat-item{
    display: flex;
    align-items: center;
  }

  .preview__stat-text{
    font-size: 0.5em !important;
    color: rgba(255,255,255, 0.5);
  }

  .preview__stat-icon{
    height: 16px;
  }

  @media (max-width: 1250px) {
    .preview__stat-text{
      font-size: 1em !important;
    }

    .preview__content-text{
    font-size: 1em !important;
    }

   .preview__content-header{
    font-weight: 700;
    color: white;
    line-height: 1.14;
    font-size: 1.55em !important;
   }

  }
</style>