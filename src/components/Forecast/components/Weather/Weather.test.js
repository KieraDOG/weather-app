import React from 'react';
import { render } from '@testing-library/react';
import Weather from './Weather';

describe('<Weather />', () => {
  let renderResult;

  const props = {
    day: 'MON',
    temperature: -1,
    weather: {
      icon: '01d',
      description: 'Snow'
    },
  };

  beforeEach(() => {
    renderResult = render(<Weather {...props} />);
  });

  it('should render day', () => {
    const { getByText } = renderResult;

    expect(getByText(props.day)).toBeInTheDocument();
  });

  it('should render day', () => {
    const { getByText } = renderResult;

    expect(getByText(props.temperature.toString())).toBeInTheDocument();
  });

  it('should weather icon', () => {
    const { getByAltText } = renderResult;

    expect(getByAltText(props.weather.description)).toBeInTheDocument();
    expect(getByAltText(props.weather.description).getAttribute('src'))
      .toBe(`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`);
  });
});