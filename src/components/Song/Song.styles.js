import styled from 'styled-components';

export const SongTitle = styled.span`overflow: hidden; color: ${({ theme }) => theme.colors.text}; font-size: 14px; font-weight: 500; text-overflow: ellipsis; white-space: nowrap;`;
export const SongRow = styled.div`
  display: grid;
  grid-template-columns: 36px 1fr 190px 110px 54px auto;
  gap: 10px;
  align-items: center;
  padding: 10px 14px;
  border: 1px solid ${({ $inLibrary }) => $inLibrary ? 'rgba(200, 240, 74, 0.1)' : 'transparent'};
  border-radius: ${({ theme }) => theme.radii.medium};
  background: ${({ $inLibrary }) => $inLibrary ? 'rgba(200, 240, 74, 0.04)' : 'transparent'};
  transition: background 0.15s ease, border-color 0.15s ease;
  &:hover { background: ${({ theme }) => theme.colors.surfaceHover}; }
  ${SongTitle} { color: ${({ $inLibrary, theme }) => $inLibrary ? theme.colors.primary : theme.colors.text}; }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: 36px 1fr auto; }
`;
export const SongNumber = styled.span`color: ${({ theme }) => theme.colors.muted}; font-size: 13px; font-variant-numeric: tabular-nums; text-align: center;`;
export const SongInfo = styled.div`display: flex; flex-direction: column; gap: 2px; min-width: 0;`;
export const SongArtist = styled.span`overflow: hidden; color: ${({ theme }) => theme.colors.textSecondary}; font-size: 12px; text-overflow: ellipsis; white-space: nowrap;`;
export const SongAlbum = styled.span`overflow: hidden; color: ${({ theme }) => theme.colors.textSecondary}; font-size: 12px; text-overflow: ellipsis; white-space: nowrap; @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { display: none; }`;
export const SongGenre = styled.span`overflow: hidden; padding: 3px 8px; border: 1px solid ${({ theme }) => theme.borders.subtle}; border-radius: ${({ theme }) => theme.radii.pill}; background: ${({ theme }) => theme.colors.surfaceAlt}; color: ${({ theme }) => theme.colors.muted}; font-size: 11px; text-align: center; text-overflow: ellipsis; white-space: nowrap; @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { display: none; }`;
export const SongDuration = styled.span`color: ${({ theme }) => theme.colors.textSecondary}; font-size: 12px; font-variant-numeric: tabular-nums; text-align: right; @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { display: none; }`;
export const Actions = styled.div`display: flex; justify-content: flex-end;`;
export const ActionButton = styled.button`
  padding: 5px 12px;
  border: 1px solid ${({ $variant, theme }) => $variant === 'remove' ? 'rgba(240, 74, 122, 0.2)' : theme.borders.primary};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ $variant, $saved }) => $variant === 'remove' ? 'rgba(240, 74, 122, 0.1)' : $saved ? 'rgba(200, 240, 74, 0.06)' : 'rgba(200, 240, 74, 0.12)'};
  color: ${({ $variant, $saved, theme }) => $variant === 'remove' ? theme.colors.danger : $saved ? '#6a8030' : theme.colors.primary};
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.18s ease;
  &:hover:not(:disabled) { background: ${({ $variant, theme }) => $variant === 'remove' ? theme.colors.danger : theme.colors.primary}; color: ${({ $variant, theme }) => $variant === 'remove' ? theme.colors.white : theme.colors.background}; transform: scale(1.04); }
  &:disabled { cursor: default; }
`;
