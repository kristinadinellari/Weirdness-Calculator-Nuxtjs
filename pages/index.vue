<template>
  <div class="container">
    <section>
      <Search>
        <Description/>
      </Search>
      <Result/>
    </section>
    <section>
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
    Result: () => import('~/components/Result'),
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
