import React, { useEffect, useReducer, Suspense } from 'react';
import combinedState, { storeReducer } from './store/store';
import AddItem from './components/AddItem/AddItem';
import { StoreContext } from './store/store';
import Loader from './components/Loader/Loader';
import { fetchStaticLabels } from './services/services';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

const ServiceWorker = React.lazy(() => import('./components/ServiceWorker/ServiceWorker'));

const NotFound = () => {
  return <h1>'Page not found...'</h1>
};

function App() {
  const [state, dispatch] = useReducer(storeReducer, combinedState);
  const context = {
    state, dispatch
  };
  console.log('state ', state);
  const { content: { isFetchingLabels } } = state;

  useEffect(() => {
    fetchStaticLabels(dispatch);
  }, []);

  if (isFetchingLabels) {
    return (<Loader />);
  }

  return (
    <StoreContext.Provider value={context}>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route index element={
              <Suspense fallback={<Loader />}>
                <AddItem />
              </Suspense>
            }/>
            <Route path="serviceWorker" element={
              <Suspense fallback={<Loader />}>
                <ServiceWorker />
              </Suspense>
            }/>
            <Route path="*" element={
              <Suspense>
                <NotFound />
              </Suspense>
            }/>
          </Routes>
        </header>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
