<script setup>
import { ref } from "vue";
defineProps(["livre"]);
const titre = ref("");
const emit = defineEmits(["rechercheLivre"]);
</script>


<template>
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
  color: rgb(38, 90, 38);
  margin-top: 120px;
}

p {
  color: seagreen;
}
</style>