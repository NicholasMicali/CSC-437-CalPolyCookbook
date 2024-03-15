// src/models/mongo/recipe.ts
import { Schema, model } from "mongoose";
import { Recipe } from "../recipe";

const recipeSchema = new Schema<Recipe>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  recipeImage: { data: Buffer, type: String, required: true },
});

const RecipeModel = model<Recipe>("Recipe", recipeSchema);

export default RecipeModel;
