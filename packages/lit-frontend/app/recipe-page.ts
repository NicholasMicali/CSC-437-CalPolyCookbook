import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./recipe-card"
import "./filter-control"
import "./header";
import { serverPath } from "./rest";
import { Recipe } from "./models/recipe";
import { store } from "./store";

@customElement("recipe-page")
export class RecipePageElement extends LitElement {
  
  @property()
  path: string = "";

  @state() title: string = '';
  @state() description: string = '';
  @state() ingredients: string = '';
  @state() instructions: string = '';
  @state() recipeImage: string = '';
  @state() status: string = '';
  @state() recipes: Recipe[] = [];
  @state() recipeIDs: string[] = store.profile?.recipes || [];

  render() {
    return html`
      <div>
        <header-nav username=${store.profile?.email}></header-nav>
        <h1>My Recipes</h1>
        <section class="Recipes">
          <div class="RecipeRow">
            ${this.recipes.map(
              (recipe) => html`<recipe-card slot="item" title=${recipe.title} text=${recipe.description} ingredients=${recipe.ingredients} instructions=${recipe.instructions} recipeImage=${recipe.recipeImage} .save="${() => {this.removeRecipe(recipe._id || '')}}" .showSave=${false}></recipe-card>`
            )}
          </div>
        </section>
        <h2>Create Recipe:<h2>
        <form @submit="${this.addRecipe}">
          <div class="leftForm">
            <input type="text" placeholder="Title" .value="${this.title}" @input="${(e: InputEvent) => this.title = (e.target as HTMLInputElement).value}" required>
            <input type="text" placeholder="Description" class="desc" .value="${this.description}" @input="${(e: InputEvent) => this.description = (e.target as HTMLInputElement).value}" required>
            <input name="photo" type="file" @change="${this._handlePhotoSelected}"/>
            ${this.recipeImage != '' ? html`<img class="photo" src=${this.recipeImage}/>` : ''}
          </div>
          <textarea id="paragraphInput" rows="10" cols="50" placeholder="Add a list of ingredients" .value="${this.ingredients}" @input="${(e: InputEvent) => this.ingredients = (e.target as HTMLTextAreaElement).value}" required></textarea>
          <textarea id="paragraphInput" rows="10" cols="50" placeholder="Add a list of instructions" .value="${this.instructions}" @input="${(e: InputEvent) => this.instructions = (e.target as HTMLTextAreaElement).value}" required></textarea>
          <button type="submit">Save</button>
        </form>
      </div>
      `;
  }
  //<div>${this.status}</div>

  static get styles() {
    return css`
      h1 {
        color: darkGreen;
        padding: 10px;
        text-align: center;
        margin-bottom: 20px;
      }
      
      h2 {
        margin-left: 30px;
        margin-bottom: 20px;
        margin-top: 50px;
      }

      form {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-left: 30px;
        margin-top: -20px;
        margin-bottom: 100px;
        gap: 20px;
      }

      .photo {
        width: 200px;
      }

      .leftForm {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }

      .desc {
        width: 400px;
      }

      .recipe {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        padding-bottom: 30px;
      }
      
      .Recipes {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .RecipeRow {
        display: grid;
        justify-content: space-between;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 75px;
      }

      input {
        width: 200px;
        padding: 5px;
        font-size: 16px;
        border: 2px solid darkGreen;
        border-radius: 4px;
      }
      button {
        padding: 5px;
        border-radius: 7px;
        border: 2px solid darkGreen;
        background: none;
        font-size: 16px;
        curser: pointer;
        transition: all 0.3s ease;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
      }
      button:hover {
        background-color: lightGrey;
      }
      button:active {
        background-color: darkGrey;
      }

      textArea {
        width: 300px;
        height: 300px;
        overflow-y: auto;
        resize: none;
        padding: 10px;
        border: 2px solid darkGreen;
        border-radius: 4px;
        font-size: 14px;
        font: arial;
      }
    `;
  }

  async fetchData() {
    if (store.profile) {
      const fetchPromises = store.profile.recipes.map(id => 
          fetch(serverPath("/recipes/" + id))
              .then(response => {
                  if (response.ok) {
                      return response.json();
                  }
                  throw new Error(`Failed to fetch recipe with ID ${id}`);
              })
              .catch(error => {
                  console.error('Fetch error for recipe ID ' + id + ':', error);
                  return null; // Return null in case of error to filter out later
              })
      );

      try {
          const recipes = await Promise.all(fetchPromises);
          this.recipes = recipes.filter(recipe => recipe !== null);
          console.log("Fetched all recipes");
      } catch (error) {
          console.error('Error fetching recipes:', error);
      }
    }
  }  



connectedCallback() {
  super.connectedCallback(); // Always call super.connectedCallback first
  this.fetchData();
}

removeRecipe(recipeId: string) {
  //e.preventDefault();
  return new Promise((resolve, reject) => {
    fetch(serverPath("/profiles/" + store.profile?.email + "/remove-recipe"), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipeId }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        console.log("Removed recipe: " + recipeId);
        resolve(json);
        if (store.profile) {
          store.profile.recipes = store.profile.recipes.filter(id => id !== recipeId);
        }
        this.fetchData();
      })
      .catch((error) => {
        console.error('Put error:', error);
        reject(error); 
      });
  });
}


  async addRecipe(e: SubmitEvent) {
    e.preventDefault();
    const recipeData: Recipe = {
      title: this.title,
      description: this.description,
      ingredients: this.ingredients,
      instructions: this.instructions,
      recipeImage: this.recipeImage,
    };
    try {
      const newRecipeId: any = await this.putData(recipeData);
      this.status = 'Recipe Added';
      console.log('Recipe Added!');
      if (newRecipeId && store.profile) {
        try {
          await this.profileUpdate(store.profile.email, newRecipeId);
          console.log('Profile updated with new recipe ID');
          store.profile.recipes = [...store.profile.recipes, newRecipeId];
          this.fetchData();
          this.title = "";
          this.description = "";
          this.ingredients = "";
          this.instructions = "";
          this.recipeImage = "";
        } catch (error) {
          console.error('Error mapping recipe to profile:', error);
        }
      }
    } catch (error) {
      console.error('Error Adding Recipe:', error);
      this.status = 'Recipe addition Unsuccessful';
    }
  }

  putData(recipeData: Recipe) {
    return new Promise((resolve, reject) => {
      fetch(serverPath("/recipes/"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return null;
        })
        .then((data) => {
          resolve(data._id); 
        })
        .catch((error) => {
          console.error('Put error:', error);
          reject(error); 
        });
    });
  }

  profileUpdate(email: string, recipeId: string) {
    return new Promise((resolve, reject) => {
      fetch(serverPath("/profiles/" + email + "/recipe"), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipeId }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return null;
        })
        .then((json: unknown) => {
          resolve(json); 
        })
        .catch((error) => {
          console.error('Put error:', error);
          reject(error); 
        });
    });
  }


  _handlePhotoSelected(ev: InputEvent) { 
    const target = ev.target as HTMLInputElement; 
    const selectedFile = (target.files as FileList)[0]; 
    const reader = new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result as string); // Data URI of the image
      fr.onerror = (err) => reject(err);
      fr.readAsDataURL(selectedFile); // Encodes the file as a data URL (base64)
    });
    reader.then((result: unknown) => {
      this.recipeImage = result as string;
    }).catch(error => {
      console.error('Error reading file:', error);
    });
  }

}