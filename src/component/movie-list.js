import './movie-item.js'

class movieList extends HTMLElement {
    constructor() {
        super();
    }

    set data(data) {
        this._data = data;
        this.render();
    }

    set error(error) {
        this._error = error;
        this.renderError();
    }

    render() {
        this.innerHTML = "";
        this._data.Search.forEach(item => {
            const e = document.createElement("movie-item");
            e.data = item;
            this.appendChild(e);
        });
    }

    renderError() {
        this.innerHTML = `
        <h1 style="margin:10px auto">${this._error}</h1>`
    }
}

customElements.define("movie-list", movieList);