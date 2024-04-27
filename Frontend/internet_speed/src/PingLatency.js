import React, { useState, useEffect } from 'react';
import DownloadSpeed from './DownloadSpeed';
import UploadSpeed from './UploadSpeed';
import axiosInstance from './axios';
import './PingLatency.scss'; // Import the CSS file

function PingLatency() {
  const [pingLatency, setPingLatency] = useState(null);

  useEffect(() => {
    const measurePingLatency = async () => {
      try {
        const startTime = Date.now();
        await axiosInstance.post('/ping', { data: 'Hi' });
        const endTime = Date.now();
        const latency = endTime - startTime;
        setPingLatency(latency);
      } catch (error) {
        console.error('Error measuring ping latency:', error);
      }
    };

    measurePingLatency();
  }, []);

  return (
    <div className="App">
      <h1 className="title">Network Speed Test</h1>
      <p className="description">Ping Latency: {pingLatency !== null ? `${pingLatency} ms` : 'Measuring...'}</p>
      <div className="speed-meter">
        <div className="needle"></div>
      </div>
      <p className="speed-value">Speed Value</p>
      <DownloadSpeed />
      <UploadSpeed />
    </div>
  );
}

export default PingLatency;