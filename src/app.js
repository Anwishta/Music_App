const express = require('express');
const app = express();

// const cors = require('cors');
app.get('/', (req, res) => {
    return res.json("Hello World")});

app.listen(4000, () => console.log("Server is running on port 4000"));