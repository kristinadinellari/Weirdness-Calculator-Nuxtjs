<template>
  <div class="search-component">
    <slot/>
    <section class="common-section">
      <span>Search term</span>
      <div class="search-holder">
        <input v-model="name" ref="searchInput" type="text">
        <button @click="check">Search</button>
      </div>
      <span class="error-message" v-if="showMessage">
        {{messageText}}
      </span>
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
        content: [],
        showMessage: false,
        messageText: ''
      }
    },
    computed: {
      ...mapGetters([
        'likeAction',
        'likedGIFs'
      ])
    },
    watch: {
      likeAction () {
        if (this.likeAction) {
          this.backToSearch()
        }
      }
    },
    methods: {
      ...mapMutations([
        'setGIFs',
        'setLikeAction'
      ]),

      backToSearch () {
        this.name = '';
        this.$refs.searchInput.focus();
      },

      check () {
        this.setLikeAction({action: false});
        if (this.likedGIFs && this.likedGIFs.length > 0) {
          const findUsedTerm = this.likedGIFs.filter(t => t.searchName === this.name);
          if (findUsedTerm.length > 0) {
            this.showMessage = true;
            this.messageText = `You have used ${this.name} term before!`
            this.backToSearch();
          } else {
            this.getGIFs();
            this.showMessage = false;
          }
        } else {
          this.getGIFs();
        }
      },
      async getGIFs () {
        const res = await searchService.get(this.name);
        if (res.data && res.data.data) {
          this.content = res.data.data.map((gif, index) => {
            return {
              ...gif,
              weirdness: index,
              searchName: this.name
            }
          });
          this.setGIFs(this.content)
        }
      }
    }
  }
</script>
