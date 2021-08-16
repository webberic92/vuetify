<template>
  <nav>
    <v-app-bar text app>
      <v-icon class="grey--text" @click="drawer = !drawer">mdi-menu</v-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text">
			<br>
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-contenet>
            <v-list-tile-title class="white--text">
              {{ link.text }}
            </v-list-tile-title>
          </v-list-tile-contenet>
		<br>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
	  links: [ // eslint-disable-line no-mixed-spaces-and-tabs	
		{ icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
		{ icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
		{ icon: 'mdi-account', text: 'Team', route: '/team' },
	  ]// eslint-disable-line no-mixed-spaces-and-tabs
    }
  }
}
</script>
