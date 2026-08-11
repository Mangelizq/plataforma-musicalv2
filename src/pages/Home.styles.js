import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 36px ${({ theme }) => theme.spacing.xl} 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 20px;
    padding: 20px ${({ theme }) => theme.spacing.md} 60px;
  }
`;

export const StatusMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: 30px 20px;
  border: 1px dashed ${({ $type, theme }) => $type === 'error' ? theme.borders.danger : theme.borders.soft};
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ $type, theme }) => $type === 'error' ? theme.colors.dangerText : theme.colors.textSecondary};
  text-align: center;
`;

export const RetryButton = styled.button`
  padding: 11px 22px;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.medium};
  background: ${({ $variant, theme }) => $variant === 'danger' ? theme.colors.danger : theme.colors.primary};
  color: ${({ $variant, theme }) => $variant === 'danger' ? theme.colors.white : theme.colors.background};
  font-weight: 700;
  &:hover { filter: brightness(1.08); }
`;
