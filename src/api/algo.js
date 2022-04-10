import http from '@/api/http';
import { BASE_API } from './constants';

export function getAlgoAPI() {
    return new Promise((resolve, reject) => {
      http
        .get(`${PUBLIC_URL}/algo`)
        .then(({ data }) => {
          console.log('get Algo: '+data);
          resolve(data);
        })
        .catch(({ response }) => {
          console.log('get Algo: '+response);
          reject(response)
        });
    });
  }