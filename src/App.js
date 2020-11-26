import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Stories from './components/Stories'
import Modal from './components/Modal'
import Context from './global/Context'

function App() {
  return (
    <Context>
      <Navbar />
      <div className="Container">
        <Stories />
      </div>
      <Modal />
    </Context>
  );
}

export default App;
