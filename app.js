const express = require("express");
const app = express();

/* running on local host */
const PORT = 5000;

// serving static files

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.listen(PORT, () => {
    console.log("Listening at port: http://localhost:"+PORT);
})
