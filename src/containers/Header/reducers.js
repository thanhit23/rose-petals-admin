import produce from 'immer';

const initialState = {
  filterProduct: [],
};

const headerReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, () => {
    switch (action.type) {
      default:
        return [];
    }
  });

export default headerReducer;
