//Require Mongoose
const mongoose = require("mongoose");

//Creating a schema class
const Schema = mongoose.Schema;

//Defining my new Schema
var ArticleSchema = new Schema({

  //Creating the Collection

  /**Title is a required string**/
  title:{
    type:String,
    requried:true
  },

  /**Link is also a required string**/
  link:{
    type:String,
    required:[true, "Enter the URL"]
  },

  /**Not required but have the user tell about the link if they would like**/
  note:{
    type:mongoose.Schema.Types.ObjectId,
    index:true,
    unique:true,
    trim: true,
    ref: "Note",
    date: {type: Date, default: Date.now },
  }
});

//Creating the model Article [mongoose.model(modelName, schema)]
const Article = mongoose.model("Article", ArticleSchema);

//Export the model
module.exports = Article;
