const express = require("express");
const app = express();
const path = require("path");
/* running on local host */
const PORT = 5000;

// serving static files

app.use('/public', express.static(path.resolve(__dirname , "public")));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log("Listening at port: http://localhost:"+PORT);
})
