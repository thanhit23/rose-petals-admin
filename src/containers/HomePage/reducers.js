import produce from 'immer';

const initialState = {};

const headerReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      default:
        break;
    }
  });

export default headerReducer;
