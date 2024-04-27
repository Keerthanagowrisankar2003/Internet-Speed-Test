const express = require('express');
const multer = require('multer');

const router = express.Router();

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Endpoint for handling file uploads
router.post('/upload', upload.single('file'), (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    // Measure the time it took to receive the file
    const endTime = Date.now();
    const startTime = req.file.fieldname === 'file' ? req.file.created : 0; // Adjust startTime based on multer version
    const durationSeconds = (endTime - startTime) / 1000; // convert to seconds
    
    // Calculate upload speed (assuming the file size is 1 MB)
    const fileSizeMb = 1; // 1 MB file size for upload test
    const speedMbps = fileSizeMb / durationSeconds;

    res.json({ uploadSpeed: speedMbps });
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
