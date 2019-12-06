import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header';
import { Landing } from './component/Landing';
import { About } from './component/About';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Landing />
      <About />
    </div>
  );
}

export default App;
