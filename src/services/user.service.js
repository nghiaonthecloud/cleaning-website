import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://cleaning-service-hust.herokuapp.com/api/";

class UserService {

  getProfile() {
    return axios.get(API_URL + 'me', { headers: authHeader() });
  }

  updateProfile(name, phone, email, address, password) {
    return axios.post(API_URL + 'me', {
      name,
      phone,
      email,
      address,
      password
    }, { headers: authHeader() });
  }

  getHistory() {
    return axios.get(API_URL + 'user/bookings', { headers: authHeader() });
  }
}

export default new UserService();
