import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header';
import { Landing } from './component/Landing';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
