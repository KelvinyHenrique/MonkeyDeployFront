<template>
  <inline-svg
    src="./svg/monochrome/rocket.svg"
    width="150"
    height="150"
    fill="black"
    aria-label="My image"
  ></inline-svg>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    type: {
      type: String,
      default: "rocket",
    },
  },
  components: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
})
export default class Unicons extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rocket {
  width: 15px;
  height: 15px;
}
</style>
