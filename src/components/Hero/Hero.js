import React from 'react';
import styled from 'styled-components';
import {TEAL, CHARCOAL} from '../../Theme';

const HeroLabel = styled.div`
    margin: 4rem 1.5rem;
    text-align: center;
    display: block;
    height: 250px;
`

const Title = styled.h2`
    text-transform: uppercase;
    font-size: 1.5rem;
    color: ${CHARCOAL};
    font-weight: 900;
    letter-spacing: 0.15px;
    margin: 2rem;
    
`

const Hero = () => {
    return(
        <HeroLabel>
            <Title>What's for dinner?</Title>
        </HeroLabel>
    )
}

export default Hero;