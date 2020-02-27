import React from 'react';
import {Card} from "./Card";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Hola mundo!</h1>

      <p> Esta es mi primera app en React</p>
      
      
      <Card name= "Natalia" career= "Ingenieria" email = "00120319@uca.edu.sc"/>
      <Card name = "Leo" career= "Ingenieria" email = "lrsolorzano@gmail.com"/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
    </div>
  )



  
import React from 'react';
import {Card} from "./Card";
import './App.css';



    /*return (
      React.createElement('div', {className: "App"}, 
        React.createElement('h1', null, 'Hola mundo'), 
        React.createElement('p', null, 'Esta es mi primera App'), 
        React.createElement('section', null, 
          React.createElement('h2', null, 'Mi nombre es Natalia'), 
          React.createElement('p', null, 'Estudio Ingenieria Informatica'),
          React.createElement('p', null, 'Mi correo es 00120319@uca.edu.sv')))
          
      )*/
  
}

export default App;
