import OpenWeatherMap from '../../utils/OpenWeatherMap';
import getForecast from './getForecast';

describe('getForecast', () => {
  beforeEach(() => {
    jest.spyOn(OpenWeatherMap, 'get');
  });

  afterEach(() => {
    OpenWeatherMap.get.mockRestore();
  })

  it('should use OpenWeatherMap to get data', async () => {
    OpenWeatherMap.get.mockResolvedValue();

    const cityId = '1000';
    await getForecast(cityId);

    expect(OpenWeatherMap.get).toBeCalled();
    expect(OpenWeatherMap.get).toBeCalledWith('/forecast', {
      params: {
        id: cityId,
      },
    });
  });

  it('should resolve get data', async () => {
    const data = {
      cod: '200',
      message: 0,
      cnt: 40,
      list: [{
        dt: 1578409200,
        main: {
          temp: 284.92,
          feels_like: 281.38,
          temp_min: 283.58,
          temp_max: 284.92,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1016,
          humidity: 90,
          temp_kf: 1.34,
        },
        weather: [{
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        }],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.19,
          deg: 211,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-01-07 15:00:00',
      }, {
        // ... Every 3 hours data for next 5 days
      }],
      city: {
        id: 2643743,
        name: 'London',
        coord: {
          lat: 51.5073,
          lon: -0.1277,
        },
        country: 'GB',
        timezone: 0,
        sunrise: 1578384285,
        sunset: 1578413272,
      },
    };

    OpenWeatherMap.get.mockResolvedValue({ data });

    const response = await getForecast('1000');

    expect(response.data).toBe(data);

  });
});