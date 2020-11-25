const express = require('express');
const setlog = require('./middleWares/setlogs')
const app = express();
app.use(setlog);

app.get('', (req, res) => {
    res.send(req.log)
})

app.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080")
})