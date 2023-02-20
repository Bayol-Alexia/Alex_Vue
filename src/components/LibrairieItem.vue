<script setup>
import { defineEmits } from "vue";
defineProps(["livre"]);
const emit = defineEmits(["deleteL", "incrementer", "decrementer"]);
</script>

<template>
  <li>
    {{ livre.pourAfficher() }}
    <button @click="$emit('incrementer', livre)">+</button>
    <button @click="$emit('decrementer', livre)">-</button>
    <button @click="$emit('deleteL', livre.id)">Supprimer</button>
  </li>
</template>