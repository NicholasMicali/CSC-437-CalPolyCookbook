"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var recipes_exports = {};
__export(recipes_exports, {
  default: () => recipes_default
});
module.exports = __toCommonJS(recipes_exports);
var import_recipe2 = __toESM(require("./models/mongo/recipe"));
function index() {
  return import_recipe2.default.find();
}
function get(id) {
  return import_recipe2.default.findById(id).then((recipe) => recipe).catch((err) => {
    throw `${id} Not Found`;
  });
}
function create(recipeData) {
  const recipe = new import_recipe2.default(recipeData);
  return recipe.save();
}
function update(id, recipeData) {
  return new Promise((resolve, reject) => {
    import_recipe2.default.findByIdAndUpdate(id, recipeData, { new: true }).then((recipe) => {
      if (recipe)
        resolve(recipe);
      else
        reject(`${id} Not Found`);
    }).catch((err) => reject(err));
  });
}
function searchRecipes(searchTerm) {
  return new Promise((resolve, reject) => {
    import_recipe2.default.find(
      {
        title: { $regex: searchTerm, $options: "i" }
      }
    ).then((recipes) => {
      if (recipes)
        resolve(recipes);
      else
        reject("Failed to find profile to update");
    }).catch((err) => {
      console.log(err);
      console.error("Error updating profile with new recipe:", err);
    });
  });
}
var recipes_default = { index, get, create, update, searchRecipes };
