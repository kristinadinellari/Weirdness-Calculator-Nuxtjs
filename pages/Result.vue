<template>
  <div class="result-page common-section">
    <div class="title">
      {{titlePage}}
    </div>
    <div class="GIF-section">
      <div class="GIF-holder" v-for="(gif, index) in likedGIFs" :key="index">
        <h4 v-if="gif.title">{{gif.title}}</h4>
        <h4 v-else>Gif Title</h4>
        <img class="gif" v-if="gif && gif.images && gif.images.original && gif.images.original.url" v-lazy="gif.images.original.url">
        <img class="gif" v-else src="../static/svg/no-img.svg">
        <div class="result">
          <!-- because the limit that we get Gifs for one term is 10 -->
          {{gif.weirdness}}/10
        </div>
      </div>
    </div>
    <button class="action-button" @click="startOver">Start Over</button>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'likedGIFs'
      ]),
      calcAverage  () {
        const average =  this.likedGIFs.reduce((a,b) => a + b.weirdness, 0) / this.likedGIFs.length
        return Math.round(average)
      },
      titlePage () {
        return `You scored an ${this.calcAverage} out of 10 on the weirdness scale!`
      }
    },
    methods: {
      ...mapMutations([
        'setGIFs',
        'setLikeAction'
      ]),
      startOver () {
        this.$router.push({
          path: '/'
        })
        this.setGIFs([])
        this.setLikeAction({gif: 'close', action: false})
      }
    }
  }
</script>
<style lang="scss">
  .result-page {
    width: 100%;
    .GIF-section {
      /*align-items: flex-end;*/
    }
    .GIF-holder {
      width: 18%;
      justify-content: space-between;
      img {
        width: 100%;
      }
    }
    .title {
      width: 100%;
      text-align: center;
    }
  }

</style>
