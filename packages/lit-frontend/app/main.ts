import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import {Router} from '@vaadin/router';
import "./header";
import "./home";
import "./recipe-page";
import "./profile-page";
import "./login-page";

@customElement("main-app")
class MainApp extends LitElement {

  firstUpdated(): void {
    const router = new Router( 
      this.shadowRoot?.querySelector("#outlet") 
    ); 
    router.setRoutes([ 
      { 
        path: "/app/", 
        component: "login-page" 
      },
      {
        path: "/app/home",
        component: "home-page" 
      },
      { 
        path: "/app/profile", 
        component: "profile-page" 
      }, 
      { 
        path: "/app/recipes", 
        component: "recipe-page" 
      }, 
    ]); 
  } 

  render() {
    return html`
      <div>
        <div id="outlet"></div>
      </div>
    `;
  }

  static get styles() {
    return css`
      /* Your CSS styles */
    `;
  }

  }  export default MainApp;

