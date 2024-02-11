import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "./models/profile";
import { serverPath } from "./rest";


@customElement("user-profile")
export class UserProfileElement extends LitElement {
  @property()
  path: string = "";

  @state()
  profile?: Profile;

  render() {
    // fill this in later
    return html`
    <div class="profile">
      <h2>${this.profile?.name}</h2>
      <p><strong>Nickname:</strong> ${this.profile?.nickname}</p>
      <p><strong>Location:</strong> ${this.profile?.city}</p>
      <h3>Recipes:</h3>
      <ul class="recipes">
        ${this.profile?.recipes.map(
          (recipe) => html`<li>${recipe}</li>`
        )}
      </ul>
    </div>
`;
  }

  static styles = css`
    .profile {
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 8px;
      max-width: 400px;
      margin: auto;
    }
    .profile h2 {
      margin-top: 0;
    }
    .recipes {
      list-style-type: none;
      padding: 0;
    }
    .recipes li {
      padding: 5px 0;
    }
  `; 


  _fetchData(path: string) {
    fetch(serverPath(path))
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
          if (json) this.profile = json as Profile;
      });
  }

  connectedCallback() {
    if (this.path) {
      this._fetchData(this.path);
    }
    super.connectedCallback();
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ) {
    if (name === "path" && oldValue !== newValue && oldValue) {
      this._fetchData(newValue);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

}





@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
  render() {
    return html`
    <form @submit=${this._handleSubmit}>
      <div class="profile">
        <h2>Edit Profile:</h2>
        <ul>
          <li>
            <strong>name:</strong>
            <input name="name" type="text" .value=${this.profile?.name || ''}></input>
          </li>
          <li>
            <strong>userid:</strong>
            <input name="userid" type="text" .value=${this.profile?.userid || ''}></input>
          </li>
          <li>
            <strong>nickname:</strong>
            <input name="nickname" type="text" .value=${this.profile?.nickname || ''}></input>
          </li>
          <li>
            <strong>city:</strong>
            <input name="city" type="text" .value=${this.profile?.city || ''}></input>
          </li>
          <li>
            <strong>recipes:</strong>
            <input name="recipes" type="text" .value=${this.profile?.recipes || ''}></input>
          </li>
        </ul>
      <button type="submit">Submit</button>
    </form> `;
  }

  static styles = css`
    .profile {
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 8px;
      max-width: 400px;
      margin: auto;
    }
    .profile h2 {
      margin-top: 0;
    }
    .recipes {
      list-style-type: none;
      padding: 0;
    }
    .recipes li {
      padding: 5px 0;
    }
  `;

  _handleSubmit(ev: Event) {
    ev.preventDefault(); // prevent browser from submitting form data itself

    const target = ev.target as HTMLFormElement;
    const formdata = new FormData(target);
    const entries = Array.from(formdata.entries())
      .map(([k, v]) => (v === "" ? [k] : [k, v]))
      .map(([k, v]) =>
        k === "recipes"
          ? [k, (v as string).split(",").map((s) => s.trim())]
          : [k, v]
      );
    const json = Object.fromEntries(entries);

    this._putData(json);
  }

  _putData(json: Profile) {
    fetch(serverPath(this.path), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json)
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        else return null;
      })
      .then((json: unknown) => {
        if (json) this.profile = json as Profile;
      })
      .catch((err) =>
        console.log("Failed to PUT form data", err)
      );
  }
}