import { Recipe } from "./models/recipe";
import RecipeModel from "./models/mongo/recipe";

function index(): Promise<Recipe[]> {
  return RecipeModel.find();
}

function get(id: string): Promise<Recipe | null> {
  return RecipeModel.findById(id)
    .then((recipe) => recipe)
    .catch((err) => {
      throw `${id} Not Found`;
    });
}

function create(recipeData: Recipe): Promise<Recipe> {
  const recipe = new RecipeModel(recipeData);
  return recipe.save();
}

function update(id: string, recipeData: Recipe): Promise<Recipe | null> {
  return new Promise((resolve, reject) => {
    RecipeModel.findByIdAndUpdate(id, recipeData, { new: true })
      .then((recipe) => {
        if (recipe) resolve(recipe);
        else reject(`${id} Not Found`);
      })
      .catch((err) => reject(err));
  });
}

function searchRecipes(searchTerm: string): Promise<Recipe[]> {
  return new Promise((resolve, reject) => {
    RecipeModel.find(
      { title: { $regex: searchTerm, $options: 'i' } 
    })
    .then((recipes) => {
      if(recipes) resolve(recipes)
      else reject("Failed to find profile to update");
    })
    .catch((err) => {
      console.log(err);
      console.error('Error updating profile with new recipe:', err);
    });
  });
}


export default { index, get, create, update, searchRecipes };
