const express = require('express');
const cors = require('cors');
const pingRouter = require('./PingLatency');
const downloadRouter = require('./DownloadSpeed');
const UploadSpeedRouter = require('./UploadSpeed');


const app = express();
const PORT = 5000;

app.use(cors());
app.use(pingRouter);
app.use(downloadRouter);
app.use(UploadSpeedRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
