import styled from 'styled-components';

const StyledTimeCardContainer = styled.div`
  background-color: ${(props) => props.theme.colors[props.background]};
  width: 90%;
  margin: 0 auto;
  border-radius: 15px;
  position: relative;
  height: 160px;
  overflow: hidden;
`;

const StyledTimeCardIcon = styled.img`
  position: absolute;
  right: 20px;
  transform: translateY(-5px);
`;

const StyledTimeCardBottomContainer = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 15px;
  position: absolute;
  height: 122px;
  width: 100%;
  bottom: 0;

  h2 {
    font-weight: 300;
    font-size: 2rem;
  }

  img {
    justify-self: end;
  }
`;

const StyledTimeCardContent = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const StyledTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

const StyledPreviousHours = styled.p`
  text-align: right;
  color: ${({ theme }) => theme.colors.accent};
`;

export default function TimeCard({ title, current, previous, timeframe }) {
  const titleFormatted = title.replace(/\s+/g, '-').toLowerCase();
  const imageSrc = `/icon-${titleFormatted}.svg`;

  let background = 'white';

  switch (title) {
    case 'Work':
      background = 'work';
      break;
    case 'Play':
      background = 'play';
      break;
    case 'Study':
      background = 'study';
      break;
    case 'Exercise':
      background = 'exercise';
      break;
    case 'Social':
      background = 'social';
      break;
    case 'Self Care':
      background = 'selfCare';
      break;
    default:
      background = 'white';
  }

  return (
    <StyledTimeCardContainer background={background}>
      <StyledTimeCardIcon src={imageSrc} alt={`${title} icon`} />
      <StyledTimeCardBottomContainer>
        <StyledTimeCardContent>
          <StyledTitle>{title}</StyledTitle>
          <img src="/icon-ellipsis.svg" alt="ellipsis" />
          <h2>{current}hrs</h2>
          <StyledPreviousHours>
            {timeframe} - {previous}hrs
          </StyledPreviousHours>
        </StyledTimeCardContent>
      </StyledTimeCardBottomContainer>
    </StyledTimeCardContainer>
  );
}
