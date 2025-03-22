const ROOT_ADS_URL = 'https://hendras.orderonline.id/';

const encode = async (url) => {

    if (!url) return null;
    
    const splittedVal = await url.split(ROOT_ADS_URL);

    return encodeURIComponent(splittedVal[1]);
}

const getFullUri = (encodedUri) => {
    return ROOT_ADS_URL + encodedUri;
}

export { encode, getFullUri }