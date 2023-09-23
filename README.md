# PIEDRA, PAPEL O TIJERA creado con React App

## Podemos ejecutar esta app:
Clonandolo el proyecto y ejecutar el archivo desde la terminal de tu PC, con el comando `npm start`. Se puede acceder también de manera directa desde: [PIEDRA, PAPEL O TIJERA] (https://lilianachauque.github.io/progWeb/) para jugar desde cualquier navegador.

## Descripción del juego:
Es un juego simple y por todos conocidos. Tenemos tres opciones para elegir: PIEDRA, PAPEL y TIJERA, piedra le gana a tijera, tijera le gana a papel y papel le gana a piedra. El usuario debe poner su nombre para empezar a jugar. Gana el mejor de 5 jugadas, los empates no se cuentan por tanto, el que gana tres jugadas es el que gana el juego. al ganar aparece un mensaje que le da la opción de seguir jugando si lo desea, presionando el botón Reiniciar Juego.

## Caracteristicas del juego:
Existe un componente padre llamdo _App.js_ y y en el sus subcomponentes,  
* _IngresoNombre.js_ donde el jugador ingresa su nombre, inmediatamente se  lo saluda se explica las reglas del juego, si no lo hace aparece un mensaje instandolo a que lo haga, este mensaje desaparece después de unos segundos use _setTimeout()_.
* _Opciones.js_ importe las imagenes que se encuentran en una carpeta en _Componentes/Imagenes_ para que se muestren en los botones que va a elegir el usuario para su jugada.
* _Puntaje.js_ podemos ver el marcador donde muestra el puntaje de los jugadores que se inicializa en 0.
 
## UseState y UseEffect 
* Utilice el estado (state) de React por ejemplo para capturar el nombre ingresado por el jugador.
* utilice el estado (effect) de React para determinar el ganador del juego y una vez establecido se anuncia en un mensaje _mensajeMarcador_.

## Styled components
En la carpeta _Componentes_ podemos encontrar: a _buttonStyled.js_ que le da estilo al botón de _ReiniciarJuego_.