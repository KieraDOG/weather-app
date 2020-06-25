import setCity from './setCity';
import { SET_CITY } from '../../type';

describe('setCity', () => {
  it('returns action', () => {
    const city = {
      name: 'Melbourne',
      id: 2158177,
    };

    const action = setCity(city);

    expect(action).toEqual({
      type: SET_CITY,
      city,
    });
  });
});