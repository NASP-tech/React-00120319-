import React from 'react';
import styled from 'styled-components';
// //`` el css se escribe dentro de ellas
//`` significan template string, y permiten: poner JS dentro de un string {}
export const Button = styled.button `
    background-color:${props => props.primary? "pink": "aqua"};
    color: ${props => props.primary ? "yellow" : "red"};
    border-radius: 0.4em;
    font-size: 30px;
    transition: ease all 0.4s;
    &:hover{
        background-color: gray;
    }
    &:focus{
        outline: none;
    }
`;

export const OtherButton = styled(Button)`
    color: green;
    background-color: blue;
`;