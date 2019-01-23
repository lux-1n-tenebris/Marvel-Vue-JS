import axios from 'axios';
import config from '@/config';

export function getSearchName() {
    return axios.get( config.url + 'Iron' + config.publicApi + config.hash + config.timeStamp)
}