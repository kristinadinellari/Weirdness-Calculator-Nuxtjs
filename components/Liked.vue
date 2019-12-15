<template>
  <div class="liked-GIFs-component common-section">
    <h4 class="title">Your Liked Gifs</h4>
    <div class="GIF-section">
      <div class="GIF-holder" v-for="(gif, index) in likedGIFs" :key="index">
        <h4 v-if="gif && gif.title">{{gif.title}}</h4>
        <h4 v-else>GIF</h4>
        <div class="GIF-action" v-if="gif && gif.images && gif.images.original && gif.images.original.url">
          <div class="unlike-gif">
            <div class="circle" @click="unLike(gif)">
              <p>x</p>
            </div>
          </div>
          <img class="gif-img" v-lazy="gif.images.original.url">
        </div>
      <img v-else src="../static/svg/no-img.svg">
    </div>
    </div>
    <slot v-if="likedGIFs && likedGIFs.length > 0"/>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'likedGIFs'
      ])
    },
    methods: {
      ...mapMutations([
        'setLikeAction'
      ]),
      unLike (gif) {
        this.setLikeAction({gif: gif, action: true})
      }
    }
  }
</script>
