import { createWorker } from 'redux-webworker';
import { createStore } from 'redux';

const reducer = (state = { count: 1 }, action) => {
  for (let i = 0; i < 10000000; i++) {
    const t = Math.sin(i);
  }
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'SET_TIME': {
      return {
        ...state,
        time: 'worker ' + action.value.getTime(),
      };
    }
    default: {
      return state;
    }
  }
};

createWorker(() => {
  return createStore(reducer);
})
