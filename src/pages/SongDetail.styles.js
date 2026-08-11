import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Main, RetryButton, StatusMessage } from './Home.styles';

export const DetailPage = styled(Main)``;
export const BackLink = styled(Link)`align-self: flex-start; color: ${({ theme }) => theme.colors.primary}; font-size: 14px; text-decoration: none;`;
export const DetailStatus = styled(StatusMessage)``;
export const DetailRetryButton = styled(RetryButton)``;
export const DetailCard = styled.article`display: grid; grid-template-columns: minmax(240px, 360px) 1fr; gap: 36px; padding: 28px; border: 1px solid ${({ theme }) => theme.borders.subtle}; border-radius: ${({ theme }) => theme.radii.large}; background: ${({ theme }) => theme.colors.surface}; @media (max-width: 720px) { grid-template-columns: 1fr; gap: 24px; padding: 20px; }`;
export const CoverWrap = styled.div`@media (max-width: 720px) { max-width: 360px; margin: 0 auto; }`;
export const CoverImage = styled.img`width: 100%; aspect-ratio: 1; border-radius: 12px; object-fit: cover;`;
export const CoverPlaceholder = styled.div`display: grid; place-items: center; width: 100%; aspect-ratio: 1; border-radius: 12px; background: ${({ theme }) => theme.colors.surfaceHover}; color: ${({ theme }) => theme.colors.muted}; font-size: 72px;`;
export const DetailContent = styled.div``;
export const Eyebrow = styled.span`color: ${({ theme }) => theme.colors.primary}; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;`;
export const AlbumTitle = styled.h1`margin: 8px 0 4px; color: ${({ theme }) => theme.colors.text}; font-family: ${({ theme }) => theme.fonts.heading}; font-size: clamp(28px, 5vw, 44px);`;
export const ArtistName = styled.p`color: ${({ theme }) => theme.colors.textSecondary}; font-size: 18px;`;
export const Facts = styled.dl`display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; margin: 28px 0; @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { grid-template-columns: 1fr; }`;
export const Fact = styled.div`padding-left: 10px; border-left: 2px solid ${({ theme }) => theme.colors.primary}; dt { color: ${({ theme }) => theme.colors.muted}; font-size: 11px; text-transform: uppercase; } dd { margin-top: 3px; color: ${({ theme }) => theme.colors.text}; font-size: 14px; }`;
export const Description = styled.p`color: ${({ theme }) => theme.colors.textSecondary}; font-size: 14px; line-height: 1.7; white-space: pre-line;`;
