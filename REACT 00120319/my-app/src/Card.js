import React from 'react';


export const Card = (props) => {
    return(
    <section>
        <h2>
         Name {props.name}</h2>
        <p>Origin {props.origin} </p>
        <p> Gender {props.gender} </p>
        <p> Price {props.price}</p>
      </section>

    );
}