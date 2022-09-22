import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';

import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={5} />
    {/* <FirstApp title="Hola, Soy Vegeta" subtitle={'No hay subtítulo'} name={"Fernando Herrera"} /> */}
  </React.StrictMode>
)
