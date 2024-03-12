import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("toggle-switch")
class ToggleSwitchElement extends LitElement {
  @property({ reflect: true, type: Boolean })
  on: boolean = false;

  render() {
    return html`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`;
  }

  static styles = css`
    :host {
      display: block;
    }
    label {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: var(--size-spacing-medium);
      line-height: 2em;
    }
    .slider {
      display: inline-block;
      border: 1px solid;
      border-radius: 0.75em;
      background-color: black;
      height: 1.5em;
      width: 2.75em;
      margin-left: 1em;
      position: relative;
      transition: background-color
        0.5s;
    }
    .slider:has(input:checked) {
      background-color: grey;
    }
    input {
      appearance: none;
      background-color: white;
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      vertical-align: center;
      position: absolute;
      left: 0;
      transition: left 0.5s;
    }
    input:checked {
      left: 1.5em;
    }
  `;

  _handleChange(ev: Event) {
    const target = ev.target as HTMLInputElement;
    this.on = target?.checked;

    if (this.on) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');

      const allAnchors = document.querySelectorAll('a');
      allAnchors.forEach(anchor => {
        anchor.classList.add('dark-link');
      });
      allAnchors.forEach(anchor => {
        anchor.classList.remove('light-link');
      });

    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');

      const allAnchors = document.querySelectorAll('a');
      allAnchors.forEach(anchor => {
        anchor.classList.add('light-link');
      });
      allAnchors.forEach(anchor => {
        anchor.classList.remove('dark-link');
      });
    }
  }
} export default ToggleSwitchElement;