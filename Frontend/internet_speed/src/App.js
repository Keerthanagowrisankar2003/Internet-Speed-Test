import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PingLatency from './PingLatency';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<PingLatency/>} />
      </Routes>
      </Router>
      
    </div>
  )
}

export default App
