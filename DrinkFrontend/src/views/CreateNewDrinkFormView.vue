<script>

import { Form as Vform, Field, ErrorMessage } from "vee-validate";

export default {
  name: "CreateNewDrinkFormView",

  components: {
    Vform,
    Field,
    ErrorMessage
  },

  data() {
    return {
      ingredients: [],
    }
  },

  methods: {
    submitForm: function () {

    },
    addIngredient: function () {

    }
  }
}
</script>

<template>
  <main class="m-auto p-3 container">
    <div class="row">
      <div class="col">
        <h1>Új ital létrehozása</h1>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Vform @submit="submitForm">
          <div class="input-group">
            <label for="name" class="input-group-text">Név</label>
            <Field type="text" name="name" id="name" class="form-control"/>
            <ErrorMessage name="name" as="div" class="alert alert-danger"/>
          </div>
          <div class="input-group">
            <label class="input-group-text">Hozzávaló:</label>
            <FieldArray name="ingredients">
              <template v-for="(ingredient, index) in ingredients" :key="index">
                <Field type="text" :name="'ingredients[' + index + ']'" v-model="ingredients[index]" class="form-control"/>
                <ErrorMessage :name="'ingredients[' + index + ']'" as="div" class="alert alert-danger"/>
              </template>
            </FieldArray>
            <button class="btn btn-success" type="button" @click="addIngredient"> Hozzávaló hozzadása</button>
          </div>
          <div class="input-group">
            <label for="description" class="input-group-text">Leírás</label>
            <Field type="text" name="description" id="description" class="form-control"/>
            <ErrorMessage name="description" as="div" class="alert alert-danger"/>
          </div>
          <div class="input-group">
            <label for="quantity" class="input-group-text">Mennyiség</label>
            <Field type="number" name="quantity" id="quantity" class="form-control"/>
            <ErrorMessage name="quantity" as="div" class="alert alert-danger"/>
          </div>
          <div class="input-group">
            <label for="price" class="input-group-text">Ár</label>
            <Field type="number" name="price" id="price" class="form-control"/>
            <ErrorMessage name="price" as="div" class="alert alert-danger"/>
          </div>
          <div class="input-group">
            <label for="discounted_price" class="input-group-text">Kedvezményes ár</label>
            <Field type="number" name="discounted_price" id="discounted_price" class="form-control"/>
            <ErrorMessage name="discounted_price" as="div" class="alert alert-danger"/>
          </div>

          <button class="btn btn-success mt-2" type="submit">Küldés</button>
        </Vform>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>