const middlewareLocalStorage = store => next => action => {
  next(action);
  store.getState();
  switch (action.type) {
    default:
      break;
  }
};

export default middlewareLocalStorage;
