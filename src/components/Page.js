import styled from 'styled-components';
import Dashboard from './Dashboard';

const StyledPage = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
`;

export default function Page() {
  return (
    <StyledPage>
      <Dashboard />
    </StyledPage>
  );
}
