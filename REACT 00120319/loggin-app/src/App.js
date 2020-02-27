import React, {Component, useState} from "react";
import {Form} from "./Form"
import {container}  from "./App.module.css"

import {Button} from './Buttons'

const initState ={
      username: "Username",
      password: "Password",
} 
const [logged, setLogged] = useState(false);
const Banner = logged? <h1>Welcome back!</h1>:<h1>You are not loggin, sorry</h1> 

class App extends Component{
      constructor( props){
            super(props);
            this.state={...initState, people:[]}
            this.submitHandler = this.submitHandler.bind(this)
            
           
            
      }

       
            submitHandler(event){
            event.preventDefault();
            const {username, password} = this.state;
            const people= [...this.state.people];
            people.push({
              username, password
            });
            this.setState({
                  ...initState,
                  
                  people
            })
      }


      render(){
            const {username, password} = this.state;

            return (
                  <div className={container}>
                        <Form username = {username} password = {password}></Form>
                        {Banner}
                        <Button primary onClick={
                              ()=>setLogged(!logged)
                        }>Loggin or Loggoff </Button>
                  </div>
                   
                  
            );
      }
}

export default App;
