import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./recipe-card";
import "./filter-control";
import "./cuisine-card";
import "./header";
import { store } from "./store";
import { Recipe } from "./models/recipe"
import { serverPath } from "./rest";
import {Router} from '@vaadin/router';

@customElement("home-page")
export class HomePageElement extends LitElement {
  @state() recipes: Recipe[] = [];
  @state() searchTerm: string = '';

  render() {
    return html`
      <div>
        <header-nav username=${store.profile?.email}></header-nav>
        <h1>Cal Poly Cookbook</h1>
        <div class="home">
          <h2>Search All Recipes with a keyword:</h2>
          <form @submit="${this.handleSubmit}">
            <input type="text" placeholder="Search Term" .value="${this.searchTerm}" @input="${(e: InputEvent) => this.searchTerm = (e.target as HTMLInputElement).value}" required>
            <button type="submit">Search</button>
          </form>
        </div>
        <filter-control>
          ${this.recipes.map(
            (recipe) => html`
              <recipe-card slot="item" title=${recipe.title} text=${recipe.description} ingredients=${recipe.ingredients} instructions=${recipe.instructions} recipeImage=${recipe.recipeImage} .save="${() => {this.saveRecipe(recipe._id || '')}}" .showSave=${true}></recipe-card>
              `
          )}
        </filter-control>
      </div>
      `;
  }

  //<button @click=${this.saveRecipe(recipe._id || '')}>Save to My Recipes</button>

  static get styles() {
    return css`
      .home {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      h1 {
        color: darkGreen;
        padding: 10px;
        text-align: center;
        margin-bottom: 20px;
      }
      h2 {
        margin-left: 20px;
        margin-bottom: 20px;
      }
      form {
        align-self: flex-center;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 20px;
        margin-top: 10px;
        margin-bottom: 20px;
        gap: 10px;
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
    `;
  }
/*
  fetchData() {
    return new Promise((resolve, reject) => {
      fetch(serverPath("/recipes"))
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          return null;
        })
        .then((json: unknown) => {
          if (json) this.recipes = json as Recipe[];
          resolve(json); 
        })
        .catch((error) => {
          console.error('Fetch error:', error);
          reject(error); // Rejects the promise if any error is caught during the process
        });
    });
  }

  connectedCallback() {
    super.connectedCallback(); // Always call super.connectedCallback first
    this.fetchData();
  }
*/
  saveRecipe(recipeId: string) {
    //e.preventDefault();
    return new Promise((resolve, reject) => {
      fetch(serverPath("/profiles/" + store.profile?.email + "/recipe"), {
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
          if (store.profile) {
            store.profile.recipes = [...store.profile.recipes, recipeId]
            Router.go('/app/recipes');
          }
        })
        .catch((error) => {
          console.error('Put error:', error);
          reject(error); 
        });
    });
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.searchRecipes(this.searchTerm);
  }

  searchRecipes(searchTerm: string) {
    return new Promise((resolve, reject) => {
      try {
        fetch(serverPath("/recipes/search/" + searchTerm))
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
          })
          .then((json: unknown) => {
            this.recipes = json as Recipe[];
            resolve(json); 
          })
          .catch((error) => {
            console.error('Search Error:', error);
            reject(error); 
          });
        } catch(err) {
          console.log("Error: " + err);
        }
    });
  }

  
}
