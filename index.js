const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
const courses = require('./data/Courses.json')
const allCourses = require('./data/CoursesInfo.json')


const port = process.env.port || 5000;

app.get('/allCourses', (req, res) => {
    res.send(allCourses);
});

app.get('/', (req, res) => {
    res.send("courses api running");
});


app.get('/courses-category', (req, res) => {
    res.send(courses);
});


app.get('/allCourses/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = allCourses.find(course => course.id == id)
    res.send(singleCourse);
    if (!singleCourse) {
        res.send('data not found')
    }
    // console.log(req.params);
});

// app.get('/allCourses/:id', (req, res) => {
//     console.log(req.params.id);
//     const singleCourse = allCourses.find(course => course.id == id);
//     res.send(singleCourse);
//     if (!singleCourse) {
//         res.send('data not found')
//     }
// });

app.listen(port, () => {
    console.log("server is running ", port);
})