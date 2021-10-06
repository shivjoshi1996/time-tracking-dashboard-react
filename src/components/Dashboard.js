import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';
import TimeCard from './TimeCard';

const StyledDashboardGrid = styled.div`
  display: grid;
  grid-row-gap: 1.5rem;
  padding: 5.0625rem 0px;
`;

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [timeFilter, setTimeFilter] = useState('daily');
  const [timeframe, setTimeframe] = useState('Yesterday');

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

  // useEffect(() => {
  //   switch (timeFilter) {
  //     case 'daily':
  //       setTimeframe('Yesterday');
  //       break;
  //     case 'weekly':
  //       setTimeframe('Last Week');
  //       break;
  //     case 'monthly':
  //       setTimeframe('Last Month');
  //       break;
  //     default:
  //       setTimeframe('Yesterday');
  //   }
  // }, [timeFilter]);

  const filteredData = data.map((item) => {
    const newObject = {};
    // newArray.push(item.title);
    // newArray.push(item.timeframes[`${timeFilter}`]);
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
