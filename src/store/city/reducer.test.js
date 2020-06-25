import { SET_CITY } from './type';
import reducer from './reducer';

describe('reducer', () => {
  it(SET_CITY, () => {
    const state = {
      name: 'Sydney',
      id: 9860,
    };

    const city = {
      name: 'Melbourne',
      id: 74789,
    };

    const action = {
      type: SET_CITY,
      city,
    };

    const newState = reducer(state, action);

    expect(newState).toBe(city);
  });
});
