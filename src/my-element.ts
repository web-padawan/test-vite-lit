import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import '@vaadin/side-nav/vaadin-side-nav.js';
import '@vaadin/side-nav/vaadin-side-nav-item.js';

/**
 * An example element.
 */
@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    return html`
      <vaadin-side-nav>
        <vaadin-side-nav-item>Item content</vaadin-side-nav-item>
      </vaadin-side-nav>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
