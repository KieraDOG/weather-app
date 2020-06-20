import React from 'react';
import City from './components/City';
import getWeathers from '../../apis/getWeathers';
import { render } from '@testing-library/react';
import OtherCities, { CITIES } from './OtherCities';

jest.mock('./components/City', () => jest.fn(() => '<City />'));
jest.mock('../../apis/getWeathers', () => jest.fn());

describe('<OtherCities />', () => {
  describe('On loading', () => {
    let renderResult;

    beforeEach(() => {
      City.mockClear();
      getWeathers.mockClear();
      
      getWeathers.mockImplementation(() => new Promise(() => {}));
      renderResult = render(<OtherCities />);
    });

    it('should call getWeathers with city ids', () => {
      expect(getWeathers).toBeCalledWith(CITIES.map((c) => c.id));
    });

    it('should renders loading', () => {
      const { getByText } = renderResult;

      expect(getByText('Loading...')).toBeInTheDocument();
    });

    it('should not call <City />', () => {
      expect(City).not.toBeCalled();
    });
  });

  describe('On loaded', () => {
    let renderResult;

    const weathers = {
      list: [{
        id: 'ID',
        name: 'Melbourne',
        main: { temp: 10 },
        weather: [{
          icon: '01d',
          main: 'Clouds',
        }],
      }],
    };
  
    beforeEach(() => {
      City.mockClear();
      getWeathers.mockClear();

      getWeathers.mockResolvedValue({
        data: weathers,
      });

      renderResult = render(<OtherCities />);
    });

    it('should call getWeathers with city ids', () => {
      expect(getWeathers).toBeCalledWith(CITIES.map((c) => c.id));
    });

    it('should not render loading', () => {
      const { queryByText } = renderResult;

      expect(queryByText('Loading...')).not.toBeInTheDocument();
    });

    it('should render <City />', () => {
      weathers.list.forEach((item) => {
        expect(City).toBeCalledWith({
          name: item.name,
          temperature: parseInt(item.main.temp),
          weather: {
            icon: item.weather[0].icon,
            description: item.weather[0].main,
          }
        }, expect.anything());
      });
    });
  });
});