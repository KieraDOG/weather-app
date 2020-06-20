import React from 'react';
import City from './City';
import { render } from '@testing-library/react';

describe('<City />', () => {
  let renderResult;

  const props = {
    name: 'Melbourne',
    weather: {
      icon: '01d',
      description: 'Clouds',
    },
    temperature: 16,
  };

  beforeEach(() => {
    renderResult = render(<City {...props} />);
  });

  it('should render name', () => {
    const { getByText } = renderResult;

    expect(getByText(props.name)).toBeInTheDocument();
  });

  it('should render temperature', () => {
    const { getByText } = renderResult;

    expect(getByText(props.temperature.toString())).toBeInTheDocument();
  });

  it('should render weather image', () => {
    const { getByAltText } = renderResult;

    expect(getByAltText(props.weather.description)).toBeInTheDocument();
    expect(getByAltText(props.weather.description).getAttribute('src'))
      .toBe(`http://openweathermap.org/img/wn/${props.weather.icon}.png`);
  });
});