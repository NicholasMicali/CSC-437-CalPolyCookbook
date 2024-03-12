import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { FilterableComponent } from "./FilterableComponent";

@customElement("recipe-card")
export class RecipeCard extends LitElement implements FilterableComponent {
  @property({ reflect: true, type: String })
  @property({ type: String }) title: string = "";
  @property({ type: String }) text: string = "";
  @property({ type: String }) ingredients: string = "";
  @property({ type: String }) instructions: string = "";
  @property({ type: String }) recipeImage: string = "";
  @property({ type: Function }) save: Function = () => {};
  @property({ type: Boolean }) showSave: Boolean = false;
  @property({ type: Boolean }) showModal: boolean = false;


  static styles = css`
    :host {
      display: block;
      border: 2px solid;
      border-radius: 12px;
      overflow: hidden;
      width: 400px;
      height: 530px;
      background-color: white;
    }
    h1 {
      color: darkGreen;
      margin-bottom: 20px;
    }
    h2 {
      margin-left: 15px;
      margin-bottom: 0px;
      font-size: 24px;
      color: black;
    }
    p {
      font-size: 16px;
      font-weight: normal;
      margin-left: 15px;
    }
    .image {
      width: 400px;
      height: 300px;
      object-fit: cover;
    }
    .content {
      padding: 20px;
      background-color: white;
      height: 75px;
      color: black;
    }

    button {
      margin-left: 10px;
      margin-right: 20px;
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
    .read {
      margin-left: 0px;
    }

    .modal {
      display: block;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%; 
      height: 100%; 
      overflow: auto; 
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    
    .modal-content {
      background-color: #fefefe;
      margin: 10% auto; 
      padding: 20px;
      border: 3px solid darkGreen;
      border-radius: 20px;
      width: 60%;
      color: black;
    }
    
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }    

    svg.icon {
      display: inline;
      height: 1.3em;
      width: 1.3em;
      vertical-align: top;
      fill: currentColor;
    }
  `;

  getFilterableValue(): string {
    return this.text;
  }

  setVisible(visible: boolean): void {
    this.style.display = visible ? 'block' : 'none';
  }

  toggleModal() {
    this.showModal = !this.showModal;
    console.log("Toggle: " + this.showModal);
  }  

  render() {
    return html`
      <div class="card">
        ${this.recipeImage == '' ? html`<img class="image" src="/images/italian.png" alt="recipe image">` : html `<img class="image" src=${this.recipeImage} alt="recipe image" />`}
        <h2>${this.title}</h2>
        <div class="content">
          <p>${this.text}</p>
        </div>
        ${this.showSave ? html`<button @click=${this.save}>Save to My Recipes</button>` : html`<button @click=${this.save}>Unsave</button>`}
        <button class="read" @click=${this.toggleModal}>
          Read
          <svg class="icon">
            <use href="/icons/cooking.svg#icon-recipe" />
          </svg>
        </button>
      </div>

      ${this.showModal ? html`
        <div class="modal">
          <div class="modal-content"}>
            <span class="close" @click=${this.toggleModal}>&times;</span>
            ${this.recipeImage == '' ? html`<img class="image" src="/images/italian.png" alt="recipe image">` : html `<img class="image" src=${this.recipeImage} alt="recipe image" />`}
            <h1>${this.title}</h1>
            <p>${this.text}</p>
            <h2>Ingredients:</h2>
            <svg class="icon">
              <use href="/icons/cooking.svg#icon-measure" />
            </svg>
            <p>${this.ingredients.split('\n').map(part => html`${part}<br>`)}<p>
            <h2>Instructions:</h2>
            <svg class="icon">
              <use href="/icons/cooking.svg#icon-mix" />
            </svg>
            <p>${this.instructions.split('\n').map(part => html`${part}<br>`)}<p>
          </div>
        </div>
      ` : ''}
    `;
  }
}
/*${this.ingredients.map(
  (ingredient) => html`<li>${ingredient}<li>`
)}
<h2>Instructions:</h2>
${this.instructions.map(
  (ingredient) => html`<li>${ingredient}<li>`
)}
*/