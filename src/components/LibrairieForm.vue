<script setup>
import { ref } from "vue";
const titre = ref("");
const qtestock = ref("");
const prix = ref("");
const emit = defineEmits(["addLivre"]);
</script>

<template>
  <img src="citation.jpg" alt="Citation"/>
  <hr>
  <form @submit.prevent="$emit('addLivre', titre, qtestock, prix)">
    <h4>Un nouveau livre à la collection ?</h4>
    <p>Veuillez saisir les renseignements nécessaires pour son ajout.</p>
    <input
      type="text"
      v-model="titre"
      placeholder="Le titre du livre ?"
      style="
        border-bottom: 3px solid seagreen;
        border-top: 3px solid seagreen;
        border-left: 3px groove seagreen;
      "
    />
    <input
      type="number"
      v-model="qtestock"
      step="1"
      placeholder="La quantité en stock ?"
      min="0"
      style="
        border-bottom: 3px solid seagreen;
        border-top: 3px solid seagreen;
        border-left: 3px groove seagreen;
      "
    />
    <input
      type="number"
      v-model="prix"
      step="0.1"
      placeholder="Le prix unitaire (en €) ?"
      min="0"
      style="
        border-bottom: 3px solid seagreen;
        border-top: 3px solid seagreen;
        border-left: 3px groove seagreen;
        border-right: 3px solid seagreen;
      "
    />
    <input type="submit" value="Ajouter" />
  </form>
</template>

<style scoped>
h4 {
  color: rgb(38, 90, 38);
  margin-top: 20px;
}

p {
  color: seagreen;
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
  background: #fff;
  content: 'DE LA NOUVEAUTÉ';
  color : green;
  padding: 0 4px;
  position: relative;
  top: -13px;
}
</style>