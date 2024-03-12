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
var import_path = __toESM(require("path"));
var import_fs = require("fs");
(0, import_mongoConnect.connect)("cook");
const router = import_express.default.Router();
const app = (0, import_express.default)();
const port = process.env.PORT || 3e3;
app.use((0, import_cors.default)());
app.use(import_express.default.json({ limit: "500kb" }));
const indexHtml = require.resolve("lit-frontend");
const dist = import_path.default.dirname(indexHtml);
app.use(import_express.default.static(dist));
app.use("/app", (req, res) => {
  import_fs.promises.readFile(indexHtml, { encoding: "utf8" }).then((html) => res.send(html));
});
router.post("/profiles/auth", (req, res) => {
  const { email, password } = req.body;
  import_profiles.default.auth(email, password).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
router.post("/profiles", (req, res) => {
  const newProfile = req.body;
  import_profiles.default.create(newProfile).then((profile) => res.status(201).send(profile)).catch((err) => res.status(500).send(err));
});
router.put("/profiles/:email", (req, res) => {
  const { email } = req.params;
  const newProfile = req.body;
  import_profiles.default.update(email, newProfile).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
router.put("/profiles/:email/recipe", (req, res) => {
  const { email } = req.params;
  const { recipeId } = req.body;
  import_profiles.default.addRecipeToProfile(email, recipeId).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
router.put("/profiles/:email/remove-recipe", (req, res) => {
  const { email } = req.params;
  const { recipeId } = req.body;
  import_profiles.default.removeRecipeFromProfile(email, recipeId).then((profile) => res.json(profile)).catch((err) => res.status(404).end());
});
router.get("/recipes", (req, res) => {
  import_recipes.default.index().then((recipes2) => res.json(recipes2)).catch((err) => res.status(404).end());
});
router.get("/recipes/:id", (req, res) => {
  const { id } = req.params;
  import_recipes.default.get(id).then((recipe) => {
    if (recipe === null) {
      res.status(404).send("Recipe not found");
    } else {
      res.json(recipe);
    }
  }).catch((err) => res.status(404).end());
});
router.post("/recipes", (req, res) => {
  const newRecipe = req.body;
  import_recipes.default.create(newRecipe).then((recipe) => res.status(201).json(recipe)).catch((err) => res.status(500).send(err));
});
router.get("/recipes/search/:term", (req, res) => {
  const { term } = req.params;
  import_recipes.default.searchRecipes(term).then((recipes2) => res.json(recipes2)).catch((err) => res.status(404).end());
});
app.use("/api", router);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
