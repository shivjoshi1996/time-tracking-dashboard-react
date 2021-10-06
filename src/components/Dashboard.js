import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';
import TimeCard from './TimeCard';

const StyledDashboardGrid = styled.div`
  display: grid;
  grid-row-gap: 1.5rem;
  padding: 5.0625rem 0px;

  @media (min-width: 768px) {
    grid-template-areas:
      'profilecard timecard timecard timecard'
      'profilecard timecard timecard timecard';
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 255px 255px;
    align-items: stretch;
    max-width: 1110px;
    margin: 0 auto;
  }
`;

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [timeFilter, setTimeFilter] = useState('daily');
  const [timeframe, setTimeframe] = useState('Yesterday');

  // Initial Data Retrieval from JSON file
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((myJson) => {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  // Filtering JSON data based on which time filter has been selected
  const filteredData = data.map((item) => {
    const newObject = {};
    newObject.title = item.title;
    newObject[timeFilter] = item.timeframes[`${timeFilter}`];
    return newObject;
  });

  return (
    <StyledDashboardGrid>
      <ProfileCard
        timeFilter={timeFilter}
        setTimeFilter={setTimeFilter}
        setTimeframe={setTimeframe}
      />
      {filteredData.map((item) => (
        <TimeCard
          key={item.title}
          title={item.title}
          timeframe={timeframe}
          current={item[timeFilter].current}
          previous={item[timeFilter].previous}
        />
      ))}
    </StyledDashboardGrid>
  );
}
