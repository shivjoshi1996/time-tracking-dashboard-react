import styled from 'styled-components';

const CardContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 15px;
`;

const CardProfileContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 15px;
  padding: 35px 5%;
  justify-content: center;

  img {
    height: 64px;
    width: 64px;
    border-radius: 60px;
    border: 2px solid white;
    margin-right: 20px;
  }

  p {
    font-size: 15px;
    color: rgba(187, 192, 255, 1);
    margin-bottom: 4px;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const CardProfileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardProfileButtonsContainer = styled.div`
  display: flex;
  padding: 25px;
  justify-content: space-around;
`;

const TimeButton = styled.button`
  background-color: transparent;
  font-family: 'Rubik', sans-serif;
  color: ${(props) => (props.active ? 'white' : 'hsla(235, 45%, 62%, 1)')};
  border: none;
  font-size: 1.125rem;
  cursor: pointer;
  transition: 0.7s;

  &:hover {
    color: white;
  }
`;

export default function ProfileCard({ timeFilter, setTimeFilter }) {
  return (
    <CardContainer>
      <CardProfileContainer>
        <img src="/image-jeremy.png" alt="Jeremy" />
        <CardProfileContentContainer>
          <p>Report for</p>
          <h2>Jeremy Robson</h2>
        </CardProfileContentContainer>
      </CardProfileContainer>
      <CardProfileButtonsContainer>
        <TimeButton
          active={timeFilter === 'daily'}
          type="button"
          onClick={() => setTimeFilter('daily')}
        >
          Daily
        </TimeButton>
        <TimeButton
          active={timeFilter === 'weekly'}
          type="button"
          onClick={() => setTimeFilter('weekly')}
        >
          Weekly
        </TimeButton>
        <TimeButton
          active={timeFilter === 'monthly'}
          type="button"
          onClick={() => setTimeFilter('monthly')}
        >
          Monthly
        </TimeButton>
      </CardProfileButtonsContainer>
    </CardContainer>
  );
}
