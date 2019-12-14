<template>
  <div class="search-component">
    <slot/>
    <section class="common-section">
      <span>Search term</span>
      <div class="search-holder">
        <input type="text">
        <button>Search</button>
      </div>
    </section>
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {

  }
</script>
