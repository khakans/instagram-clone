import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Stories from './components/Stories'
import Modal from './components/Modal'
import Posting from './components/Posting'
import Timeline from './components/Timeline'
import Context from './global/Context'

function App() {
  return (
    <Context>
      <Navbar />
      <div className="Container">
        <Stories />
        <Posting />
        <Timeline />
      </div>
      <Modal />
    </Context>
  );
}

export default App;
