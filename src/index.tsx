import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from '@/App';

// Import styles.
import '@/assets/sass/_reset.scss';
import '@/index.scss'

ReactDOM.render(
  <Router children={ <App /> }/>,
  document.getElementById('root')
);
