import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/delish.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {TEAL, CHARCOAL} from '../../Theme';
import Button from '../Button/Button'

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 3.75rem;    
    padding: 0 80px 0 80px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
`

const Menu = styled(FontAwesomeIcon)`
    font-size: 24px;
    color: ${TEAL};
    vertical-align: 0;
    padding: 0 20px 0 0;
    margin: 1rem 0;
`

const Logo = styled.img`
    width: 104px;
    margin: 1rem 0;
    text-align: left;
`

const SubscribeButton = styled(Button)`
    
`

const SignIn = styled.a`
    text-transform: uppercase;
    font-weight: 700;
    margin: auto 0;
    text-align: right;
    color: ${CHARCOAL};
    font-size: 0.875rem;
`
const NavigationLeft = styled.div`
`
const NavigationRight = styled.div`
`

const Header = () => {
    return (
        <HeaderWrapper>
            <NavigationLeft>
                <Menu icon={faBars}/>
                <Logo src={logo} alt="Logo"/>
            </NavigationLeft>
            <NavigationRight>
                <SubscribeButton>Subscribe</SubscribeButton>
                <SignIn>Sign In</SignIn>
            </NavigationRight>
        </HeaderWrapper>
    )
}

export default Header;