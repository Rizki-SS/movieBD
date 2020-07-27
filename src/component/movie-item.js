class movieItem extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set data(data) {
        this._data = data;
        this.render();
    }

    render() {
        this.setAttribute("class", "col-md-3 mt-3")
        this.innerHTML = `
            <div class="card">
                <img class="card-img-top" src="${this._data.Poster}" alt="" height="300px">
                <div class="card-body">
                <h6 class="card-title">${this._data.Title}</h6>
                <p class="card-text">Years : ${this._data.Year}</p>
                <button data-id=${this._data.imdbID} class="btn btn-primary more-view" type="button">See more</button>
                </div>
            </div>
        `
    }
}

customElements.define("movie-item", movieItem);