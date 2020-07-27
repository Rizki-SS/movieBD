class InfoCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set data(data) {
        this._data = data;
        this.render;
    }

    render() {
        this.outerHTML = `
            <div class=col-md-4>
                <style>.card{margin-top:5px}</style>
                <div class="card">
                    <div class="card-body">
                    <p></p>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define("info-card", InfoCard);