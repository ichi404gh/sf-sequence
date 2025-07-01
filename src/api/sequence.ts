import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:3003/api/',
});

export function getSequences() {
  return api.get('/sequences').then(res => res.data);
}

export function getSequence(id: string) {
  return api.get(`/sequences/${id}`).then(res => res.data);
}