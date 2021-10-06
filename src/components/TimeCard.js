import styled from 'styled-components';

const StyledTimeCardContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: 15px;
`;

const StyledTimeCardIconContainer = styled.div`
  height: 38px;
  border-radius: 15px 15px 0px 0px;
  overflow: hidden;
  position: relative;
`;

const StyledTimeCardIcon = styled.img`
  right: 20px;
  transform: translateY(-10px);
  position: absolute;
`;

const StyledTimeCardBottomContainer = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 15px;
  height: 122px;
  width: 100%;
  bottom: 0;
  transform: translateY(-10px);

  @media (min-width: 768px) {
    min-height: 90%;
  }

  h2 {
    font-weight: 300;
    font-size: 2rem;

    @media (min-width: 768px) {
      grid-area: hours;
      font-size: 3.5rem;
    }
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

  @media (min-width: 768px) {
    grid-template-areas:
      'title elipsis'
      'hours hours'
      'previous previous';
  }
`;

const StyledTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

const StyledPreviousHours = styled.p`
  text-align: right;
  color: ${({ theme }) => theme.colors.accent};

  @media (min-width: 768px) {
    grid-area: previous;
    text-align: left;
  }
`;

export default function TimeCard({ title, current, previous, timeframe }) {
  // Getting correct image based on the title prop
  const titleFormatted = title.replace(/\s+/g, '-').toLowerCase();
  const imageSrc = `/icon-${titleFormatted}.svg`;

  // Getting correct background color based on title prop
  let background = 'white';

  switch (title) {
    case 'Work':
      background = 'hsl(15, 100%, 70%)';
      break;
    case 'Play':
      background = 'hsl(195, 74%, 62%)';
      break;
    case 'Study':
      background = 'hsl(348, 100%, 68%)';
      break;
    case 'Exercise':
      background = 'hsl(145, 58%, 55%)';
      break;
    case 'Social':
      background = 'hsl(264, 64%, 52%)';
      break;
    case 'Self Care':
      background = 'hsl(43, 84%, 65%)';
      break;
    default:
      background = 'white';
  }

  return (
    <StyledTimeCardContainer background={background}>
      <StyledTimeCardIconContainer style={{ backgroundColor: background }}>
        <StyledTimeCardIcon src={imageSrc} alt={`${title} icon`} />
      </StyledTimeCardIconContainer>
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
