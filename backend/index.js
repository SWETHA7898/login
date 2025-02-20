const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;  // ✅ Define port correctly

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var uname = "swetha";
var pass = 123;

app.post("/login", (req, res) => {
    console.log(req.body);
    if (uname === req.body.username && pass == req.body.password) {
        res.send(true);
    } else {
        res.send(false);
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
