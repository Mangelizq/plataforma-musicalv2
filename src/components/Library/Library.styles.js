import styled from 'styled-components';

export const LibraryContainer = styled.section`padding: ${({ theme }) => theme.spacing.lg}; border: 1px solid rgba(200, 240, 74, 0.12); border-radius: ${({ theme }) => theme.radii.large}; background: ${({ theme }) => theme.colors.surface};`;
export const LibraryHeader = styled.div`margin-bottom: 20px; padding-bottom: 18px; border-bottom: 1px solid ${({ theme }) => theme.borders.subtle};`;
export const TitleRow = styled.div`display: flex; align-items: center; gap: 14px;`;
export const Icon = styled.span`display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 52px; height: 52px; border-radius: 12px; background: linear-gradient(135deg, #1e3a1e, #2a5c1a); font-size: 28px;`;
export const Title = styled.h2`margin-bottom: 4px; color: ${({ theme }) => theme.colors.primary}; font-family: ${({ theme }) => theme.fonts.heading}; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;`;
export const Subtitle = styled.p`color: ${({ theme }) => theme.colors.muted}; font-size: 12px;`;
export const Empty = styled.div`display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 40px 20px; text-align: center;`;
export const EmptyIcon = styled.span`font-size: 40px; opacity: 0.35;`;
export const EmptyText = styled.p`max-width: 280px; color: ${({ theme }) => theme.colors.muted}; font-size: 14px; line-height: 1.6;`;
export const ListHeader = styled.div`display: grid; grid-template-columns: 36px 1fr 190px 110px 54px auto; gap: 10px; margin-bottom: 4px; padding: 0 14px 8px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: 36px 1fr auto; }`;
export const HeaderCell = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-align: ${({ $align }) => $align || 'left'};
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { display: ${({ $hideTablet }) => $hideTablet ? 'none' : 'block'}; }
`;
export const List = styled.ol`display: flex; flex-direction: column; gap: 2px; list-style: none;`;
