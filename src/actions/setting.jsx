import axios from 'axios';

import { errorHandler } from '../utility/errorHandler';

const getSettings = async () => {
    try {
        return await axios({
            url: 'http://localhost:3000/api/settings',
        }).then(response => {
            console.log(response.data.settings);
            return response.data.settings;
        }).catch(error => {
            throw new (error);
        })

    } catch (error) {
        const errorMessage = errorHandler(error);

        return errorMessage;
    }
}

export { getSettings }