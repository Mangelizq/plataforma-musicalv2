import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme.borders.subtle};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  backdrop-filter: blur(12px);
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  height: 64px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const Logo = styled.div`display: flex; align-items: center; gap: 12px;`;
export const LogoIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: ${({ theme }) => theme.radii.medium};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-size: 20px;
`;
export const LogoText = styled.div`display: flex; flex-direction: column;`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.1;
`;
export const Subtitle = styled.span`color: ${({ theme }) => theme.colors.muted}; font-size: 11px; letter-spacing: 0.02em;`;
export const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { display: none; }
`;
export const NavItem = styled(Link)`
  padding: 7px ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.small};
  background: ${({ 'aria-current': current, theme }) => current ? theme.colors.primary : 'transparent'};
  color: ${({ 'aria-current': current, theme }) => current ? theme.colors.background : theme.colors.textSecondary};
  font-size: 13px;
  font-weight: ${({ 'aria-current': current }) => current ? 600 : 500};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ 'aria-current': current, theme }) => current ? theme.colors.primary : theme.colors.surfaceHover};
    color: ${({ 'aria-current': current, theme }) => current ? theme.colors.background : theme.colors.text};
  }
`;
