<template>
  <v-app light>
    <v-navigation-drawer
      :value="true"
      :mini-variant="mini"
      app
      clipped
    >
      <v-list dense flat nav>
        <v-list-item-group
          v-model="menuGroup"
          color="indigo"
        >
          <template v-for="item in menus">
            <v-divider
              v-if="item.divider"
              :key="item.key"
            ></v-divider>
            <v-subheader v-else-if="item.subheader" v-show="!mini" :key="item.key">
              {{ item.subheader }}
            </v-subheader>
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
                <v-list-item-title class="font-weight-regular">{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" clipped-left clipped-right dark app>
      <v-app-bar-nav-icon @click="mini = !mini"></v-app-bar-nav-icon>
      <v-toolbar-title>Admin</v-toolbar-title>
      <v-spacer />
      <user-profile />
    </v-app-bar>
    <v-main style="background-color: #fafafa">
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
      mini: false,
      menuGroup: null,
      menus: [
        {
          key: 'menu-subheader-admin',
          subheader: 'Admin'
        },
        {
          key: 'menu-control',
          text: 'Control',
          link: '/admin/control',
          icon: 'mdi-gamepad-variant-outline',
        },
        {
          key: 'menu-registrants',
          text: 'Random Data',
          link: '/admin/candidates',
          icon: 'mdi-table-account',
        },
        {
          key: 'menu-settings-stages-main',
          text: 'Settings Main',
          link: '/admin/settings/stages/main',
          icon: 'mdi-numeric-1-box-outline',
        },
        {
          key: 'menu-settings-stages-second',
          text: 'Settings Second',
          link: '/admin/settings/stages/second',
          icon: 'mdi-numeric-2-box-outline',
        },
        {
          key: 'menu-divider-1',
          divider: true,
        },
        {
          key: 'menu-subheader-screen',
          subheader: 'Stage Screen'
        },
        {
          key: 'menu-state-main',
          text: 'Main Screen',
          link: '/stages/main',
          icon: 'mdi-home-floor-1',
        },
        {
          key: 'menu-state-second',
          text: 'Second Screen',
          link: '/stages/second',
          icon: 'mdi-home-floor-2'
        }
      ]
    }
  }
}
</script>
