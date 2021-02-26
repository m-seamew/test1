<template>
  <div id="planet__svg" class="planet-svg__container" :class="isFocus">
    <div class="counter-wrapper">
      <div class="counter" data-max="542" data-used="542">
        <svg
          id="circle"
          class="circle"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
        >
          <circle
            fill="none"
            stroke="#b9d5f5"
            cx="50"
            cy="50"
            r="48"
            stroke-width="3"
          />
          <circle
            class="circle-line"
            fill="none"
            stroke="#3e7de1"
            cx="50"
            cy="50"
            r="48"
            stroke-width="3"
          />
        </svg>
        <div class="inner-circle"></div>
        <div class="number-wrapper">
          <span>$</span>
          <div class="number">0</div>
          <div class="number-exp">трлн</div>
        </div>
        <div class="orbita">
          <div class="orbita__inner">
            <img :src="require('~/assets/img/svg_anim/planet.png')" alt="planet" />
          </div>
        </div>
      </div>
      <div class="counter counter_brown" data-max="7.7" data-used="7.7">
        <svg
          id="circle"
          class="circle"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
        >
          <circle
            fill="none"
            stroke="#dcd0b0"
            cx="50"
            cy="50"
            r="48"
            stroke-width="4"
          />
          <circle
            class="circle-line"
            fill="none"
            stroke="#d1a23b"
            cx="50"
            cy="50"
            r="48"
            stroke-width="4"
          />
        </svg>
        <div class="inner-circle"></div>
        <div class="number-wrapper">
          <span>$</span>
          <div class="number">0</div>
          <div class="number-exp">трлн</div>
        </div>
        <div class="orbita">
          <div class="orbita__inner">
            <img :src="require('~/assets/img/svg_anim/ring_monet.png')" alt="ring" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    focus:{
      type: Boolean,
      required: false,
      default: false,
    }
  },
  methods:{
    animation(){
      const el = document.querySelector('#chart__svg');
      el !== null ? el.classList.add('active'): null
    },
    isInt: (n)=> n % 1 === 0,
    animationStart(){
      const counters = document.querySelectorAll(".counter");
      
      counters.forEach(counter => {
        const max = +counter.getAttribute("data-max");
        const used = +counter.getAttribute("data-used");
        const is = this.isInt(used);
        const inPercent = (used / max) * 100;
        const rotate = Math.round(3.6 * inPercent);

        const CounterInterval = 1500 / Math.round(inPercent);
        let percentDisplayed = 0;
        const numberObject = counter.querySelector(".number");
        const circle = counter.querySelector(".circle-line");
        const circleLength = circle.getTotalLength();
        const circleDashLength = circleLength - (circleLength / 100) * inPercent;
  
        setTimeout(_=> {
          counter.querySelector(".orbita").style.transform ="translate(-50%, 0) rotate(" + rotate + "deg)";
          circle.setAttribute("style", "stroke-dashoffset:" + circleDashLength + ";");

          const number = setInterval(_=> {
            const innerHTML = ((percentDisplayed / 100) * max).toFixed(is ? 0 : 1);
            numberObject.innerHTML = Number.isNaN(+innerHTML) ? 0 : innerHTML;
            percentDisplayed += 1;

            if (percentDisplayed >= inPercent) {
              clearInterval(number);
              numberObject.innerHTML = used;
            }
         }, CounterInterval);
        }, 200);
      });
    }
  },
  computed:{
    isFocus(){
      return this.focus ? 'active' : null;
    }
  },
  mounted(){
    this.animationStart();
  }
}
</script>
<style lang="scss" scoped>


.planet-svg__container{
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  max-height: 300px;
  //margin-top: 200px;
  width: inherit;
  font-size: 16px !important;
}


.counter-wrapper {
  position: relative;
} 

.counter {
  display: block;
  width: 300px;
  height: 300px;
  position: relative;
  color: #3e7de1;
}

.counter.counter_brown {
  width: 106px;
  height: 106px;
  position: absolute;
  top: 22.5%;
  left: 50%;
  transform: translateX(-50%);
  color: #d1a23b;
}
.counter.counter_brown .orbita__inner {
  width: 2.5em;
  height: 2.5em;
  border-width: 0.2em;
  border-color: #d1a23b;
}
.counter.counter_brown .number-wrapper {
  font-size: 18px !important;
  line-height: 1;
  top: 50%;
}
.counter.counter_brown .inner-circle {
  border-color: #dcd0b0;
}
.counter.counter_brown .inner-circle {
  opacity: 0.3;
}
.counter.counter_brown .number-exp {
  font-size: 12px !important;
}

.circle-line {
  transform-origin: center;
  transform: rotate(-90deg);
  transition: all 1.5s ease-in-out;
  stroke-dasharray: 301.10565185546875;
  stroke-dashoffset: 301.10565185546875;
}

.orbita {
  position: absolute;
  width: 0;
  height: 50%;
  left: 50%;
  bottom: 50%;
  transform-origin: bottom center;
  transform: translate(-50%, 0) rotate(10deg);
  transition: all ease-in-out 1.5s;
}

.orbita__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4em;
  height: 4em;
  position: absolute;
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);
  border-radius: 50%;
  border: 0.4em solid #3e7de1;
  background-color: #fff;
}

.orbita__inner img {
  width: 80%;
  height: 80%;
  transform-origin: center;
}

#planet__svg.active .orbita__inner img{
  animation: planet_anim 5s linear infinite;
}

@keyframes planet_anim {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.number-wrapper {
  position: absolute;
  top: 74%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 35px !important;
  font-weight: bold;
  color: inherit;
  line-height: 27px;
  text-align: center;
}
.number {
  display: inline-block;
  margin-left: -5px;
}
.number-exp {
  font-size: 21px !important;
}

.inner-circle,
.inner-circle::before,
.inner-circle::after {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.inner-circle {
  position: absolute;
  width: 85%;
  height: 85%;
  border-radius: 50%;
  border: 2.5px solid rgba(185, 213, 245, 0.5);
}

.inner-circle::before {
  content: "";
  position: absolute;
  width: 84%;
  height: 84%;
  border: inherit;
  opacity: 0.8;
  top: 47%;
}

.inner-circle::after {
  content: "";
  position: absolute;
  width: 65%;
  height: 65%;
  border: inherit;
  opacity: 0.5;
  top: 43%;
}

</style>