import React, {Component} from "react";
import {container, btn} from "./Registro.module.css"

const initState = {
    username: "",
    email: "",
    password: "",
}

export default class Register extends Component { 
    constructor(props){
        super(props);

        this.state = {

            ...initState,


        } 
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    submitHandler = event =>{
        event.preventDefault();


        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            
        }

        let config = {
            method : 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(this.state),
        }
        fetch('http://reactcourseapi.herokuapp.com/user/registro', config)
        .then(res => res.json())
        .then (data => {
            localStorage.setItem('token', data.token)
            this.setState({...initState})
        })
        .catch (err=> {
            console.log(err);
        })
    }
    render(){
        return (
                <>
                <h1>Registro</h1>
                <form className = {container} onSubmit = {this.submitHandler}>
                    <label>username:
                        <input type= "text" id = "username" onChange = {this.changeHandler} value= {this.state.username}></input>
                    </label>
                    <label>Email:
                        <input type= "email" id = "email" onChange = {this.changeHandler} value= {this.state.email}></input>
                    </label>
                    <label>password:
                        <input type= "password" id = "password" onChange = {this.changeHandler} value= {this.state.password}></input>
                    </label>
                   <button className = {btn} type = "Sign-Up" >Sign Up</button>
                </form>
                </>
        )
    }
}
