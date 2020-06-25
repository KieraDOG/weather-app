import { combineReducers, createStore } from 'redux';
import city from './city';

// const reducer = (state, action) => ({
//   city: city(state.city, action),
// });

const reducer = combineReducers({
  city,
});

export default createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
