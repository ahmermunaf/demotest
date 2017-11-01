import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' 
import App_Container from './App_container.js';
import store from './store/index.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><App_Container /></Provider>, document.getElementById('root'));
registerServiceWorker();
