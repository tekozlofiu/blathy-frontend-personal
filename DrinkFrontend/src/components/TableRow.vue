<script>
export default {
  name: "TableRow",

  props: {
    drink: Object
  },

  computed: {
    isDiscounted: function () {
      return this.drink.discounted ? "Akciós" : "Nem akciós";
    }
  },

  methods: {
    onModifyClick: function () {
      this.$emit("modifyButtonClick", this.drink.id);
    }
  },

  emits: [
      "modifyButtonClick"
  ],

}
</script>

<template>
  <td>{{ this.drink.name }}</td>
  <td>{{ this.drink.price }}</td>
  <td>{{ this.isDiscounted }}</td>
  <td><input type="button" class="btn btn-primary" value="Módosítás" @click="onModifyClick" /></td>
</template>

<style scoped>

</style>