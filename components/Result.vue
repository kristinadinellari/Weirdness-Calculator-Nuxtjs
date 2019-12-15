<template>
  <div class="result-component">
    <!--<div class="video" v-for="(gif, index) in GIFs" :key="`${gif.title}-gif-${index}`">-->
    <div class="video">
      <img v-lazy="GIFs[i].images.original.url">
      <h4>{{GIFs[i].title}} {{i}}</h4>
    </div>
    <input type="range" @change="test(i)" v-model="i" min="0" max="10">
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default  {
    data () {
      return {
        i: 0
      }
    },
    computed: {
      ...mapGetters([
        'GIFs'
      ])
    },
    methods: {
      test(i) {
        console.log(i, 't')
      }
    }
  }
</script>
