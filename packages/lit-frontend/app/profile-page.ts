import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./header";
import { store } from './store'; // Import the store



@customElement("profile-page")
export class ProfilePageElement extends LitElement {


  render() {
    return html`
      <div>
        <header-nav username="NicholasMicali"></header-nav>
        <h1>My Profile</h1>
        <div>${store.profile?.name ?? 'N/A'}</div>
        <div>${store.profile?.email ?? 'N/A'}</div>
      </div>
      `;
  }

  static get styles() {
    return css`
      h1 {
        background-color: blue;
        color: white;
        padding: 10px;
        text-align: center;
        margin-bottom: 20px;
      }
      
      h2 {
        margin-left: 30px;
        margin-bottom: 20px;
      }
    `;
  }
}