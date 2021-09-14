<template>
  <div :class="bodyClassObject">
    <div class="bg-dark-01 w-full h-full left-0 flex flex-col items-center">
      <span class="text-primary text-2xl font-bold mt-8 mb-14">DPC</span>
      <div
        v-for="(menu, index) in menuItems"
        :key="menu.name"
        class="container_icons w-3/4"
      >
        <div
          class="
            menu-principal
            cursor-pointer
            flex flex-row
            hover:bg-adm-blue
            rounded
          "
          :class="{
            'justify-center items-center p-4': sidebarcollapsed,
            'justify-between pt-4 pb-4 pr-2 pl-2': !sidebarcollapsed,
          }"
          @click="menuActions(index, menu.name)"
        >
          <div class="flex flex-row items-center justify-center">
            <vue-feather
              :type="menu.icon"
              class="text-icon"
              :class="{ 'mr-2': !sidebarcollapsed }"
            />
            <h1 :class="{ hidden: sidebarcollapsed }" class="text-secondary">
              {{ menu.title }}
            </h1>
          </div>
          <div v-if="menu.children" :class="{ hidden: sidebarcollapsed }">
            <vue-feather
              class="transition ease-in-out duration-500 text-icon"
              :class="{ 'transform rotate-180': !menu.isRotate }"
              type="chevron-down"
              size="10"
            />
          </div>
        </div>
        <div
          v-if="menu.children"
          :class="{ active: menu.isRotate && !menu.children }"
        >
          <div
            v-for="(submenu, sub_index) in menu.children"
            :key="submenu.name"
            class="p-4 ml-4 cursor-pointer"
            :class="{
              hidden: submenu.active || sidebarcollapsed,
              childactive: submenu.childActive,
            }"
            @click="navigateToRoute(index, sub_index, submenu.name)"
          >
            <h1 class="text-secondary">
              {{ submenu.title }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  computed: {
    bodyClassObject() {
      return {
        "w-sidebar-collapsed": this.sidebarcollapsed,
        "w-sidebar-open": !this.sidebarcollapsed,
        "transition-all": true,
        "ease-in-out": true,
        "duration-3s": true,
        fixed: true,
        "top-0": true,
        "left-0": true,
        "h-screen": true,
      };
    },
  },
  data() {
    return {
      showSubmenu: false,
      colapseSubmenu: true,
      isRotate: false,
      menuItems: [
        {
          title: "Analytics",
          name: "Analytics",
          icon: "home",
          isRotate: false,
          active: false,
          children: [
            {
              title: "Ecommerce",
              name: "Ecommerce",
              icon: "home",
              active: false, // Sempre usar essa tab ou não aparece o menu
              childActive: false,
            },
          ],
        },
        {
          title: "Layout",
          name: "Layout",
          icon: "layout",
          active: false, // Sempre usar essa var ou não aparece o menu
        },
      ],
    };
  },
  methods: {
    menuActions(index: number, name: string) {
      if (this.menuItems[index].children) {
        this.menuItems = this.menuItems.map((itemFrt: any) => {
          const closedMenu = itemFrt;
          closedMenu.active = false;
          return closedMenu;
        });
        this.menuItems[index].isRotate = !this.menuItems[index].isRotate;
        this.menuItems[index].children.map((item: any, childIndex: number) => {
          if (item.active === true || item.active === false) {
            const childStatus =
              !this.menuItems[index].children[childIndex].active;
            this.menuItems[index].children[childIndex].active = childStatus;
            return true;
          }
          return false;
        });
      } else {
        if (this.$router.currentRoute.name === name) return;
        const l = this.$router.resolve({ name });
        if (l.matched.length > 0) {
          this.menuItems = this.menuItems.map((itemFrt: any) => {
            const closedMenu = itemFrt;
            closedMenu.active = false;
            return closedMenu;
          });
          this.menuItems[index].active = true;
          this.$router.push({ name });
        } else {
          console.log(`Route ${name} doesn't exist!`);
        }
      }
      this.menuItems
        .filter((x: any) => x.isRotate && x.name !== name)
        .map((menuItem: any) => {
          if (menuItem.children) {
            menuItem.children.map((menuItemChildren: any) => {
              // eslint-disable-next-line no-param-reassign
              menuItemChildren.active = false;
              // eslint-disable-next-line no-param-reassign
              menuItemChildren.childActive = false;
              return menuItemChildren;
            });
          }
          // eslint-disable-next-line no-param-reassign
          menuItem.isRotate = false;
          return menuItem;
        });
      this.showSubmenu = !this.showSubmenu;
      this.colapseSubmenu = !this.colapseSubmenu;
    },
    navigateToRoute(parentIndex: any, childindex: any, name: any) {
      if (this.$router.currentRoute.name === name) return;
      const l = this.$router.resolve({ name });
      if (l.matched.length > 0) {
        this.$router.push({ name });
        if (this.menuItems[parentIndex].children[childindex]) {
          // eslint-disable-next-line
					this.menuItems[parentIndex].children.forEach((childItem: any) => (childItem.childActive = false));
          this.menuItems[parentIndex].children[childindex].childActive = true;
        }
      } else {
        console.log(`Route ${name} doesn't exist!`);
      }
    },
  },
  props: {
    sidebarcollapsed: {
      type: Boolean,
      default: false,
    },
  },
})
export default class SideBar extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
