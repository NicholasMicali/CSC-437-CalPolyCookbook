import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import {Router} from '@vaadin/router';
import { store } from "./store";
import "./toggle-switch";
import "./drop-down";


@customElement("header-nav")
export class HeaderElement extends LitElement {
  @property()
  username: string = "";

  signOut() {
    store.setProfile(null as any);
    Router.go("/app/");
  }

  render() {
    return html`
      <header>
        <div class="subHeader">
          <div>CPCB</div>
        </div>
        <a href="./home">Home</a>
        <a href="./recipes">My Recipes</a>
        <div class="subHeader">
          <drop-down>
            ${this.username}
            <ul slot="menu">
              <li>Settings</li>
              <li><toggle-switch>Mode</toggle-switch></li>
              <li><button @click="${this.signOut}">Sign out</button></li>
            </ul>
          </drop-down>
          <img class="profilePic" src="/images/profile.webp"/>
        </div>
      </header>
    `;
  }
  static styles = css`
    .subHeader {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
    
    .profilePic {
      height: 30px;
      width: 30px;
    }

    header {
      display: flex;
      justify-content: space-between;
      height: 30px;
      margin-bottom: 20px;
      background-color: darkGreen;
      color: white;
      padding: 10px;
    }

    a {
      text-decoration: none;
      font-size: 18px;
      color: white;
    }

    .profilePic {
      height: 30px;
      width: 30px;
    }

    svg.icon {
      display: inline;
      height: 2em;
      width: 2em;
      vertical-align: top;
      fill: currentColor;
      color: white;
    }

    button {
      padding: 5px;
      border-radius: 7px;
      border: 2px solid darkGreen;
      background: none;
      font-size: 16px;
      curser: pointer;
      transition: all 0.3s ease;
    }
    button:hover {
      background-color: lightGrey;
    }
    button:active {
      background-color: darkGrey;
    }
  `;
}