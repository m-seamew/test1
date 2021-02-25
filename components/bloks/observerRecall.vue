<template>
  <div class="observer"></div>
</template>

<script>
export default {
  data: () => ({
    observer: null
  }),
  mounted() {
    const options = {
    rootMargin: "0px",
    threshold: [0.25, 0.5, 0.75, 1]
    };

    
    this.observer = new IntersectionObserver( entries => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
          this.$emit("firstobserve");
          this.observer.unobserve(this.$el);
          this.observerRecall.observe(this.$el);
      }
    }, options);


    this.observerNext = new IntersectionObserver( entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.2) {  
          this.$emit("nextobserve");
          this.observerNext.unobserve(this.$el); 
          this.observerRecall.observe(this.$el);
        }
      })    
    }, options);

    this.observerRecall = new IntersectionObserver( entries => {
      entries.forEach(entry => {
        if (!entry.intersectionRatio) {  
        this.$emit("animationstop");
        this.observerRecall.disconnect();
        this.observerNext.observe(this.$el);
        }
      })
    }, {threshold: [0]});
    
    this.observer.observe(this.$el);
  },
   destroyed() {
    this.observer.disconnect();
    this.observerNext.disconnect();
    this.observerRecall.disconnect();
  }
}
</script>

<style lang="scss" >
  .observer{
    position: absolute;
    top:0;
    bottom: 0;
    left:0;
    right: 0;
    pointer-events: none;
  }
</style>
