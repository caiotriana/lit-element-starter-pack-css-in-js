import { customElement, LitElement, html, css } from '../../../web_modules/lit-element.js';
import CSS from './button-style-css.js';
export class DsButton extends LitElement {
  static get properties() {
    return {
      primary: {
        type: Boolean
      },
      secondary: {
        type: Boolean
      },
      size: {
        type: String
      },
      disabled: {
        type: Boolean
      },
      inverse: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.primary = false;
    this.secondary = false;
    this.size = "large";
    this.disabled = false;
    this.inverse = false;
  }

  firstUpdated() {
    const el = this.shadowRoot.querySelector('button');
    el.classList.toggle('jota-Button--disabled', this.disabled);
    el.classList.toggle('jota-Button-primary', this.primary);
    if (this.primary) el.classList.toggle('jota-Button-primary--inverse', this.inverse);
    el.classList.toggle('jota-Button-secondary', this.secondary);
    if (this.secondary) el.classList.toggle('jota-Button-secondary--inverse', this.inverse);
  }

  render() {
    return html`
        ${CSS}
        <button 
        ?disabled="${this.disabled}"
        ?primary="${this.primary}"
        ?secondary="${this.secondary}"
        ?inverse="${this.inverse}"
        class="jota-Button jota-Button--${this.size}"
        ><slot></slot></button>
    `;
  }

}
customElements.define('ds-button', DsButton);
export function Button({
  type,
  size,
  label,
  inverse,
  disabled
}) {
  return html`
    <ds-button
      ?primary=${type === 'primary'}
      ?secondary=${type === 'secondary'}
      ?inverse=${inverse}
      ?disabled=${disabled}
      size="${size}"
    >
      ${label}
    </ds-button>`;
}