<template>
  <div class="bandeau">
      <h1>Bibliothèque des rêves</h1>
      <p>Bienvenue de votre librairie en ligne.</p>
    </div>

  <div class="fond">
    <blockquote>
    <cite>
      <p>Une bibliothèque, c'est le carrefour de tous les rêves de l'humanité. </p>
    </cite>
    </blockquote>

    <p>Venez découvrir la sélection de livres que nous proposons. Des livres auxquels vous ne pouvez pas résister. Des livres qui vont vous faire voyager et vous faire rêver. Les étagères sont pleines alors n'hésitez plus :
    </p>
    <p class="slogan">TROUVEZ VOTRE FUTUR VOYAGE !</p>
   <hr>
  </div>

  </template>
  
  <style scoped>
  .bandeau {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
    border: 10px double rgb(38, 90, 38);
    background: oldlace;
  }


  .fond{
    font-family: Avenir, Helvetica, Arial, sans-serif;}

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
    content: 'LA COLLECTION';
    font-size : 20px;
    color : green;
    padding: 0 4px;
    position: relative;
    top: -13px;
  }

  .slogan{
    font-size:25px;
    font-weight: bold;
  }
  blockquote {
    margin: 0;
  }

  blockquote p {
    padding: 15px;
    background: floralwhite;
    border-radius: 5px;
  }

  blockquote p::before {
    content: '\201C';
  }

  blockquote p::after {
    content: '\201D';
  }

  h1 {
    color: rgb(38, 90, 38);
  }
  
  p {
    color: darkgreen;
    text-align: center;
  }
  </style>