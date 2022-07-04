const appRootPath = require("app-root-path");
const express = require("express");
const course = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
    { id: 3, name: 'course 3' },
    { id: 4, name: 'course4' },
    { id: 5, name: 'course 5' },
    { id: 6, name: 'course 6' },
    { id: 7, name: 'course 7' }
]

var bodyParser = require('body-parser');
// const userRoutes=require('./Routes/userRoutes');
const app = express();
const port = process.env.PORT || 5000;







app.use("/static", express.static(appRootPath + "/src/public"));
// app.use(bodyParser.urlencoded())
app.use(bodyParser.json());
app.get("/", (req, res, next) => res.send("Hello World!"));

app.get('/test', (req, res) => {
    res.send(course);
})

app.get('/test/:id', (req, res) => {

    const id = parseInt(req.params.id);
    console.log("typeeee----->", typeof (id))
    coursesList = course.find(c => c.id === id);
    if (!coursesList) {
        res.status(404).send("not found")
    } else {
        res.send(coursesList);
    }
})
app.post("/test", (req, res) => {
    const newcourse = {
        id: course.length + 1,
        name: req.body.name
    }
    course.push(newcourse)
    res.send(course)

})
app.listen(port, () => { console.log(`Example app listening on port ${port}!`) });
