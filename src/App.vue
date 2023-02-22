<script setup>
import Librairie from "./components/Librairie.vue";
import LibrairieHeader from "./components/LibrairieHeader.vue";
</script>

<template>
  <LibrairieHeader/>
  <Librairie></Librairie>
</template>

<style>
body {
  background-image: url("fond_vert.jpg");
  background-size: cover;
  background-position: 30% 70%;
  background-repeat: no-repeat;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

h4 {
  color: rgb(38, 90, 38);
  margin-top: 20px;
  font-size: 20px;
}

p {
  color: darkgreen;
  font-weight: bold;
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
  font-size: 20px;
  color: green;
  padding: 0 4px;
  position: relative;
  top: -13px;
}

blockquote {
  font-style:normal;
  margin-left:300px;
  margin-right: 300px;
  font-family:"Segoe Print", "Times New Roman", Verdana;
  padding-left: 48px;
  background-repeat:no-repeat;
  min-height: 30px;
}

blockquote p {
  padding: 15px;
  background: linen;
  border-radius: 5px;
}

blockquote p::before {
  content: '\201C';
}

blockquote p::after {
  content: '\201D';
}
</style>
