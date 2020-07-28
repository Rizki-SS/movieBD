import DataSource from "./data/DataSource.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './component/movie-list.js'
import './component/Navbar.js'


function main() {
    const e = document.querySelector("movie-list");
    const searchElement = document.querySelector('nav-menu');

    const getData = async() => {
        try {
            const result = await DataSource.DataInd();
            movieList(result);
        } catch (error) {
            searchError("check your internet connection");
        }
    }

    const search = async() => {
        try {
            const result = await DataSource.DataSrc(searchElement.value);
            movieList(result);
        } catch (error) {
            searchError(error);
        }
    }

    const movieList = (data) => {
        e.data = data;
    }

    const searchError = (data) => {
        e.error = data;
    }

    searchElement.event = () => {
        if (searchElement.value != "") {
            search();
        } else {
            getData();
        }
    };

    document.addEventListener("DOMContentLoaded", () => {
        getData();
    })
}


export default main();