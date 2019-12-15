<template>
  <div class="calc-component">
    <button class="action-button" :disabled="buttonStatus" :class="buttonStatus ? 'disableButton' : ''" @click="redirect">
      Calculate my weirdness score
    </button>
    <div class="message-display" v-html="toLike"></div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'likedGIFs'
      ]),
      toLike () {
        if (this.likedGIFs && this.likedGIFs.length > 0 && this.likedGIFs.length < 5) {
          return `You must <i>Like</i> ${5 - this.likedGIFs.length} more GIF to calculate your score`
        }
      },
      buttonStatus () {
        return this.likedGIFs.length < 5
      }
    },

    methods: {
      redirect () {
        this.$router.push({
          name: 'Result'
        })
      }
    }
  }
</script>
<style lang="scss">
  .disableButton {
    opacity: .3;
  }
</style>
