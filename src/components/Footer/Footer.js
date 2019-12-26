import React from 'react';
import styled from 'styled-components';
import {TEAL, WHITE} from '../../Theme';
import logo from '../../assets/delish-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.div`
    height: 320px;
    background: ${TEAL};
    color: ${WHITE};
`

const Logo = styled.img`
    fill: ${WHITE};
    width: 115px;
    margin: 30px 80px;
`

const List = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin: 15px 80px;
    width: 1120px;
    
`

const ListItem = styled.li`
    font-size: .8325rem;
    font-weight: 900;
        &:hover {
            color: #fecf70;
            cursor: pointer;
        }
    margin-right: 4rem;
    letter-spacing: 0.5px;
    width: 19%;
    text-align: left;
    height: 40px;
`
const SocialMedia = styled.div`

`

const SocialIcon = styled(FontAwesomeIcon)`
        color: #{WHITE};
`

const Footer = () => {
    return (
        <FooterWrapper>
            <Logo src={logo} alt="Logo"/>
            <SocialMedia>
                <SocialIcon icon={faFacebook}></SocialIcon>
            </SocialMedia>
            <List>
                <ListItem>Newsletter</ListItem>
                <ListItem>About Us</ListItem>
                <ListItem>Press Room</ListItem>
                <ListItem>Contact Us</ListItem>
                <ListItem>Best Products</ListItem>
                <ListItem>Community Guidelines</ListItem>
                <ListItem>Advertise Online</ListItem>
            </List>
        </FooterWrapper>
    )
};

export default Footer;