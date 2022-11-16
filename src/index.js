import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreContext from './storeContext';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    // <StoreContext.Provider value={store}>
      <React.StrictMode>
        
        <App 
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
        />
        
        
      </React.StrictMode>
      
    // </StoreContext.Provider>
    
  )
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

