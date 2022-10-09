import { useReducer } from 'react';
import Context from './store/Context';
import appReducer, { initialState } from './containers/App/reducer';

function ProviderContext({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default ProviderContext;
