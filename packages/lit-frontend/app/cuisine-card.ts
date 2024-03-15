// text-image-card.ts
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { FilterableComponent } from "./FilterableComponent";

@customElement("cuisine-card")
export class CuisineCard extends LitElement implements FilterableComponent {
  @property({ type: String }) title: string = "";
  @property({ type: String }) imageUrl: string = "";

  @property({ type: String }) link: string = "";

  static styles = css`
    :host {
      display: block;
      width: 400px; /* Adjust width as needed */
      margin-top: 100px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      border-radius: 10px;
      overflow: hidden;
      transition: transform 0.2s ease-in-out;
    }

    :host(:hover) {
      transform: scale(1.05);
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    img {
      width: 100%;
      height: 150px; /* Adjust height as needed */
      object-fit: cover; /* Ensure the image covers the area */
    }

    .content {
      padding: 15px;
      background: #f0f0f0; /* Light grey background, adjust as needed */
    }

    .title {
      margin-top: 10px;
      font-size: 16px; /* Adjust size as needed */
      color: #333; /* Dark grey text color */
      text-align: center;
    }
  `;

  getFilterableValue(): string {
    return this.title;
  }

  setVisible(visible: boolean): void {
    this.style.display = visible ? 'block' : 'none';
  }

  render() {
    return html`
      <a href="${this.link}">
        <img src="${this.imageUrl}" alt="${this.title}">
        <div class="content">
          <div class="title">${this.title}</div>
        </div>
      </a>
    `;
  }
}