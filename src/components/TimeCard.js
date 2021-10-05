import styled from 'styled-components';

const StyledTimeCardContainer = styled.div`
  background-color: ${(props) => props.theme.colors[props.background]};
  width: 90%;
  margin: 0 auto;
  border-radius: 15px;
`;

export default function TimeCard({ title, current, previous }) {
  console.log(title);
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
      <img src={imageSrc} alt={`${title} icon`} />
      <p>{title}</p>
      <h2>{current}hrs</h2>
      <p>Last Week - {previous}hrs</p>
    </StyledTimeCardContainer>
  );
}
