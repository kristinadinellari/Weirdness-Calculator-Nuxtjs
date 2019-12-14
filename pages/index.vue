<template>
  <div class="container">
    <section>
      <Search>

      </Search>
      <Result/>
    </section>
    <section></section>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    Search: () => import('~/components/Search'),
    Result: () => import('~/components/Result'),
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
