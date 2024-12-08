/* -----------------GETKEY---------------------- */
export const getKey = async (apiType, endpoint) => {
    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/' + endpoint

    const options = {
        method: apiType
    }

    const res = await fetch(url, options);
    const data = await res.json();
    const apiKey = data.key;  
    console.log('New API Key:', apiKey);

    return apiKey;
}


/* -------------GET PLANET DATA ---------------- */
export const getPlanets = async (apiType, endpoint, key) => {
    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/' + endpoint

    const options = {
        method: apiType,
        headers: {
            'x-zocom': key
        }
    }

    const bodiesData = await fetch(url, options)
    const bodiesDataJson = await bodiesData.json()

    console.log(bodiesData);
    console.log(bodiesDataJson);
    return bodiesDataJson;
}