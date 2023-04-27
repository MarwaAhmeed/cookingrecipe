const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    recipeType: {
      type:String,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    instructions: {
      type: Array,
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
