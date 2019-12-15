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
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  import searchService from '@/service/index'

  export default {
    data () {
      return {
        name: '',
        content: []
      }
    },
    methods: {
      ...mapMutations([
        'setGIFs'
      ]),

      async getGifs () {
        const res = await searchService.get(this.name)
        if (res.data && res.data.data) {
          this.content = res.data.data
          this.setGIFs(this.content)
        }
      }
    }
  }
</script>
