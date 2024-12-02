const getKeys = (apiType, endpoint) => {
    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com' + endpoint;

    const options = {
        method: apiType
    }
    fetch (url, options).then(res => {
        console.log(res);
        return res.json
    }).then(res => {
        console.log(res);
        
    })
}

const getPlanets = (apiType, endpoint, key) => {
    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com' + endpoint;

    const options = {
        method: apiType,
        headers: {
            'x-zocom': '<solaris-key-here>'
        }
        
    }

}


/* getKeys('POST', '/keys'); */