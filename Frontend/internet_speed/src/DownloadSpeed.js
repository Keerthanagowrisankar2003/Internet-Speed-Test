import React, { useState, useEffect } from 'react';
import axiosInstance from './axios';

function DownloadSpeed({ onDownloadSpeedUpdate }) {
  
  const [downloadSpeed, setDownloadSpeed] = useState(null);

  useEffect(() => {
    const measureDownloadSpeed = async () => {
      try {
        const startTime = Date.now();
        await axiosInstance.get('/download'); // Endpoint for downloading file
        const endTime = Date.now();
        const durationSeconds = (endTime - startTime) / 1000; // convert to seconds
        const fileSizeMb = 10; // Size of the downloaded file in MB
        const speedMbps = fileSizeMb / durationSeconds;
        setDownloadSpeed(speedMbps);
        onDownloadSpeedUpdate(speedMbps); // Notify parent component of download speed
      } catch (error) {
        console.error('Error measuring download speed:', error);
      }
    };

    measureDownloadSpeed();
  }, [onDownloadSpeedUpdate]);

  return (
    <p>Download Speed: {downloadSpeed !== null ? `${downloadSpeed.toFixed(2)} Mbps` : 'Measuring...'}</p>
  );
}

export default DownloadSpeed;
