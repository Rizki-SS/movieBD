class DataSouce {

    static DataInd() {
        return fetch('http://www.omdbapi.com/?s=movie&apikey=f92d146e&y=2020')
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                return responseJson;
            })
    }

    static DataMovie(id) {
        return fetch('http://www.omdbapi.com/?apikey=f92d146e&i=' + id)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                return responseJson;
            })
    }


}

export default DataSouce;