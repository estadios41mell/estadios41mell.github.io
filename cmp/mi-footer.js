class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Elias Lopez Leonardo
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
