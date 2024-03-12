// filter-control.ts
import { css, html, LitElement } from "lit";
import { customElement, queryAssignedElements } from "lit/decorators.js";
import { FilterableComponent } from "./FilterableComponent";


@customElement("filter-control")
export class FilterControl extends LitElement {
  @queryAssignedElements({ selector: '[slot="item"]' })
  items!: Array<FilterableComponent>;

  static styles = css`
    :host {
      margin-top: 40px;
      display: block;
      margin-bottom: 100px;
    }

    .row {
      display: grid;
      justify-content: space-between;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 75px;
      margin-top: 20px;
      margin-left: 20px;
      margin-right: 20px
    }

    .filter {
      margin-top: 15px;
      margin-left: 20px;
      margin-rigth: 20px;
    }

    input {
      width: 380px;
      margin-left: 20px;
      margin-bottom: 20px;
      padding: 5px;
      font-size: 16px;
      border: 2px solid darkGreen;
      border-radius: 4px;
    }
    
    h2 {
      font-size: 22px;
      font-weight: bold;
      margin-left: 20px;
      margin-top: 20px;
    }
  `;

  render() {
    return html`
      <div class="filter">
        <div><h2 class="secHead">Filter Results:<h2></div>
        <input type="text" @input="${this.filterItems}" placeholder="Search...">
        <div class="row">
          <slot name="item"></slot>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    const slotElement = this.shadowRoot?.querySelector('slot[name="item"]');
    if (slotElement) { // Check if slotElement is not null
      console.log("good")
    } else {
      // Handle the case where the slot element is not found, if necessary
      console.warn('Slot element not found.');
    }
  }

  filterItems(e: Event) {
    const slotElement = this.shadowRoot?.querySelector('slot[name="item"]') as HTMLSlotElement;
    const items = slotElement ? slotElement.assignedElements() : [];
    console.log(items);
    //console.log(this.items);
    const searchTerm = (e.target as HTMLInputElement).value.toLowerCase();

    items.forEach((item) => {
      const filterItem = item as unknown as FilterableComponent;
      const match = filterItem.getFilterableValue().toLowerCase().includes(searchTerm);
      console.log(searchTerm);
      console.log(filterItem.getFilterableValue());
      console.log(match);
      filterItem.setVisible(match);
    });
  }
}

