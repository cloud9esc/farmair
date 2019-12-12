import React from 'react';
import './App.css';
import { Header } from './component/Header';
import { Landing } from './component/Landing';
import { About } from './component/About';
import { Service } from './component/Service';
import { People } from './component/People';
import { Contact } from './component/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Landing />
      <About />
      <Service />
      <People />
      <Contact />
    </div>
  );
}

export default App;
