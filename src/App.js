import React, { useEffect, useState } from 'react';
import Saludar from './components/Saludar';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Contacto from "./pages/Contacto"
import QuienSoy from "./pages/QuienSoy"
// import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';


import './App.css';



function App() {

  const user ={
    nombre:"Alexis Aguilar",
    edad:24,
    color:"Azul"
  }

  const saludarFn =(name)=>{
    console.log("Hola" + name);
  }

  const enviarSaludo = (nombre, apellidos) =>{
    let suma = nombre + apellidos
    console.log(suma);
    return suma
  }

  const [stateCar, setStateCar ] = useState(false)
  const [contar, setContar ] = useState(0)

  useEffect(()=>{
    console.log("Total: " + contar);
  },[contar])

  const encenderApagar =()=>{
    // console.log("Encender / Apagar")
    setStateCar(!stateCar)
    setContar(contar+1)
  }

  return (
    <div>
      <h1>Mi primer componente</h1>
      <Saludar nombre={50} apellidos={50} enviarSaludo={enviarSaludo}/>
      {/* <Saludar nombre="Ruben" apellidos="Gonzalez"/>  */}
       <Saludar userInfo={user} saludarFn={saludarFn}/>

      <h1>React Boostrap</h1>
      
      <Button variant="primary">Primary</Button>{' '}

      <h3>El coche está: { stateCar ? "Encendido" : "Apagado" }</h3>
      <button onClick={encenderApagar}>Encender</button>
      <h4>Clicks: {contar}</h4>

      <Router>
        <div>
          <Link to="contacto">
          <Button>Contacto</Button>
          </Link>

          <Link to="/quien-soy">
          <Button>Quién Soy</Button>
          </Link>
        </div>

        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/quien-soy">
            <QuienSoy />
          </Route>
        </Switch>


      </Router>

      <header>
        {/* Componente propio Greeting.jsx */}
       {/* <Greeting name="Alexis"/> */}
       <GreetingF name="Alexis"/>
      </header>
    </div>
  );
}

export default App;
