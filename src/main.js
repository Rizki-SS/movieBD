import DataSource from "./data/DataSource.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './component/movie-list.js'


function main() {
    const e = document.querySelector("movie-list");

    const getData = async() => {
        try {
            const result = await DataSource.DataInd();
            movieList(result);
        } catch (error) {
            console.log(error);
        }
    }

    const movieList = (data) => {
        e.data = data;
    }

    document.addEventListener("DOMContentLoaded", () => {
        getData();
    })
}


export default main();