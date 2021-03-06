const appRootPath = require("app-root-path");
const express = require("express");
const customVlidate=require('./_helper/validationRequest');
const Joi = require('joi');
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
    coursesList = course.find(c => c.id === id);
    if (!coursesList) {
        res.status(404).send("not found")
    } else {
        res.send(coursesList);
    }
})
app.post("/test", (req, res) => {
  const {eror}=customVlidate(req.body)
   if(eror) {
    res.status(400).send(eror.details[0].message);

   }else{
    const courseItem={
        id:course.length+1,
        name:req.body.name
    }
    course.push(courseItem);
    res.send(course);
   }

})

app.put('/test/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    coursesList = course.find(c => c.id === id);
    if (!coursesList) res.status(404).send("not found")
    const {error}=customVlidate(req.body)
   
    if(error){
        res.status(400).send(error.details[0].message)
    }else{
        selected=course.find(c=>c.id===parseInt(req.params.id))
        selected.name=req.body.name
    }

})

app.listen(port, () => { console.log(`Example app listening on port ${port}!`) });
