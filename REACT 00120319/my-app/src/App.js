import React, {Component} from 'react';
import {Card} from "./Card"
import {people} from "./people"
import  './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
    people: people,
  }
  }

  changeNameHandler = () =>{
    let peopleAux = [...this.state.people];

    peopleAux[0].name = peopleAux[0].name + "a";
    peopleAux[1].origin = peopleAux[1].origin + "b";

    this.setState({
      people: peopleAux,
    })
  }

  render(){
    let peopleComponents = this.state.people.map(person =>{
     return (<Card
     name = { `${person.name}`}
     origin = { `${person.origin}`}
     gender = { `${person.gender}` }     
     price = { `${person.price}` }

     />);
     
     });
     return (
      <div className="App">
        <h1> Fragrance List</h1>
  
        <p> Worldwide most used fragrances</p>
        {peopleComponents}     
      </div>
     

     );
     }

  

/* const App = () => {
  let peopleComponents = people.map(person => {
    return (<Card
      name = {'$person.name'} ${person.lastname}'}
    ></Card>);
  });

function App() {
  return (
    <div className="App">
      <h1> Fragrance List</h1>

<p> Worldwide most used fragrances</p>



    </div>
  );*/
}

export default App;
