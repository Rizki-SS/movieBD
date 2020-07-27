import './InfoCard';

class Overvier extends HTMLElement {
    constructor() {
        super();
    }

    set data() {
        this._data = data;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._data.forEach(data_item => {
            const cardItem = document.createElement("info-card");
            cardItem.data = data_item;
            this.appendChild(cardItem);
        });
    }
}