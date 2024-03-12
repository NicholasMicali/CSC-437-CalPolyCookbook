"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_express = __toESM(require("express"));
var import_cors = __toESM(require("cors"));
var import_mongoConnect = require("./mongoConnect");
var import_profiles = __toESM(require("./profiles"));
var import_recipes = __toESM(require("./recipes"));
(0, import_mongoConnect.connect)("cook");
const app = (0, import_express.default)();
const port = process.env.PORT || 3e3;
app.use((0, import_cors.default)());
app.use(import_express.default.json({ limit: "500kb" }));
app.get("/hello", (req, res) => {
  res.send("Hello, World");
});
app.get("/api/profiles/:email", (req, res) => {
  const { email } = req.params;
  import_profiles.default.get(email).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
app.post("/api/profiles/auth", (req, res) => {
  const { email, password } = req.body;
  import_profiles.default.auth(email, password).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
app.post("/api/profiles", (req, res) => {
  const newProfile = req.body;
  import_profiles.default.create(newProfile).then((profile) => res.status(201).send(profile)).catch((err) => res.status(500).send(err));
});
app.put("/api/profiles/:email", (req, res) => {
  const { email } = req.params;
  const newProfile = req.body;
  import_profiles.default.update(email, newProfile).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
app.put("/api/profiles/:email/recipe", (req, res) => {
  const { email } = req.params;
  const { recipeId } = req.body;
  import_profiles.default.addRecipeToProfile(email, recipeId).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
app.put("/api/profiles/:email/remove-recipe", (req, res) => {
  const { email } = req.params;
  const { recipeId } = req.body;
  import_profiles.default.removeRecipeFromProfile(email, recipeId).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
app.get("/api/recipes", (req, res) => {
  import_recipes.default.index().then((recipes2) => res.json(recipes2)).catch((err) => res.status(404).end());
});
app.get("/api/recipes/:id", (req, res) => {
  const { id } = req.params;
  import_recipes.default.get(id).then((recipe) => {
    if (recipe === null) {
      res.status(404).send("Recipe not found");
    } else {
      res.json(recipe);
    }
  }).catch((err) => res.status(404).end());
});
app.post("/api/recipes", (req, res) => {
  const newRecipe = req.body;
  import_recipes.default.create(newRecipe).then((recipe) => res.status(201).json(recipe)).catch((err) => res.status(500).send(err));
});
app.get("/api/recipes/search/:term", (req, res) => {
  const { term } = req.params;
  import_recipes.default.searchRecipes(term).then((recipes2) => res.json(recipes2)).catch((err) => res.status(404).end());
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
