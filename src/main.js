import DataSource from "./data/DataSource.js";

async function main() {
    try {
        const result = await DataSource.DataInd();
        console.log(result);
        const Html = document.querySelector('main');
        Html.innerHTML = `<p>${result.confirmed.value}</p>
        <p>${result.recovered.value}</p>
        `;
    } catch (message) {
        fallbackResult(message)
    }
}

export default main();