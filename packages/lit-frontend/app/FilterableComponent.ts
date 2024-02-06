
export interface FilterableComponent {
  getFilterableValue(): string; // Returns the value used for filtering, e.g., the recipe name.
  setVisible(visible: boolean): void; // Sets the visibility based on the filter match.
}
