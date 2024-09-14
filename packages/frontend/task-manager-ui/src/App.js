import { useEffect, useReducer } from 'react';
import logo from './logo.svg';
import combinedState, { storeReducer } from './store/store';
import AddItem from './components/AddItem/AddItem';
import { StoreContext } from './store/store';
import Loader from './components/Loader/Loader';
import { fetchStaticLabels } from './services/services';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(storeReducer, combinedState);
  const context = {
    state, dispatch
  };
  console.log('state ', state);
  const { content: { isFetchingLabels, labels } } = state;

  useEffect(() => {
    console.log('fetch static labels');
    fetchStaticLabels(dispatch);
  }, []);

  if (isFetchingLabels) {
    return (<Loader />);
  }

  return (
    <StoreContext.Provider value={context}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {labels.title}
          </p>
          <AddItem />
        </header>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
