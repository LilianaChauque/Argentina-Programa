import React, { useState, useEffect } from 'react';
import './App.css';
import piedraImagen from './imagenes/piedra.png';
import papelImagen from './imagenes/papel.jpg';
import tijeraImagen from './imagenes/tijera.jpg';

function App() {
  const [nombre, setNombre] = useState('');
  const [puntosJugador, setPuntosJugador] = useState(null);
  const [puntosComputadora, setPuntosComputadora] = useState(null);
  const [mensajeResultado, setMensajeResultado] = useState('');
  const opciones = ['piedra', 'papel', 'tijera'];
  
  useEffect(() => {
    if (puntosJugador === 3) {
      setMensajeResultado('¡Ganaste el juego! 😆');
    } else if (puntosComputadora === 3) {
      setMensajeResultado('La computadora ganó el juego.😠 ');
    }
  }, [puntosJugador, puntosComputadora]);

  const jugar = (eleccionJugador) => {
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    if (eleccionJugador === eleccionComputadora) {
      setMensajeResultado('Empate.😐  ambos eligieron ' + eleccionComputadora);
    } else if (
      (eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
      (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
      (eleccionJugador === 'tijeras' && eleccionComputadora === 'papel')
    ) {
      setMensajeResultado('Ganaste esta ronda.😆 la PC eligio ' + eleccionComputadora);
      setPuntosJugador(puntosJugador +1); 
      } else {
      setMensajeResultado('La computadora ganó esta ronda.😠 eligio ' + eleccionComputadora);
      setPuntosComputadora(puntosComputadora +1); 
    }
  };

  const reiniciarJuego = ( ) => {
    
    setPuntosComputadora(0);
    setPuntosJugador(0);
    setMensajeResultado('');
  
    
  }

  return (
    <><div className="App">
      <h1>Piedra, Papel o Tijera!!!</h1>

      <div>
        <input
          type="text"
          id="nombre"
          placeholder="Escribe tu nombre"
          onChange={(e) => setNombre(e.target.value)} />
        <button id="enviar" onClick={() => setNombre(nombre)}>Enviar</button>
      </div>

       <div className="opciones">
        {opciones.map((opcion) => (
          <button key={opcion} onClick={() => jugar(opcion)}>
          <img 
             src={`${opcion}.png`}
             alt={opcion}
             style={{ width: '75px', height: '75px' }} // Estilo para el tamaño de la imagen
          />
           {opcion.charAt(0).toUpperCase() + opcion.slice(1)}
          </button>
        ))}
      </div>
      <p>Puntos:</p>
      <p>Jugador:  {puntosJugador}</p>
      <p>Computadora:  {puntosComputadora}</p>
      <p>{mensajeResultado}</p>
      </div>
      
      <button id="reinicioJuego" onclick= {reiniciarJuego}> Reiniciar Juego</button></>
  );
}

export default App;

