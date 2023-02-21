<script setup>
import { reactive, onMounted } from "vue";
import Livre from "../Livre.js";
import LibrairieForm from "./LibrairieForm.vue";
import LibrairieItem from "./LibrairieItem.vue";
import LibrairieRecherche from "./LibrairieRecherche.vue";

let listeLivres = reactive([]);
let listeLivresRecherche = reactive([]);

const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/8/livres";

//fonction ajouter OK
function handlerAdd(titre, qtestock, prix) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      titre: titre,
      qtestock: qtestock,
      prix: prix,
    }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getToDos();
    })
    .catch((error) => console.log(error));
}


//Fonction rechercher OK
function rechercherLivre(val) {
  let fetchOptions = { method: "GET" };

  fetch(url + "?search=" + val, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      listeLivresRecherche.splice(0, listeLivresRecherche.length)
      dataJSON.forEach((v) =>
        listeLivresRecherche.push(new Livre(v.id, v.titre, v.qtestock, v.prix))
      );
    })
    .catch((error) => console.log(error));
}

//Fonction récuperer les livres OK
function getToDos() {
  let fetchOptions = { method: "GET" };

  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      listeLivres.splice(0, listeLivres.length)
      dataJSON.forEach((v) =>
        listeLivres.push(new Livre(v.id, v.titre, v.qtestock, v.prix))
      );
    })
    .catch((error) => console.log(error));
}

onMounted(() => {
  getToDos();
  rechercherLivre();
});

//Fonction supprimer OK
function handlerDelete(id) {
  const fetchOptions = {
    method: "DELETE",
  };
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getToDos();
    })
    .catch((error) => console.log(error));
}

//Fonction incrementer OK
function handlerIncrementer(livre) {
  livre.incrementer();
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({
      "id": livre.id, "titre": livre.titre, "qtestock": livre.qtestock, "prix": livre.prix,
    }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
    })
    .catch((error) => console.log(error));
}

//Fonction decrementer PAS OK
function handlerDecrementer(livre) {
  livre.decrementer();
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({
      "id": livre.id, "titre": livre.titre, "qtestock": livre.qtestock, "prix": livre.prix,
    }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      if (livre.qtestock == 0) {
        handlerDelete(livre.id);
      }
      getToDos();
    })
    .catch((error) => console.log(error));
}
</script>


<template>
  <h4>Nos livres en stock actuellement :</h4>
  <ul>
    <LibrairieItem v-for="livre of listeLivres" :key="livre.id" :livre="livre" @deleteL="handlerDelete"
      @incrementer="handlerIncrementer" @decrementer="handlerDecrementer" />
  </ul>
  <LibrairieForm @addLivre="handlerAdd"></LibrairieForm>
  <LibrairieRecherche @rechercheLivre="rechercherLivre"/>
      <LibrairieItem v-for="livre of listeLivresRecherche" :key="livre.id" :livre="livre" @deleteL="handlerDelete"
      @incrementer="handlerIncrementer" @decrementer="handlerDecrementer" />
</template>

<style scoped>
h4 {
  color: rgb(38, 90, 38);
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
}

</style>

