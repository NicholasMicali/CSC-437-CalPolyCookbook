// filter-control.ts
import { css, html, LitElement } from "lit";
import { customElement, queryAssignedElements } from "lit/decorators.js";
import { FilterableComponent } from "./FilterableComponent";
import { CuisineCard } from "./cuisine-card";

@customElement("filter-control")
export class FilterControl extends LitElement {
  @queryAssignedElements({ selector: '[slot="item"]' })
  items!: Array<FilterableComponent>;

  static styles = css`
    :host {
      margin-top: 10px;
      display: block;
    }

    .cuisineRow {
      display: grid;
      justify-content: space-between;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 100px;
      margin-top: 20px;
      margin-left: 25px;
    }

    input {
      width: 200px;
      margin-top: 20px;
      margin-left: 25px;
    }

  `;

  render() {
    return html`
      <input type="text" @input="${this.filterItems}" placeholder="Search...">
      <div class="cuisineRow">
        <slot name="item"></slot>
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

