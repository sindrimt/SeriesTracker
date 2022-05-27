import React from "react";

import { FooterOuter, FooterLogoContainer, Logo, LogoTxt, InfoContainer, InfoHeader, InfoTxt } from "./FooterStyles";

import logo from "../../Assets/Images/logo.png";

const Footer = () => {
  return (
    <FooterOuter>
      <FooterLogoContainer>
        <Logo src={logo} alt="Logo" />
        <LogoTxt>Save your series' progress, rate them, discover new ones, and connect with friends!</LogoTxt>
      </FooterLogoContainer>

      <InfoContainer>
        <InfoHeader>Product</InfoHeader>
        <InfoTxt>Features</InfoTxt>
      </InfoContainer>
      <InfoContainer>
        <InfoHeader>Company</InfoHeader>
        <InfoTxt style={{ width: "30%" }}>About</InfoTxt>
        <InfoTxt>Contact us</InfoTxt>
      </InfoContainer>
      <InfoContainer>
        <InfoHeader>Support</InfoHeader>
        <InfoTxt>Report a bug</InfoTxt>
      </InfoContainer>
      <InfoContainer>
        <InfoHeader>Contact us</InfoHeader>
        <InfoTxt>seriestracker@company.com</InfoTxt>
        <InfoTxt style={{ width: "34%" }}>+47 111 22 333</InfoTxt>
      </InfoContainer>
    </FooterOuter>
  );
};

export default Footer;
