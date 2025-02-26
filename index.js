
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
app.use(express.json());

app.post("/todo",(req,res)=>{
  const title = req.body.title;
  const description = req.body.description;
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload.success){
    res.status(411).json({
      msg:"You sent the wrong input"
    })
    return;
  }
  //put it in mongodb
});

app.get("/todos",(req,res)=>{


});

app.put("/completed",(req,res)=>{
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if(!parsedPayload.success){
    res.status(411).json({
      msg:"wrong input"
    })
    return;
  }
})


app.listen(3001,()=>{
  console.log('Server is running on localhost 3000 ');
  
})