import React from 'react';
import logoConexão from './logo-conexão.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logoConexão} className="logo-conexão" alt="logo" />
        <h1>Márcio Trovão <strong>MDSSCML</strong></h1>
    </div>
  );
}

export default App;
