import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResultsContainer = styled.section`padding: ${({ theme }) => theme.spacing.lg}; border: 1px solid ${({ theme }) => theme.borders.subtle}; border-radius: ${({ theme }) => theme.radii.large}; background: ${({ theme }) => theme.colors.surface}; @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { padding: 18px; }`;
export const ResultsHeader = styled.div`margin-bottom: 20px; padding-bottom: 18px; border-bottom: 1px solid ${({ theme }) => theme.borders.subtle};`;
export const TitleRow = styled.div`display: flex; align-items: center; gap: 14px;`;
export const Icon = styled.span`display: flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 12px; background: linear-gradient(135deg, #1a2a4a, #1e3a6e); font-size: 24px;`;
export const ResultsTitle = styled.h2`margin-bottom: 4px; color: ${({ theme }) => theme.colors.text}; font-family: ${({ theme }) => theme.fonts.heading}; font-size: 22px; font-weight: 800;`;
export const ResultsSubtitle = styled.p`color: ${({ theme }) => theme.colors.muted}; font-size: 12px;`;
export const ResultsGrid = styled.div`display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 18px; @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { grid-template-columns: 1fr; }`;
export const AlbumCard = styled.article`
  overflow: hidden;
  border: 1px solid ${({ $saved, theme }) => $saved ? theme.borders.primary : 'rgba(255, 255, 255, 0.07)'};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  box-shadow: ${({ $saved }) => $saved ? '0 0 0 2px rgba(200, 240, 74, 0.06)' : 'none'};
  transition: border-color 0.2s ease, transform 0.2s ease;
  &:hover { border-color: rgba(200, 240, 74, 0.3); transform: translateY(-2px); }
`;
export const AlbumCover = styled.img`width: 100%; aspect-ratio: 1; object-fit: cover;`;
export const CoverPlaceholder = styled.div`display: grid; place-items: center; width: 100%; aspect-ratio: 1; background: ${({ theme }) => theme.colors.surfaceHover}; color: ${({ theme }) => theme.colors.muted}; font-size: 52px;`;
export const CardBody = styled.div`padding: ${({ theme }) => theme.spacing.md};`;
export const AlbumType = styled.span`color: ${({ theme }) => theme.colors.primary}; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;`;
export const AlbumTitle = styled.h3`overflow: hidden; margin: 6px 0 3px; color: ${({ theme }) => theme.colors.text}; font-family: ${({ theme }) => theme.fonts.heading}; font-size: 16px; text-overflow: ellipsis; white-space: nowrap;`;
export const ArtistName = styled.p`overflow: hidden; color: ${({ theme }) => theme.colors.textSecondary}; font-size: 12px; text-overflow: ellipsis; white-space: nowrap;`;
export const AlbumYear = styled(ArtistName)`margin-top: 5px; color: ${({ theme }) => theme.colors.muted};`;
export const CardActions = styled.div`display: flex; flex-wrap: wrap; gap: ${({ theme }) => theme.spacing.sm}; margin-top: ${({ theme }) => theme.spacing.md};`;
export const DetailsLink = styled(Link)`padding: 6px 10px; border: 1px solid ${({ theme }) => theme.borders.primary}; border-radius: ${({ theme }) => theme.radii.pill}; background: rgba(200, 240, 74, 0.1); color: ${({ theme }) => theme.colors.primary}; font-size: 11px; text-decoration: none; &:hover { background: ${({ theme }) => theme.colors.primary}; color: ${({ theme }) => theme.colors.background}; }`;
export const SaveButton = styled.button`
  padding: 6px 10px;
  border: 1px solid ${({ theme }) => theme.borders.primary};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ $saved }) => $saved ? 'rgba(200, 240, 74, 0.04)' : 'rgba(200, 240, 74, 0.1)'};
  color: ${({ $saved, theme }) => $saved ? theme.colors.muted : theme.colors.primary};
  font-size: 11px;
  opacity: ${({ $saved }) => $saved ? 0.7 : 1};
  &:hover:not(:disabled) { background: ${({ theme }) => theme.colors.primary}; color: ${({ theme }) => theme.colors.background}; }
`;
