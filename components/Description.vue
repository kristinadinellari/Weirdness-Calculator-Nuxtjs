<template>
  <div class="description-component">
    <p>{{description.text1}}</p>
    <p v-html="description.text2"></p>
  </div>
</template>
<script>
  import { content } from "@/mock/index";

  export default {
    data () {
      return {
        description: content
      }
    }
  }
</script>
