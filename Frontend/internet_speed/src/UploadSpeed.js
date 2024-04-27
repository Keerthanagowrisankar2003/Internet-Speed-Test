import React, { useState, useEffect } from 'react';
import axiosInstance from './axios';

function UploadSpeed({ onUploadSpeedUpdate }) {
  const [uploadSpeed, setUploadSpeed] = useState(null);

  useEffect(() => {
    const measureUploadSpeed = async () => {
      try {
        const fileSizeMb = 1; // 1 MB file for upload test
        const formData = new FormData();
        // Create a blob of size 1 MB
        formData.append('file', new Blob([new ArrayBuffer(1024 * 1024 * fileSizeMb)], { type: 'application/octet-stream' }));

        const startTime = Date.now();
        await axiosInstance.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const endTime = Date.now();
        const durationSeconds = (endTime - startTime) / 1000; // convert to seconds
        const speedMbps = fileSizeMb / durationSeconds;
        setUploadSpeed(speedMbps);
        onUploadSpeedUpdate(speedMbps); // Notify parent component of upload speed
      } catch (error) {
        console.error('Error measuring upload speed:', error);
      }
    };

    measureUploadSpeed();
  }, [onUploadSpeedUpdate]);

  return (
    <p>Upload Speed: {uploadSpeed !== null ? `${uploadSpeed.toFixed(2)} Mbps` : 'Measuring...'}</p>
  );
}

export default UploadSpeed;
