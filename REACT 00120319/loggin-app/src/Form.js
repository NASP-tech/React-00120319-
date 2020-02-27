import React from "react";
import {container, btn } from "./Form.module.css"
export const Form = props =>{
    
    
    const {username, password, changeHandler, submitHandler} = props;
    return (

    
      
    <form className = {container}  onSubmit={submitHandler}>
        <input onChange = {changeHandler} id="username" placeholder = "Username:" value= {username}></input>
        <input onChange = {changeHandler} id= "password" placeholder = "Password:"  value= {password}></input>
        
        <button className = {btn} type={"submit"}>Loggin</button>

        
    </form>)
}