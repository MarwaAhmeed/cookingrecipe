const Recipe = require("../models/recipe");

const findOne = (id) => {
  return Recipe.findById(id);
};

const find = () => {
  return Recipe.find();
};

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
  find,
  delOne,
  editOne,
};
