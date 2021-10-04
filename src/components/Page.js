import styled from 'styled-components';

const StyledPage = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export default function Page() {
  return <StyledPage>Yo</StyledPage>;
}
