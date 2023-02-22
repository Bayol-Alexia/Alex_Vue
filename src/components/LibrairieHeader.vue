<template>
  <div class="bandeau">
    <h1>Bibliothèque des rêves</h1>
    <p>Bienvenue dans votre librairie en ligne.</p>
  </div>

  <blockquote>
    <cite>
      <p>Une bibliothèque, c'est le carrefour de tous les rêves de l'humanité. </p>
    </cite>
  </blockquote>

  <p>Venez découvrir la sélection de livres que nous proposons.</p>
  <p>Des livres auxquels vous ne pouvez pas résister. Des livres qui vont vous faire voyager et vous faire rêver.</p>
  <p>Les étagères sont pleines alors n'hésitez plus :
  </p>
  <p class="slogan">TROUVEZ VOTRE FUTUR VOYAGE !</p>
  <hr>
  <blockquote>
    <cite>
      <p class="citation">Les livres restent, en définitive, avec le feu, la seule façon de combattre les ténèbres.
      </p>
    </cite>
  </blockquote>

</template>

<style scoped>

.bandeau {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  border: 10px double rgb(38, 90, 38);
  background: oldlace;
}

hr:after {
  content: 'LA COLLECTION';
}

.slogan {
  font-size: 25px;
  font-weight: bold;
}

h1 {
  color: rgb(38, 90, 38);
}

p {
  text-align: center;
}
</style>