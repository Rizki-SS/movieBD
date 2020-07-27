import DataSource from "./data/DataSource.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './component/InfoCard.js'

function main() {
    const getData = async() => {
        try {
            const result = await DataSource.DataInd();
            console.log(result);
        } catch (error) {

        }
    }

    const overview = (data) => {

    }

    document.addEventListener("DOMContentLoaded", () => {
        getData();
    })
}


export default main();