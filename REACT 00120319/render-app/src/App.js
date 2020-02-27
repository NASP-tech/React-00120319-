import React, {useState} from 'react';
import './App.css';

import {Button} from './buttons'

function App() {
  //Renderizado condicional
  //La notacion de arreglos se llama: destructuracion, que es separar, 
  //la sintaxis que se usa es {parametros que se sacan para igualarlos en el objeto} {}para lista
  // [] y se devuelve:  
  //1. forma hechiza,  forma perrona
  //un operador ternario retorna false o true
  //2.
  //Crear otro componente
  //const PORT = process.env.PORT || 3000
  const [logged, setLogged] = useState(false);
  
  const Banner =   logged? <h1>Hola usuario loggeado</h1>:<h1>Hola usario no loggeado</h1>;
      
  
  return (
    <div className="App">
      {Banner}
      
      <Button primary onClick={
        ()=>setLogged(!logged)
      }>Loggear o desloggear</Button>
      <Button>
        Other Button
      </Button>
    </div>
  );
}

export default App;
