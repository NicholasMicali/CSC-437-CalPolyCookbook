import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("recipe-card")
export class RecipeCard extends LitElement {
  @property({ reflect: true, type: String })
  title: string = ""; // Assume this is the filterable value.

  static styles = css`
    :host {
      display: block;
      border: 1px solid;
      border-radius: 8px;
      overflow: hidden;
      width: 500px;
    }
    .image {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
    .content {
      padding: 20px;
      background-color: white;
    }
    .ratings {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
    }
    .ratings div {
      display: flex;
      align-items: center;
      margin-left: 10px;
      color: black;
    }
    .star {
      color: gold;
      margin-left: 4px;
    }
    slot[name="title"] {
      font-size: 30px;
      color: black;
      display: block
    }
    slot[name="difficulty"] {
      margin-left: 4px;
      font-size: 16px;
      color: black;
      display: block
    }
    slot[name="price"] {
      margin-left: 4px;
      font-size: 16px;
      color: black;
      display: block
    }
    slot[name="health"] {
      margin-left: 4px;
      font-size: 16px;
      color: black;
      display: block
    }
  `;

  render() {
    return html`
      <div class="card">
        <img class="image" src="${this.getAttribute('image')}" alt="Dish image">
        <div class="content">
          <slot name="title"></slot>
          <div class="ratings">
            <div>Difficulty<slot name="difficulty"></slot><span class="star">★</span></div>
            <div>Price<slot name="price"></slot><span class="star">★</span></div>
            <div>Health<slot name="health"></slot><span class="star">★</span></div>
          </div>
        </div>
      </div>
    `;
  }
}
