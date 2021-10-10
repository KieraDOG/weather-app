import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getDailyForecast from '../../apis/getDailyForecast';
import Heading from '../../components/Heading';
import Day from './components/Day';

const Days = styled.div`
  margin-top: 28px;
  display: flex;
`;

const MELBOURNE_CITY_ID = '2158177';

const Forecast = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDailyForecast(MELBOURNE_CITY_ID).then((response) => console.log(response));
  }, []); 

  useEffect(() => {
    if (!data) {
      return;
    }

    setLoading(false);
  }, [data]);

  return (
    <div>
      <Heading>Forecast</Heading>
      <Days>
        <Day dayOfWeek="MON" temperature="9" weather="rain" />
        <Day dayOfWeek="TUE" temperature="15" weather="rain" />
        <Day dayOfWeek="WED" temperature="11" weather="rain" />
        <Day dayOfWeek="THU" temperature="7" weather="rain" />
        <Day dayOfWeek="FRI" temperature="8" weather="rain" />
      </Days>
    </div>
  );
}

export default Forecast;
