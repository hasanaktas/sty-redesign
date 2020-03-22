import axios from 'axios';

export const API_URL = 'http://localhost:2222';

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
