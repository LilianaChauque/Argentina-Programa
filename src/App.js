import React, { useState, useEffect } from 'react';
import './App.css';
import piedra1Imagen from './imagenes/piedra1.jpg';
import papel1Imagen from './imagenes/papel1.png';
import tijera1Imagen from './imagenes/tijera1.png';
import { DefaultButton } from './componentes/buttonStyled';

export function IngresoNombre({}){
const [nombre, setNombre] = useState('');
const [mensajeSaludo, setMensajeSaludo] = useState('');
const [nombreIngresado, setNombreIngresado] = useState(false);

const handleNombreChange = (e) => {
  const nuevoNombre = e.target.value;
  setNombre(nuevoNombre);
  // Verifica si el nombre ingresado es válido,en este caso con una longitud mínima de 3 caracteres)
  setNombreIngresado(nuevoNombre.length >= 3); 
};

const handleEnviar = () => {
  if (nombreIngresado) {
     
    setMensajeSaludo('Hola!!! Todos sabemos las reglas del juego, vas contra PC. El ganador del juego será: el primer jugador en alcanzar 3 puntos de 5 intentos. Suerte!!! Elije tu jugada');


  } else {


    setMensajeSaludo('Por favor, ingrese su nombre para comenzar a jugar');
  }
  setTimeout(() => {
    setMensajeSaludo('');
    setNombre('');
   } , 8000);

};



return(

<><input
  type="text"
  id="nombre"
  placeholder="Escribe tu nombre"
  value={nombre}
  onChange={handleNombreChange} />

  <button id="enviar" onClick={handleEnviar}>Enviar</button>
  <p id="mensajeSaludo">{mensajeSaludo}</p></>  
)
}  


export function Opciones({jugar}) {


  return (   
 
     <div className="opciones">
         <button onClick={() => jugar('piedra')}>
           <img
             id="piedra1"
             src={piedra1Imagen}
             alt={"Piedra"}
             style={{ width: '100px', height: '100px' }} // Estilo para el tamaño de la imagen
           />
         </button>
 
 
         <button onClick={() => jugar('papel')}>
           <img
             id="papel1"
             src={papel1Imagen}
             alt={"Papel"}
             style={{ width: '100px', height: '100px' }} // Estilo para el tamaño de la imagen
           />
         </button>
 
 
         <button onClick={() => jugar('tijera')}>
           <img
             id="tijera1"
             src={tijera1Imagen}
             alt={"Tijera"}
             style={{ width: '100px', height: '100px' }} // Estilo para el tamaño de la imagen
           />
         </button>
               
       </div>
  )  
 
 }

 export function Puntaje({puntosComputadora, puntosJugador}){
    
  return(
      <>
      <p id="puntos">Puntos </p>
      <p id="jugador">Jugador: {puntosJugador} </p>
      <p  id="computadora">Computadora: {puntosComputadora} </p>
      
      <p></p>
     
    </>
  )
}


export default function App() {

  const [puntosJugador, setPuntosJugador] = useState(0);
  const [puntosComputadora, setPuntosComputadora] = useState(0);
  const [ganadorRonda, setGanadorRonda] = useState('');
  const [mensajeResultado, setMensajeResultado] = useState('');
  const [juegoEnCurso, setJuegoEnCurso] = useState(true);
  const [ mensajeMarcador, setMensajeMarcador] =useState('');
  const opciones = ['piedra', 'papel', 'tijera'];

    const jugar = (eleccionJugador) => {
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    if (eleccionJugador === eleccionComputadora) {
      console.log(`pc eligio ${eleccionComputadora}`)
      console.log(`jugador eligio ${eleccionJugador}`)
      setMensajeResultado('Empate.😐  Ambos eligieron ' + eleccionComputadora);
      console.log(`empate`);
    } else if (
      (eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
      (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
      (eleccionJugador === 'tijeras' && eleccionComputadora === 'papel')
    ) {  
      console.log(`pc eligio ${eleccionComputadora}`)
      console.log(`jugador eligio ${eleccionJugador}`)
      setMensajeResultado(`Ganaste esta ronda.😆 La PC Eligio ${eleccionComputadora}`);
      setPuntosJugador(puntosJugador + 1)
      console.log(`J ${puntosJugador}`)

         
        return "jugador"; 
      } else {
        console.log(`pc eligio ${eleccionComputadora}`)
        console.log(`jugador eligio ${eleccionJugador}`)
      setMensajeResultado('La computadora ganó esta ronda.😠 Eligio ' + eleccionComputadora);
      setPuntosComputadora(puntosComputadora  + 1)       
      console.log(`PC ${puntosComputadora}`)

          
        return "computadora"
        
        }
        if (ganadorRonda === "jugador") {
         setGanadorRonda({ puntosJugador: ganadorRonda.puntosJugador + 1});
        } else if(ganadorRonda === "computadora") {
          setGanadorRonda({puntosComputadora: ganadorRonda.puntosComputadora + 1})
        
        }
        
      };

      useEffect(() => {
        if (puntosJugador === 3) {
          setMensajeMarcador('¡Ganaste el juego! 😆');
          setPuntosJugador(puntosJugador +1);
          setJuegoEnCurso(false); //detener juego
          
        } else if (puntosComputadora === 3) {
          setMensajeMarcador('La computadora ganó el juego.😠 ');
          setPuntosComputadora(puntosComputadora + 1)
          setJuegoEnCurso(false); // detener el juego
        }
      }, [puntosJugador, puntosComputadora]);
      
      
      
      const reiniciarJuego = () => {
            
        setPuntosComputadora(0);
        setPuntosJugador(0);
        setMensajeResultado('');
        setJuegoEnCurso(true);
        setMensajeMarcador('');
      }
  return (
    <><div className="App">
      <h1>Piedra, Papel o Tijera!!!</h1>
      <>
        <IngresoNombre />
      </>
      <>
        <Opciones jugar={jugar}/>  
        <p>{mensajeResultado}</p>  
        </>
        
        <>
       <Puntaje
        puntosComputadora= {puntosComputadora}
        puntosJugador= {puntosJugador}
       />
       <p>{mensajeMarcador}</p>
       </>
    
        <>
          <DefaultButton id="reinicioJuego" onClick={reiniciarJuego}>Reiniciar Juego</DefaultButton></>
          
        

      </div></>
  )
  }
