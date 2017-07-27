class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        h1 {
          color: red;
        }
      </style> 
      <h1>My Web Component!</h1>
    `;
  }
}

window.customElements.define('my-component', MyComponent);