const Recipe = require("../models/recipe");

const findOne = (id) => {
  return Recipe.findById(id);
};

const findAll = () => {
  return Recipe.find();
};
const findByRecipeType = (recipeType) => {
  return Recipe.find({recipeType:recipeType})
}
const create = (body) => {
  return Recipe.create(body);
};

const delOne = (id) => {
  console.log(id)
  return Recipe.findByIdAndDelete(id.id);
};

const editOne = (id, body) => {
  return Recipe.findByIdAndUpdate(id.id, body, { new: true });
};

module.exports = {
  create,
  findOne,
  findAll,
  delOne,
  editOne,
  findByRecipeType
};
