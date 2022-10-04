import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/forecast';
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
