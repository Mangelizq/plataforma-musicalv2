import styled from 'styled-components';

export const SearchForm = styled.form`
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.borders.subtle};
  border-radius: ${({ theme }) => theme.radii.large};
  background: ${({ theme }) => theme.colors.surface};
`;
export const SearchLabel = styled.label`
  display: block;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;
  font-weight: 700;
`;
export const Controls = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { flex-direction: column; }
`;
export const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  padding: 12px 14px;
  border: 1px solid #30303d;
  border-radius: ${({ theme }) => theme.radii.medium};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  color: ${({ theme }) => theme.colors.text};

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(200, 240, 74, 0.1);
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;
export const SearchButton = styled.button`
  padding: 11px 22px;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.medium};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-weight: 700;
  &:hover { background: ${({ theme }) => theme.colors.primaryHover}; }
`;
