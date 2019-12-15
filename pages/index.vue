<template>
  <div class="container">
    <section class="first-section">
      <Search>
        <Description/>
      </Search>
      <SearchResult/>
    </section>
    <section class="second-section">
      <Liked/>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    Search: () => import('~/components/Search'),
    Description: () => import('~/components/Description'),
    SearchResult: () => import('~/components/SearchResult'),
    Liked: () => import('~/components/Liked'),
  },
  computed: {
    ...mapGetters([
      'val'
    ])
  },
  methods: {
    ...mapMutations([
      'setVal'
    ])
  }
}
</script>
