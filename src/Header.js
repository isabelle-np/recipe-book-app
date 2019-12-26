import React from 'react';
import styled from 'styled-components';
import logo from './assets/delish.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {TEAL, LIGHTBLUE, FADEDBLUE} from './Theme';
import Button from './components/Button/Button'

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 3.75rem;    
    padding: 0 80px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
    position: fixed;
`

const Menu = styled(FontAwesomeIcon)`
    font-size: 24px;
    color: TEAL;
    vertical-align: 0;
    padding: 0 20px 0 0;
    margin: 1rem 0;
`

const Logo = styled.img`
    width: 104px;
    margin: 1rem 0;
    text-align: left;
`

const SignIn = styled.a`
    text-transform: uppercase;
    font-weight: 700;
`

const SubscribeButton = styled(Button)`
    position: absolute;

    
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Menu icon={faBars}/>
            <Logo src={logo} alt="Logo"/>
            <SubscribeButton>Subscribe</SubscribeButton>
            <SignIn>Sign In</SignIn>
        </HeaderWrapper>
    )
}

export default Header;