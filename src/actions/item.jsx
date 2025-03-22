import axios from 'axios';

import { errorHandler } from '../utility/errorHandler';

const waiting = (timeout = 1000) => new Promise((res, rej) => {
    setTimeout(() => {
        res(1)
    }, timeout);
})

const getAllItem = async () => {
    try {
        return await axios({
            url: 'http://localhost:3000/api/items',
        }).then(response => {
            return response.data.items;
        }).catch(error => {
            throw new (error);
        })

    } catch (error) {
        const errorMessage = errorHandler(error);

        return errorMessage;
    }
}

const getDetailItem = async (id) => {
    try {
        return await axios({
            url: `http://localhost:3000/api/items/${ id }`,
        }).then(response => {
            return response.data.item;
        }).catch(error => {
            throw new (error);
        })

    } catch (error) {
        const errorMessage = errorHandler(error);

        return errorMessage;
    }
}

export { getAllItem, getDetailItem }