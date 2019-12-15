<template>
  <div class="calc-component">
    <button>
      Calculate my wierdness score
    </button>
    <div class="message-display" v-html="toLike"></div>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'likedGIFs'
      ]),
      toLike () {
        if (this.likedGIFs && this.likedGIFs.length > 0 && this.likedGIFs.length < 5) {
          return `You must <i>Like</i> ${5 - this.likedGIFs.length} more GIF to calculate your score`
        }
      }
    }
  }
</script>
