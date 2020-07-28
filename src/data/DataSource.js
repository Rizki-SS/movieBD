class DataSouce {
    static base() {
        return 'http://www.omdbapi.com/?apikey=f92d146e&';
    }

    static DataInd() {
        return fetch(`${this.base()}s=movie&y=2020`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                return responseJson;
            })
    }

    static DataMovie(id) {
        // console.log(`${this.base()}i=${id}`);
        return fetch(`${this.base()}i=${id}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                return responseJson;
            })
    }

    static DataSrc(key) {
        return fetch(`${this.base()}s=${key}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.Search) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`${key} is not found`);
                }
            })
    }


}

export default DataSouce;