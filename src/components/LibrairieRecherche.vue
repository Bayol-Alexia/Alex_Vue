<script setup>
import { ref } from "vue";
defineProps(["livre"]);
const titre = ref("");
const emit = defineEmits(["rechercheLivre"]);
</script>


<template>
  <hr>
  <form @submit.prevent="$emit('rechercheLivre', val)">
    <h4>Rechercher un livre ?</h4>
    <p>Veuillez renseigner le titre du livre.</p>
    <input type="text" id="val" v-model="val" placeholder="Le titre du livre ?" style="
          border-bottom: 3px solid seagreen;
            border-top: 3px solid seagreen;
            border-left: 3px groove seagreen;
          " />
    <input type="submit" value="Rechercher" />
  </form>
</template>

<style scoped>



h4 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: lightgrey;
  margin-top: 20px;
  font-size: 20px;
}

p {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: lightgoldenrodyellow;
}


hr {
  border: none;
  border-top: 3px double black;
  overflow: visible;
  text-align: center;
  height: 5px;
  margin-top: 120px;
}

hr:after {
  background: floralwhite;
  content: 'POUR ALLER PLUS VITE';
  font-size : 20px;
  color: green;
  padding: 0 4px;
  position: relative;
  top: -13px;
}
</style>