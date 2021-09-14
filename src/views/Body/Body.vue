<template>
  <div
    class="relative w-full min-h-screen bg-dark-00 flex flex-row justify-end"
  >
    <SideBar :sidebarcollapsed="sidebarCollapsed" />
    <div :class="bodyClassObject">
      <NavBar @sidebaractions="sidebarCollapsed = $event" />
      <div class="flex bg-dark-01 w-ninety-five-percent mb-10 rounded">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/components/NavBar/Navbar.vue";
import SideBar from "@/components/SideBar/SideBar.vue";

@Options({
  components: {
    NavBar,
    SideBar,
  },
  computed: {
    bodyClassObject() {
      return {
        "w-body-sidebar-collapsed": this.sidebarCollapsed,
        flex: true,
        "flex-col": true,
        "w-body-sidebar-open": !this.sidebarCollapsed,
        relative: true,
        "bg-dark-00": true,
        "pt-navbar-space": true,
        "transition-all": true,
        "ease-in-out": true,
        "duration-3s": true,
        "items-center": true,
        "min-h-screen": true,
      };
    },
  },
  data() {
    return {
      sidebarCollapsed: false,
    };
  },
  props: {
    msg: String,
  },
})
export default class Body extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
