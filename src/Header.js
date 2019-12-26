import React from 'react';
import styled from 'styled-components';
import logo from './delish.png';

const Logo = styled.img`
    width: 104px;
    margin: 1rem;
    text-align: left;
    
`
const HeaderWrapper = styled.div`
    width: 100vw;
    height: 3.75rem;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
    position: fixed;
    margin: 0;
    text-align: center;
    clear: both;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <a class="nav-button nav-sidepanel-button show-menu" href="#sidepanel" title="Navigation">
				<span class="icon icon-menu"></span>
			</a>
            <Logo src={logo} alt="Logo"/>
            
        </HeaderWrapper>
    )
}

export default Header;