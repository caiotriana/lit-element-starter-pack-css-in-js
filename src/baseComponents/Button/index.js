import { LitElement, html } from 'lit-element';
import * as goober from 'goober';
import { styled } from './style'

export class DsButton extends LitElement {

    static get properties() {
        return {
            primary: { type: Boolean },
            secondary: { type: Boolean },
            size: { type: String },
            disabled: { type: Boolean },
            inverse: { type: Boolean }
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
    updated() { 
        const el = this.shadowRoot.querySelector('.Button');
        const css = goober.css.bind({ target: this.shadowRoot });
        const buttonClass = css`${styled()}`;
        el.classList.add(buttonClass)        


        el.classList.toggle('Button--disabled', this.disabled);
        el.classList.toggle('Button-primary', this.primary);
        if (this.primary) el.classList.toggle('Button-primary--inverse', this.inverse);
        
        el.classList.toggle('Button-secondary', this.secondary);
        if (this.secondary) el.classList.toggle('Button-secondary--inverse', this.inverse);
    }

    render() {
        return html`
        <button  ?disabled="${this.disabled}" ?primary="${this.primary}" ?secondary="${this.secondary}" ?inverse="${this.inverse}"
        class="Button Button--${this.size} ${this.disabled && 'Button--disabled'}">
            <slot></slot>
        </button>
    `;
    }
}

customElements.define('ds-button', DsButton);