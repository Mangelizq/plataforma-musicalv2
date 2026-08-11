import React from "react";
import {
  HeaderContainer,
  HeaderInner,
  Logo,
  LogoIcon,
  LogoText,
  Nav,
  NavItem,
  Subtitle,
  Title,
} from "./Header.styles";

function Header() {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>
          <LogoIcon>♪</LogoIcon>
          <LogoText>
            <Title>Mi Plataforma Musical</Title>
            <Subtitle>Tu colección musical personal</Subtitle>
          </LogoText>
        </Logo>
        <Nav>
          <NavItem $active>Canciones</NavItem>
          <NavItem>Artistas</NavItem>
          <NavItem>Álbumes</NavItem>
        </Nav>
      </HeaderInner>
    </HeaderContainer>
  );
}

export default Header;
