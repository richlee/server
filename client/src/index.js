// starting up the Redux side of things

// register the root component, but not a lot of React config here

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));