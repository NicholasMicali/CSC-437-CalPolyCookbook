// src/login-page.ts
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { store } from './store'; // Your global store
import {Router} from '@vaadin/router';
import { serverPath } from "./rest";
import { Profile } from "./models/profile";

@customElement('login-page')
export class LoginPage extends LitElement {
  @state() email: string = '';
  @state() password: string = '';
  @state() confirmPassword: string = '';
  @state() name: string = '';
  @state() isSigningUp: boolean = false;
  @state() status: string = '';

  @state() profile?: Profile;

  static styles = css`
    .loginPage {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .CB {
      width: 300px;
      height: 300px;
      margin-bottom: 80px;
    }

    .tabs {
      margin-bottom: 10px;
    }

    .row {
      display: flex;
      flex-direction: row;
      gap: 10px;
      justify-content: center;
      align-items: center;
    }

    h1 {
      color: darkGreen;
      padding: 10px;
      text-align: center;
      margin-bottom: 30px;
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

  render() {
    return html`
      <div class="loginPage">
        <h1>Welcome to the Cal Poly Cookbook</h1>
        <img class="CB" src="/images/CPCB.png" alt="CPCB"></img>
        <div class="tabs">
          ${this.isSigningUp ? html`
            <div class="row">
              <div>Already have an account?</div>
              <button @click="${() => this.isSigningUp = false}">Login</button>
            </div>
          ` : ''}
          ${!this.isSigningUp ? html`
            <div class="row">
              <div>Don't have an account?</div>
              <button @click="${() => this.isSigningUp = true}">Sign Up</button>
            </div>
          ` : ''}
        </div>
      
        ${this.isSigningUp ? this.renderSignUp() : this.renderLogin()}

        <h2>${this.status}</h2>
      </div>
    `;
  }

  //<h2>${this.profile?.email}</h2>

  renderLogin() {
    return html`
      <form @submit="${this.login}">
        <input type="email" placeholder="Email" .value="${this.email}" @input="${(e: InputEvent) => this.email = (e.target as HTMLInputElement).value}" required>
        <input type="password" placeholder="Password" .value="${this.password}" @input="${(e: InputEvent) => this.password = (e.target as HTMLInputElement).value}" required>
        <button type="submit">Login</button>
      </form>
    `;
  }

  renderSignUp() {
    return html`
      <form @submit="${this.signup}">
        <input type="text" placeholder="Username" .value="${this.name}" @input="${(e: InputEvent) => this.name = (e.target as HTMLInputElement).value}" required>
        <input type="email" placeholder="Email" .value="${this.email}" @input="${(e: InputEvent) => this.email = (e.target as HTMLInputElement).value}" required>
        <input type="password" placeholder="Password" .value="${this.password}" @input="${(e: InputEvent) => this.password = (e.target as HTMLInputElement).value}" required>
        <input type="password" placeholder="Confirm Password" .value="${this.confirmPassword}" @input="${(e: InputEvent) => this.confirmPassword = (e.target as HTMLInputElement).value}" required>
        <button type="submit">Sign Up</button>
      </form>
    `;
  }
/*
  async login(e: SubmitEvent) {
    e.preventDefault();
    try {
      await this.fetchData(this.email);
      if (this.profile?.password === this.password) {
        this.status = 'logged in';
        console.log('Logged In!');
        store.setProfile(this.profile);
        Router.go('/app/home');
      } else {
        this.status = 'incorrect passoword';
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  fetchData(email: String) {
    return new Promise((resolve, reject) => {
      fetch(serverPath("/profiles/" + email))
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          return null;
        })
        .then((json: unknown) => {
          if (json) this.profile = json as Profile;
          resolve(json); 
        })
        .catch((error) => {
          console.error('Fetch error:', error);
          reject(error); 
        });
    });
  }

*/

  async login(e: SubmitEvent) {
    e.preventDefault();
    try {
      await this.fetchData(this.email, this.password);
      if (this.profile) {
        store.setProfile(this.profile);
        Router.go('/app/home');
      }
      else {
        this.status = "incorrect password";
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  fetchData(email: String, password: string) {
    return new Promise((resolve, reject) => {
      fetch(serverPath("/profiles/auth"), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          return null;
        })
        .then((json: unknown) => {
          if (json) this.profile = json as Profile;
          resolve(json); 
        })
        .catch((error) => {
          console.error('Fetch error:', error);
          reject(error); 
        });
    });
  }


  async signup(e: SubmitEvent) {
    e.preventDefault();
    const profileData: Profile = {
      email: this.email,
      name: this.name,
      password: this.password,
      recipes: []
      // Include other properties as needed
    };
    try {
      await this.putData(profileData);
      this.status = 'Sign Up Successful';
      console.log('Signed Up!');
      this.isSigningUp = false;
    } catch (error) {
      console.error('Error Signing Up:', error);
      this.status = 'Sign Up Unsuccessful';
    }
  }

  putData(profileData: Profile) {
    return new Promise((resolve, reject) => {
      fetch(serverPath("/profiles"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData), // Convert the profile data to a JSON string
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return null;
        })
        .then((json: unknown) => {
          this.profile = json as Profile;
          resolve(json); 
        })
        .catch((error) => {
          console.error('Post error:', error);
          reject(error); // Rejects the promise if any error is caught during the process
        });
    });
  }
}
