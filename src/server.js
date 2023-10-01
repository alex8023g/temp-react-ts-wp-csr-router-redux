const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use('/static', express.static('./dist'));
app.use('/img', express.static('./src/img'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

console.log('hi from server!ss');

app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
