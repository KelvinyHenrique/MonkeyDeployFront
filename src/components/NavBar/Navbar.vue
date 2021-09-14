<template>
  <div :class="bodyClassObject">
    <div
      class="
        w-ninety-five-percent
        h-16
        bg-dark-01
        flex flex-row
        justify-between
        items-center
        pr-6
        rounded
      "
    >
      <vue-feather
        @click="sidebarActions()"
        type="grid"
        class="p-6 cursor-pointer text-icon"
      />
      <div class="flex items-center">
        <span class="text-secondary">Bem Vindo KelvinyHenrique</span>
        <vue-feather type="user" class="ml-6 cursor-pointer text-icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
  computed: {
    bodyClassObject() {
      return {
        "w-body-sidebar-collapsed": this.sidebarCollapsed,
        flex: true,
        fixed: true,
        "w-body-sidebar-open": !this.sidebarCollapsed,
        "top-0": true,
        "justify-center": true,
        "mt-4": true,
        "transition-all": true,
        "ease-in-out": true,
        "duration-3s": true,
      };
    },
  },
  data() {
    return {
      sidebarCollapsed: false,
    };
  },
  methods: {
    sidebarActions() {
      this.sidebarCollapsed = !this.sidebarCollapsed;
      this.$emit("sidebaractions", this.sidebarCollapsed);
    },
  },
})
export default class NavBar extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
