<template>
  <div class="result-component common-section">
    <h4 class="title">Your Result</h4>
    <div class="gif-section common-section">
      <h4 v-if="gif && gif.title">{{gif.title}}</h4>
      <h4 v-else>GIF</h4>
      <img class="gif" v-if="gif && gif.images && gif.images.original && gif.images.original.url" v-lazy="gif.images.original.url">
      <img class="gif" v-else src="../static/svg/no-img.svg">
      <button class="like-button" @click="like(gif)">
        <img src="../static/svg/like.svg" alt="">
      </button>
      <input class="range" type="range" @change="change(index)" v-model="index" min="0" step="1" :max="maxRange">
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default  {
    data () {
      return {
        index: 0
      }
    },
    computed: {
      ...mapGetters([
        'GIFs'
      ]),
      gif () {
        return this.GIFs[this.index]
      },
      maxRange () {
        return this.GIFs.length
      }
    },
    methods: {
      ...mapMutations([
        'setLikedGIF',
        'setGIFs'
      ]),
      change(i) {
        this.index = i;
      },
      like (gifObj) {
        this.setLikedGIF({gif: gifObj, action: true})
        this.setGIFs([])
      }
    }
  }
</script>
