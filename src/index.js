import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import textSpliter from './views/js/textSplitter';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
        <Provider store={store} textSpliter={textSpliter}  > 
        <App />
        </Provider>
    </BrowserRouter>
    
);