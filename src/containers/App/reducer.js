import produce from 'immer';

export const initialState = {
  isToggleMenu: false,
};

const appReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      default:
        break;
    }
  });

export default appReducer;
