import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as registerServiceWorker from './registServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();