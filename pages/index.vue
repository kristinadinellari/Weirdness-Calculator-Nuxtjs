<template>
  <div class="container">
    <section class="first-section" :class="!likedGIFsLenght ? 'fullContainer' : ''">
      <Search>
        <Description/>
      </Search>
      <SearchResult/>
    </section>
    <section class="second-section" v-show="likedGIFsLenght">
      <Liked>
        <Calc/>
      </Liked>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    Search: () => import('~/components/Search'),
    Description: () => import('~/components/Description'),
    SearchResult: () => import('~/components/SearchResult'),
    Liked: () => import('~/components/Liked'),
    Calc: () => import('~/components/Calculate'),
  },
  computed: {
    ...mapGetters([
      'likedGIFs'
    ]),
    likedGIFsLenght () {
      return this.likedGIFs.length > 0
    }
  },
  methods: {
    // ...mapMutations([
    //   'setVal'
    // ])
  }
}
</script>
