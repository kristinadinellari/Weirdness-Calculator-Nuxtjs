<template>
  <div class="search-component">
    <slot/>
    <section class="common-section">
      <span>Search term</span>
      <div class="search-holder">
        <input v-model="name" ref="searchInput" type="text">
        <button @click="getGifs">Search</button>
      </div>
    </section>
  </div>
</template>
<script>
  import { mapMutations, mapGetters } from 'vuex'
  import searchService from '@/service/index'

  export default {
    data () {
      return {
        name: '',
        content: []
      }
    },
    computed: {
      ...mapGetters([
        'likeAction'
      ])
    },
    watch: {
      likeAction () {
        if (this.likeAction) {
          this.name = '';
          this.$refs.searchInput.focus();
        }
      }
    },
    methods: {
      ...mapMutations([
        'setGIFs',
        'setSearchName',
        'setAction'
      ]),

      async getGifs () {
        this.setAction(false);
        const res = await searchService.get(this.name);
        if (res.data && res.data.data) {
          this.content = res.data.data.map((gif) => {
            return {
              ...gif,
              searchName: this.name
            }
          });
          this.setGIFs(this.content)
        }
      }
    }
  }
</script>
