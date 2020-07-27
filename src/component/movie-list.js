import './movie-item.js'

class movieList extends HTMLElement {
    constructor() {
        super();
    }

    set data(data) {
        this._data = data;
        this.render();
    }

    render() {
        console.log(this._data.Search);
        this.innerHTML = "";
        this._data.Search.forEach(item => {
            const e = document.createElement("movie-item");
            e.data = item;
            this.appendChild(e);
        });
    }
}

customElements.define("movie-list", movieList);