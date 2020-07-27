import DataSource from "../data/DataSource.js";

class modalItem extends HTMLElement {
    constructor() {
        super()
        this._clickEvent = () => {
            this.remove();
        }
    }

    async connectedCallback() {
        try {
            this.id = this.getAttribute('data-id')
            const result = await DataSource.DataMovie(this.id);
            console.log(result);
            this.render(result);
        } catch (error) {
            console.log(error);
        }
    }

    render(data) {
        this.innerHTML = `
        <style>
        .modal-custom{
            overflow-x: hidden;
            overflow-y: auto;
            background-color:#21252966
        }
        </style>
        <div class="modal-custom modal fade show " tabindex="-1" role="dialog" aria-labelledby="movie-info" style="padding-right: 17px; display: block;">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${data.Title}</h5>
                    <button type="button" class="close close-bt" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-4 text-center">
                        <img src="${data.Poster}" alt="" height="300px">
                        </div>
                        <aside class="col mt-2">
                            <ul>
                            <li>Plot : ${data.Plot}</li>
                                <li>Year : ${data.Year}</li>
                                <li>Rated : ${data.Rated}</li>
                                <li>Released : ${data.Released}</li>
                                <li>Runtime : ${data.Runtime}</li>
                                <li>Genre : ${data.Year}</li>
                                <li>Writer : ${data.Writer}</li>
                                <li>Language : ${data.Language}</li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        `
        this.querySelector(".close-bt").addEventListener("click", this._clickEvent);

    }


}

customElements.define('modal-item', modalItem);