import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

// const StoreContext = React.createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));

// let rerenderEntireTree = (state) => {
let rerenderEntireTree = () => {
  root.render(
    // Или побровать тег сторконеткст сделать родительским
    <Provider store={store}>
      <React.StrictMode>
        
          <App 
            // state={state}
            // dispatch={store.dispatch.bind(store)}
            // store={store}
          />
        
        
        
      </React.StrictMode>
      
    </Provider>
    
  )
}

// rerenderEntireTree(store.getState());
rerenderEntireTree();

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

