import produce from 'immer';

const initialState = {};

const headerReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, () => {
    switch (action.type) {
      default:
        break;
    }
  });

export default headerReducer;
