const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
        align-items: center;
        border: 2px solid currentColor;
        border-radius: .75rem;
        color: #000;
        cursor: pointer;
        display: inline-flex;
        font-family: sans-serif;
        font-size: .9em;
        height: 2rem;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        padding: 0 1.5rem;
        box-shadow: 0 2px 0 currentColor;
    }

    :host(:hover) {
        box-shadow: 0 4px 0 currentColor;
        text-decoration: underline;
        transform: translate(0, -2px);
    }

    :host(:active) {
        box-shadow: none;
        transform: translate(0, 2px);
    }

    img {
        display: none;
        height: 1em;
        margin-right: .5em;
        width: 1em;
    }
</style>

<img />
<span>
    <slot></slot>
</span>
`;

class FancyButton extends HTMLElement {
  constructor() {
    super(); // this is mandatory
    this.setAttribute('role', 'button');
    this.setAttribute('tabindex', '0');
  }
  connectedCallback() {
    let shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.iconEl = shadowRoot.querySelector('img');
    this.setIcon(this.getAttribute('icon'));
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'icon' && oldVal !== newVal) {
      this.setIcon(newVal);
    }
  }
  setIcon(url) {
    if (!this.iconEl) return;
    if (url === null) {
      this.iconEl.style.display = 'none';
    } else {
      this.iconEl.src = url;
      this.iconEl.style.display = 'block';
    }
  }
}

FancyButton.observedAttributes = ['icon'];

customElements.define('fancy-button', FancyButton);





