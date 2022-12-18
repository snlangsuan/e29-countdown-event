<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list flat>
        <v-list-item-group
          v-model="menuGroup"
          color="indigo"
        >
          <template v-for="item in menus">
            <v-divider
              v-if="item.divider"
              :key="item.key"
            ></v-divider>
            <v-list-item
              v-else
              :key="item.key"
              :to="item.link"
              link
              nuxt
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" clipped-left dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Admin</v-toolbar-title>
      <v-spacer />
      <user-profile />
    </v-app-bar>
    <v-main style="background-color: #fdfdfd">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AdminLayout',
  data() {
    return {
      drawer: false,
      menuGroup: null,
      menus: [
        {
          key: 'menu-control',
          text: 'Control',
          link: '/admin/control',
          icon: 'mdi-gamepad-variant-outline',
        },
        {
          key: 'menu-divider-1',
          divider: true,
        },
        {
          key: 'menu-state-main',
          text: 'Main Screen',
          link: '/stage/main',
          icon: 'mdi-home-floor-1',
        },
        {
          key: 'menu-state-second',
          text: 'Second Screen',
          link: '/stage/second',
          icon: 'mdi-home-floor-2'
        }
      ]
    }
  }
}
</script>
