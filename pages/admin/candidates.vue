<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="text-h4">Random Data</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="items"
          :loading="loading"
          :options.sync="options"
          class="elevation-1"
        >
          <template #[`item.no`]="{ index }">
            {{ (index + 1) + (options.page - 1) * options.itemsPerPage  }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RegistrantsPage',
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      loading: false,
      headers: [
        {
          text: 'No.',
          align: 'center',
          sortable: false,
          width: 80,
          value: 'no'
        },
        {
          text: 'PHONE NUMBER',
          align: 'start',
          sortable: true,
          value: 'telno'
        },
        {
          text: 'NAME',
          align: 'start',
          sortable: true,
          value: 'name'
        }
      ],
      items: [],
      options: {},
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      try {
        this.loading = true
        const snapshot = await this.$fire.database.ref('candidates1').once('value')
        const items = snapshot.val() || []
        console.log(items)
        this.items = items
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
  }
}
</script>
