
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
app.use(express.json());

app.post("/todo",(req,res)=>{
  const title = req.body.title;
  const description = req.body.description;
  if(createTodo.parse(title) && updateTodo.parse(description)){
    //update todo

  }
});

app.get("/todos",(req,res)=>{


});

app.put("/completed",(req,res)=>{

})


app.listen(3001,()=>{
  console.log('Server is running on localhost 3000 ');
  
})