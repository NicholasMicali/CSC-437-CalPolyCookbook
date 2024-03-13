// src/index.ts
import express, { Request, Response } from "express";
import cors from "cors";
import { connect } from "./mongoConnect";
import profiles from "./profiles";
import recipes from "./recipes";
import { Profile } from "./models/profile";
import { Recipe } from "./models/recipe";
import path from "path";
import fs, { promises } from "fs";

// and add this after all the app.use() statements
connect("cook");

const router = express.Router();

const app = express();
const port = process.env.PORT || 8080;


app.use(cors());
app.use(express.json({ limit: "500kb" }));

const indexHtml = require.resolve("lit-frontend"); 
const dist = path.dirname(indexHtml);

// static assets: /styles, /images, /icons, etc. 
app.use(express.static(dist)); 

// SPA routes: /app/... 
app.use("/app", (req, res) => { 
  promises.readFile(indexHtml, { encoding: "utf8" }) 
    .then((html: any) => res.send(html)); 
});


/*
router.get("/profiles/:email", (req: Request, res: Response) => {
  const { email } = req.params;

  profiles
    .get(email)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});
*/

router.post("/profiles/auth", (req: Request, res: Response) => {
  const { email, password } = req.body;

  profiles
    .auth(email, password)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

router.post("/profiles", (req: Request, res: Response) => {
  const newProfile = req.body;

  profiles
    .create(newProfile)
    .then((profile: Profile) => res.status(201).send(profile))
    .catch((err) => res.status(500).send(err));
});


router.put("/profiles/:email", (req: Request, res: Response) => {
  const { email } = req.params;
  const newProfile = req.body;

  profiles
    .update(email, newProfile)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

router.put("/profiles/:email/recipe", (req: Request, res: Response) => {
  const { email } = req.params;
  const { recipeId } = req.body;

  profiles
    .addRecipeToProfile(email, recipeId)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

router.put("/profiles/:email/remove-recipe", (req: Request, res: Response) => {
  const { email } = req.params;
  const { recipeId } = req.body;

  profiles
    .removeRecipeFromProfile(email, recipeId)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

router.get("/recipes", (req: Request, res: Response) => {
  recipes
    .index()
    .then((recipes: Recipe[]) => res.json(recipes))
    .catch((err) => res.status(404).end());
});

router.get("/recipes/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  recipes
    .get(id)
    .then((recipe) => {
      if (recipe === null) {
        res.status(404).send('Recipe not found');
      } else {
        res.json(recipe);
      }})
    .catch((err) => res.status(404).end());
});

router.post("/recipes", (req: Request, res: Response) => {
  const newRecipe = req.body;

  recipes
    .create(newRecipe)
    .then((recipe: Recipe) => res.status(201).json(recipe))
    .catch((err) => res.status(500).send(err));
});

router.get('/recipes/search/:term', (req: Request, res: Response) => {
  const { term } = req.params;
  recipes
    .searchRecipes(term)
    .then((recipes: Recipe[]) => res.json(recipes))
    .catch((err) => res.status(404).end());
});




app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});