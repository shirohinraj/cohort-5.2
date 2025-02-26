const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://shirohinraj7:tatakae777@cluster0.yjzilvp.mongodb.net/5/cohort-5todo');
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});
const Todo = mongoose.model('Todo',todoSchema)