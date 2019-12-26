import React from 'react';
import styled from 'styled-components';
import {TEAL, WHITE, YELLOW} from '../../Theme';
import logo from '../../assets/delish-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterestP, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.div`
    height: 500px;
    background: ${TEAL};
    color: ${WHITE};
`

const Logo = styled.img`
    fill: ${WHITE};
    width: 115px;
    margin: 30px 80px;
    display: inline;
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
            color: ${YELLOW};
            cursor: pointer;
        }
    margin-right: 4rem;
    letter-spacing: 0.5px;
    width: 19%;
    text-align: left;
    height: 40px;
`
const SocialMediaIcons = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: auto;
`
const SocialMedia = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 640px;
`

const SocialIcon = styled(FontAwesomeIcon)`
        color: ${WHITE};
        font-size: 20px;
        &:hover {
            color: ${YELLOW};
            cursor: pointer;
        }
`

const ParentLogo = styled.img`
        width: 190px;
        margin-left: 80px;
        margin-bottom: 3rem;
`

const FooterCopy = styled.p`
    font-size: 0.75rem;
    margin-left: 80px;
    height: 35px;
    letter-spacing: 0.5px;
    font-weight: 300;
`

const LegalLinks = styled.ul`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 600px;
        margin-left: 80px;
`

const LegalLink = styled.li`
    font-size: 0.75rem;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <SocialMedia>
            <Logo src={logo} alt="Logo"/>
                <SocialMediaIcons>
                    <SocialIcon icon={faFacebookF}></SocialIcon>
                    <SocialIcon icon={faTwitter}></SocialIcon>
                    <SocialIcon icon={faPinterestP}></SocialIcon>
                    <SocialIcon icon={faInstagram}></SocialIcon>
                    <SocialIcon icon={faYoutube}></SocialIcon>
                </SocialMediaIcons>
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
            <ParentLogo data-src="https://assets.hearstapps.com/sites/delish/assets/images/logos/network-logo.fc987ac.png" class="footer-network-logo ls-is-cached lazyloaded" alt=" - A Part of Hearst Digital Media" src="https://assets.hearstapps.com/sites/delish/assets/images/logos/network-logo.fc987ac.png"></ParentLogo>
            <FooterCopy>A Part of Hearst Digital Media</FooterCopy>
            <FooterCopy>Delish participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites.</FooterCopy>
            <FooterCopy>©2019 Hearst Magazine Media, Inc. All Rights Reserved.
                </FooterCopy>
            <LegalLinks>
                <LegalLink>Privacy Notice</LegalLink>
                <LegalLink>Your California Privacy Rights</LegalLink>
                <LegalLink>Interest-Based Ads</LegalLink>
                <LegalLink>Terms of Use</LegalLink>
                <LegalLink>Site Map</LegalLink>
            </LegalLinks>
            </FooterWrapper>
    )
};

export default Footer;