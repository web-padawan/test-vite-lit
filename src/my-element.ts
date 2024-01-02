import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * An example element.
 */
@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    return html`
      <vaadin-button>Button</vaadin-button>
      <vaadin-menu-bar></vaadin-menu-bar>
    `;
  }

  async firstUpdated() {
    await Promise.all([
      import('@vaadin/menu-bar/vaadin-menu-bar.js'),
      import('@vaadin/button/vaadin-button.js'),
    ]);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
