<script>
import { http } from "@/utils/http.js";
import TableRow from "@/components/TableRow.vue";
import router from "@/router/index.js";

export default {
  name: "HomeView",
  components: { TableRow },

  mounted() {
    this.getData();
  },

  methods: {
    getData: function () {
      http.get("drinks")
          .then(response => response.data.data)
          .then(jsonData => this.drinks = jsonData)
    },

    showDrink: function (id) {
      router.push(`drinks/${id}`);
    },

  },

  data() {
    return {
      drinks : [],
    }
  },
}
</script>

<template>

  <main class="container">

    <h1>Italok</h1>

    <hr>

    <table class="table">
      <thead>
      <tr>
        <th>Név</th>
        <th>Ár</th>
        <th>Akciós</th>
        <th>Művelet</th>
      </tr>
      </thead>
      <tbody>

        <tr v-for="drink in drinks" :key="drink.id">
          <table-row :drink="drink" @modify-button-click="showDrink" />
        </tr>

      </tbody>
    </table>
  </main>

</template>

<style scoped>

</style>