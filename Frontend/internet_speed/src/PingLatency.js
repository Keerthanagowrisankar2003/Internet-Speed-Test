import React from 'react'
import  { useEffect, useState } from 'react';
import axiosInstance from './axios';
import './PingLatency.css';

function PingLatency() {
    const [pingLatency, setPingLatency] = useState(null);

    useEffect(() => {
      const measurePingLatency = async () => {
        try {
          const startTime = Date.now();
          await axiosInstance.post('/ping', { data: 'Hi' }); // Assuming the server is running on the same domain
          const endTime = Date.now();
          const latency = endTime - startTime;
          console.error(startTime);
          console.error(endTime);
          setPingLatency(latency);
        } catch (error) {
          console.error('Error measuring ping latency:', error);
        }
      };

      measurePingLatency();
    }, []);

    return (
        <div className="App">
        <h1>Network Speed Test</h1>
        <div className="speed-meter">
          <div className="needle" style={{transform: `rotate(${pingLatency !== null ? (pingLatency / 100) * 180 : 0}deg)`}}></div>
        </div>
        <p>Ping Latency: {pingLatency !== null ? `${pingLatency} ms` : 'Measuring...'}</p>
      </div>

    );
  }


export default PingLatency