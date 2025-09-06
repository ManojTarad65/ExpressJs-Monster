import express from "express"


const router = express.Router()

router.get("/all" , (req, res)=>{
    res.send("All students")
})

router.post("/create" , (req, res)=>{
    res.send("New student added")
})

router.put("/update" , (req, res)=>{
    res.send("Student updated")
})

router.delete("/delete" , (req, res)=>{
    res.send("Student deleted")
})

export default router