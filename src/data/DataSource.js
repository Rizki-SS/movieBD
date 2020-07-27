class DataSouce {

    static DataInd() {
        return fetch('https://covid19.mathdro.id/api/countries/IDN')
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                return responseJson;
            })
    }

}

export default DataSouce;