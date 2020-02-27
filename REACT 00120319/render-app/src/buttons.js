import React from 'react';
import styled from 'styled-components';
// //`` el css se escribe dentro de ellas
//`` significan template string, y permiten: poner JS dentro de un string {}
export const Button = styled.button `
    background-color:${props => props.primary? "blue": "indigo"};
    color: ${props => props.primary ? "tomato" : "white"};
    border-radius: 0.4em;
    font-size: 30px;
    transition: ease all 0.4s;
    &:hover{
        background-color: teal;
    }
    &:focus{
        outline: none;
    }
`;

export const OtherButton = styled(Button)`
    color: white;
    background-color: indigo;
`;