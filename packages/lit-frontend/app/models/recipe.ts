// src/models/recipe.ts
export interface Recipe {
  _id?: string,
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  recipeImage: string;
}
