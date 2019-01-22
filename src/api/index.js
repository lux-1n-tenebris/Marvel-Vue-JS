import axios from 'axios';
import config from '@/config';

export function getSearchName(name) {
    return axios.get( config.url + name + config.publicApi + config.hash + config.timeStamp)
}