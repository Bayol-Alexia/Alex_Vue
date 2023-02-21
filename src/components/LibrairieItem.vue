<script setup>
import { defineEmits } from "vue";
defineProps(["livre"]);
const emit = defineEmits(["deleteL", "incrementer", "decrementer"]);
</script>

<template>
  <ul>
  <li>
    {{ livre.pourAfficher() }}
    <button @click="$emit('incrementer', livre)">+</button>
    <button @click="$emit('decrementer', livre)">-</button>
    <button @click="$emit('deleteL', livre.id)">Supprimer</button>
  </li>
  </ul>
</template>

<style scoped>


button{
  background-color: lightyellow;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  margin: 3px;

}
  button:hover{
    background-color: peachpuff;
  }
  ul {
    padding-left: 2rem;
    list-style-type: none;
  }

  ul li {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding-left: 2rem;
    line-height: 2;
    background-image: url(Livre_ouvert.svg.png);
    background-position: 0 0;
    background-size: 1.6rem 1.6rem;
    background-repeat: no-repeat;
    color: black;
    font-weight: bold;
  }

</style>