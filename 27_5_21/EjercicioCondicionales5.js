<!DOCTYPE html>
<html lang="es">
  <!--
HTML
web o pagina:
entorno: curso Accenture-CMV
autor: Carlos Boni
fecha: Mayo 2021
-->

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- polyfill para soportar CSS3 Media Queries en MS explorer viejos -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- importante SEO para la etiqueta del navegador -->
    <title>Ejercicio 5 Condicionales</title>

    <!-- una fuente de Google -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap"
      rel="stylesheet"
    />

    <!-- una hoja de estilos externa-->

    <!-- una hoja de estilos personalizada-->
    <link href="styles.css" rel="stylesheet" />

    <!-- iconos u otros elementos externos -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />

    <!-- solo aquellos estilos que solo aplican a esta pagina -->
    <style>
      * {
        font-family: "Nunito", sans-serif;
      }

      body {
        background: rgba(0, 0, 128, 0.1); /* Azul al 10% */
      }
    </style>

    <!-- scripts externos de librerias que usaremos, por ejemplo Bootstrap o JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- scripts externos de desarrollo propio en Javascript o JQuery -->
    <script src="index.js"></script>

    <!-- scripts personalizados Javascript o JQuery -->
    <script src="index.js">
      // aqui el codigo ...
    </script>
  </head>

  <body>
    <!-- cabecera de pagina -->
    <header>
      <h1>Ejercicios JavaScript</h1>
      <h2>Ejercicio 5 - Condicionales</h2>
      <br />
    </header>

    <!-- bloque de contenido de la pagina -->
    <main>
      <p id="salida"></p>
    </main>

    <script>
      // seccion de codigo javascript
      let suerte = Math.random() * 6;
      let dado = parseInt(suerte) + 1;

      let obj1 = document.getElementById("salida");

      if (dado > 3) {
        obj1.innerHTML = `Has ganado, ha salido el numero ${dado} `;
      } else {
        obj1.innerHTML = `Lo siento, ha salido el numero ${dado} `;
      }
    </script>

    <!-- pie de pagina -->
    <footer>
      <br /><br /><br />
      <div>
        &copy; 2021
        <a href="https://www.bulukiweb.es" target="_blank">Eva Guti??rrez</a>
      </div>
    </footer>
  </body>
</html>
