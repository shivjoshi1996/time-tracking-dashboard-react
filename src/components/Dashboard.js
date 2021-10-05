import { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import TimeCard from './TimeCard';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [timeFilter, setTimeFilter] = useState('daily');

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

  const filteredData = data.map((item) => {
    const newObject = {};
    // newArray.push(item.title);
    // newArray.push(item.timeframes[`${timeFilter}`]);
    newObject.title = item.title;
    newObject[timeFilter] = item.timeframes[`${timeFilter}`];
    return newObject;
  });

  return (
    <>
      <ProfileCard timeFilter={timeFilter} setTimeFilter={setTimeFilter} />
      {filteredData.map((item) => (
        <TimeCard
          key={item.title}
          title={item.title}
          current={item[timeFilter].current}
          previous={item[timeFilter].previous}
        />
      ))}
    </>
  );
}
