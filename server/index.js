const express = require('express');
const app = express();
const mysql = require('mysql');
var cors = require('cors');

app.use(cors({origin: true, credentials: true}));
app.use(express.json())


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "CST-Tables"

})

app.post('/create', (req, res) => {
    const name = req.body.name
    const code = req.body.code
    const credits = req.body.credits
    const link = req.body.link
    const color = req.body.color

    db.query(
        "INSERT INTO All-Courses (name, code, credits, link, color) VALUES (?,?,?,?,?)",
        [name, code, credits, link, color],
        (err, res) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values Inserted")
            }
        }
    );
});

app.listen(3001, () => {
    console.log("Server is running on port 3001")
});

