// Create Folder
// npm init -y
// npm install express
// create Instance express
// Provide Port : 8000
// basic route /


import express from "express";
// import students from "./routes/students.js";
const app = express();

//HTTP methods
// Get -> retrive data
// Post -> create data/ insert data
// Put -> completely update data 
// ALL -> any HTTP request method
// Delete -> delete data
// Patch -> update data partially



//basic  routing
// app.get("/" , (req, res) =>{
//     res.send("Welcome to Express Js !")
// })
// app.get("/about" , (req, res) => {
//     res.send("<h1>Welcome to about page</h1>")
// })

// String pattern path 
// app.get("/ab?cd" , (req, res) => {
//     res.send("<h1>if user hit (acd) or (abcd) then this page will open</h1>")
// });


// regex -> it is used to match the pattern
// app.get(/x/ , (req, res) => {
//     res.send("<h1>If the path  includes the letter x then this page will open</h1>")
// })

//Callback functions

//next() -> it will call the next middleware function
//  const cb1 = (req, res, next) => {
//     console.log("first callback")
//     next()
//  }
//  const cb2 = (req, res, next) => {
//     console.log("second callback")
//     next()
//  }
//  const cb3 = (req, res, next) => {
//     console.log("third callback")
//     next()
//  }
// app.get("/crazyness" , [cb1, cb2, cb3] , (req, res, next) => {
//     console.log("fourth callback")
//     next()
// } , (req, res) => {
//     res.send("<h1>Welcome to crazyness page</h1>")
// })


//HTTP methods -> get , put , post , delete 

// app.get("/students" , (req, res) =>{
//     res.send("All students")
// })
// app.post("/students", (req, res) => {
//   res.send("New student added");
// });

// app.put("/students", (req, res) => {
//   res.send("Student updated");
// });

// app.delete("/students", (req, res) => {
//   res.send("Student deleted");
// });



// Refactor using route()

// app
//   .route("/student")
//   .get((req, res) => res.send("All students"))
//   .post((req, res) => res.send("New student added"))
//   .put((req, res) => res.send("Student updated"))
//   .delete((req, res) => res.send("Student deleted"));



// app.use("/students" , students)

//Route params
// app.get("/student/delete/:id" , (req, res)=>{
//     res.send(req.params.id)
// })



app.listen(8000, () => {
	console.log("Server is running on port 8000");
});