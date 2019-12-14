<template>
  <div class="search-component">
    <slot/>
    <section class="common-section">
      <span>Search term</span>
      <div class="search-holder">
        <input v-model="name" type="text">
        <button @click="getGifs">Search</button>
      </div>
    </section>
    <div class="video" v-for="(video, index) in content" :key="`${content.title}-video-${index}`">
      <img :src="video.images.original.url">
      <h4>{{content.title}}</h4>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex'
  import searchService from '@/service/index'

  export default {
    data () {
      return {
        name: '',
        content: []
      }
    },
    methods: {
      async getGifs () {
        const res = await searchService.get(this.name)
        this.content = res.data.data
        console.log(res, 'res')
      }
    }
  }
</script>
<style lang="scss">
  .video{
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }
</style>
