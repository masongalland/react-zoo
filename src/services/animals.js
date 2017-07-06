import axios from 'axios';

export function getAnimals() {
    return axios.get('https://practiceapi.devmountain.com/api/animals')

}