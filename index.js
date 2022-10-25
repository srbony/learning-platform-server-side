const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());


const port = process.env.port || 5000;
const courses = require('./data/Courses.json')

app.get('/', (req, res) => {
    res.send("courses api running");
});

app.get('/courses-category', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log("server is running ", port);
})