import React from 'react'
import {FaFacebook, FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa';
import {SocialMediaWrap, SocialLogo, SocialIcons,SocialIconLink,WebsiteRights,FooterContainer,FooterLink,FooterLinkItems,FooterLinksContainer,FooterLinksWrapper,FooterLinkTitle,FooterWrap} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {
   const toggleHome =() =>{
        scroll.scrollToTop();
    };
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to ="/signin">About us</FooterLink>
                            <FooterLink to ="/signin">How it works</FooterLink>
                            <FooterLink to ="/signin">Testimonials</FooterLink>
                            <FooterLink to ="/signin">Careers</FooterLink>
                            <FooterLink to ="/signin">Investors</FooterLink>
                            <FooterLink to ="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to ="/signin">Submit video</FooterLink>
                            <FooterLink to ="/signin">Ambassadors</FooterLink>
                            <FooterLink to ="/signin">Agency</FooterLink>
                            <FooterLink to ="/signin">Influencer</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLink to ="/signin">About us</FooterLink>
                            <FooterLink to ="/signin">Contact</FooterLink>
                            <FooterLink to ="/signin">Support</FooterLink>
                            <FooterLink to ="/signin">Destiniation</FooterLink>
                            <FooterLink to ="/signin">Sponsorship</FooterLink>
                    </FooterLinkItems>
                    
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to ="/signin">Instagram</FooterLink>
                            <FooterLink to ="/signin">Facebook</FooterLink>
                            <FooterLink to ="/signin">Youtube</FooterLink>
                            <FooterLink to ="/signin">Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMediaWrap>
                <SocialLogo to ='/' onClick={toggleHome}>freemed</SocialLogo>
                <WebsiteRights>freemed @ {new Date().getFullYear()} All rights reserved</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='https://ko-kr.facebook.com/' target="_blank" aria-label="facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    
                    <SocialIconLink href='https://www.instagram.com/' target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    
                    <SocialIconLink href='https://www.youtube.com/' target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                    
                    <SocialIconLink href='https://twitter.com/?lang=ko' target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
