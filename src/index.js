import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Adicione o Router envolvendo o App */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
