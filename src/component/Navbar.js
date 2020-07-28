class Navbar extends HTMLElement {
    constructor() {
        super();
        this.title = this.getAttribute('title')
            // this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    set event(event) {
        this._event = event;
        this.render();
    }

    get value() {
        return this.querySelector("#search-in").value;
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <a class="navbar-brand" href="#"><img src="${this.title}" width='50%'/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="form-inline ml-auto my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" id="search-in" placeholder="Search" aria-label="Search">
                <button class="btn btn-primary my-2 my-sm-0" id="search-bt">Search</button>
                </div>
            </div>
            </nav>
        `
        this.querySelector("#search-bt").addEventListener("click", this._event);
    }
}

customElements.define("nav-menu", Navbar)