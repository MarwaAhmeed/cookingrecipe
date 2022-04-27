const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ingredient: {
      type: String,
      required: true,
    },
    recipe: {
      type: String,
      required: true,
    },
    image:{
        type:String,
        required:true
    }
  },
  { timestamps: true }
);


const RecipeModel = mongoose.model("Recipe", recipeSchema);
module.exports = RecipeModel;
