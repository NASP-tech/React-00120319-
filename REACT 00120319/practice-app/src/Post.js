import React from 'react'

const post = props => {
    return(
        <section>
            <h3>{props.name}</h3>
            <p>{props.text}</p>
            <img src = {props.image} alt = {props.name}></img>
            <p className= "likes"> Cantidad de likes: {props.likes}</p>
        </section>
    );
}
export default post;