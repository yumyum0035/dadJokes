# Good morning!

Get a random dad joke after checking the weather report!


# How to implement OpenWeather API key

Create a new .js file called config.js and add the following line:

``
export function key() { return "yourAPIkeyhere"; }
``

for more information about the API key, read this https://openweathermap.org/appid

# What we worked on

We worked with API calls and showing information from a json file on console.

* https://icanhazdadjoke.com/api

Using the Dad Joke API we obtain a random joke and show it on the website.

* https://openweathermap.org

API to show the weather.

* CSS animations

# Techonologies used

* Javascript
* HTML
* https://michalsnik.github.io/aos/ Animate on Scroll library

## Backlog

✅ Ex 1:

Crear la web de chistes, el funcionamiento de los cuales es:

* Al entrar no mostrará ningún chiste. Aparecerá el título y el botón de siguiente chiste“

* Al pulsar el botón de “Siguiente chiste” se hará fetch a la APIO de chistes y se mostrará por consola el chiste en cuestión.

Nota: En este ejercicio no es necesario maquetar la web, primero haremos que funcione para pasar a aplicarle los estilos.

✅ Ex 2:

Modificar la web anterior porque el chiste aparezca en la web, en lugar de por consola.

✅ Ex 3:

Bien hecho! Ya tienes una web de chistes operativa.

Puesto que está web está pensada para mostrar chistes a los usuarios a primera hora de la mañana para empiecen bien el día, añadiremos información meteorológica puesto que los puede ser de utilidad.

Consumir una API de información meteorológica y mostrarla en la web. 

Esta API tiene que consumirse en la apertura, no mediante un botón.

Nota: Todavía no es necesario maquetar la web, con mostrar una palabra que indique el tiempo es suficiente.

