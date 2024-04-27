const express = require('express');
const app = express();

// Endpoint for downloading a file
app.get('/download', (req, res) => {
  // Simulate a file download the file
  const file = generateLargeFile();
  // Simulate some delay before sending the file
  setTimeout(() => {
    res.setHeader('Content-Disposition', 'attachment; filename=largeFile.txt');
    res.setHeader('Content-Type', 'application/octet-stream');
    res.send(file);
  }, 1000); // 1 second delay
});

// Function to generate a large file (10MB)
function generateLargeFile() {
  const fileSizeBytes = 10 * 1024 * 1024; // 10MB
  const buffer = Buffer.alloc(fileSizeBytes);
  // Fill buffer with random data
  for (let i = 0; i < fileSizeBytes; i++) {
    buffer[i] = Math.floor(Math.random() * 256);
  }
  return buffer;
}

module.exports = app;
