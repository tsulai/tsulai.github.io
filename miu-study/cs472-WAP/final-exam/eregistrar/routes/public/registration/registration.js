/**
 * registration.js
 */
 "use strict";

 const express = require("express");
 const path = require("path");
 const registrationRouter = express.Router();
 const studentDataStore = require("../../../datastore/datastore")
 const Student = require("../../../model/student")
 
 // Define registration page routes
 registrationRouter.get("/registration", (req, res) => {
     console.log(`Presenting Registraion Page`);
     const students = studentDataStore.getData()
    res.render("registration.pug", {students: students}) 
 });

 registrationRouter.post("/registration", (req, res) => {
    console.log(`Registraion Post`);
    const newStudent = new Student(req.body.txtStudentId,req.body.txtFullName, req.body.ddlLvlOfStudy)
    const result = studentDataStore.saveData(newStudent)
    console.log(result);
    res.redirect(303, "/registration");
});
 
 
 module.exports = registrationRouter;