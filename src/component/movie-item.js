import './modal-item.js'

class movieItem extends HTMLElement {
    constructor() {
        super();
        this.detail = () => {
            const e = document.createElement("modal-item");
            e.setAttribute("data-id", this._data.imdbID);
            document.body.append(e);
        }
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
                <button class="btn btn-primary more-view" type="button">See more</button>
                </div>
            </div>
        `
        this.querySelector(".more-view").addEventListener("click", this.detail);
    }
}

customElements.define("movie-item", movieItem);