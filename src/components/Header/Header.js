import React from "react";
import { useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>
          <LogoIcon aria-hidden="true">♪</LogoIcon>
          <LogoText>
            <Title as={isHome ? 'h1' : 'p'}>Mi Plataforma Musical</Title>
            <Subtitle lang="en">Music for everyone</Subtitle>
          </LogoText>
        </Logo>
        <Nav aria-label="Navegación principal">
          <NavItem to="/" aria-current={isHome ? 'page' : undefined}>
            Inicio
          </NavItem>
        </Nav>
      </HeaderInner> 
    </HeaderContainer>
  );
}

export default Header;
