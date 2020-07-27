class Navbar extends HTMLElement {
    constructor() {
        super();
        this.title = this.getAttribute('title')
            // this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.outerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand">${this.title}</a>
        </nav>`
    }
}

customElements.define("nav-menu", Navbar)