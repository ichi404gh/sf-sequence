import axios from 'axios';
import type {SequenceData} from "../components/sequence/types.ts";


const api = axios.create({
  baseURL: 'http://localhost:3003/api/',
});

export function getSequences() {
  return api.get('/sequences').then(res => res.data);
}

export function getSequence(id: string) {
  return api.get(`/sequences/${id}`).then(res => res.data);
}

export function createSequence(sequence: Omit<SequenceData, 'id'>) {
  return api.post('/sequences', sequence).then(res => res.data);
}

export function updateSequence(id: string, sequence: Omit<SequenceData, 'id'>) {
  return api.put(`/sequences/${id}`, sequence).then(res => res.data);
}