// Create Folder
// npm init -y
// npm install express
// create Instance express
// Provide Port : 8000
// basic route /


import express from "express";

const app = express();

//HTTP methods
// Get -> retrive data
// Post -> create data/ insert data
// Put -> completely update data 
// ALL -> any HTTP request method
// Delete -> delete data
// Patch -> update data partially



//basic  routing
app.get("/" , (req, res) =>{
    res.send("Welcome to Express Js !")
})
app.get("/about" , (req, res) => {
    res.send("<h1>Welcome to about page</h1>")
})
app.listen(8000, () => {
	console.log("Server is running on port 8000");
});