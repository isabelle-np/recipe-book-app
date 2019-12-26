import React from 'react';
import styled from 'styled-components';
import {TEAL, LIGHTBLUE, FADEDBLUE} from '../../Theme'


const Button = styled.button`
    background: ${FADEDBLUE};
    font-size: .875rem;
    height: 1.875rem;
    color: ${TEAL};
    text-transform: uppercase;
    border: none;
    border-radius: .125rem;
    padding: 0 1rem;
    font-weight: 700;
    margin: 1rem;
    transition: 0.3s;
    box-shadow: 0 0.0625rem 0.1875rem 0 rgba(28,92,104,.1), 0 0.0625rem 0.125rem 0 rgba(28,92,104,.06);
`;

export default Button;