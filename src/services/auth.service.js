import axios from "axios";
import authHeader from './auth-header';

const API_URL = "https://cleaning-service-hust.herokuapp.com/api/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  signup(name, phone, email, address, password) {
    return axios.post(API_URL + "register", {
      name,
      phone,
      email,
      address,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getMe() {
    return axios.get(API_URL + "me", {headers: authHeader()});
  }

  updateMe(name, email, address, phone) {
    return axios.post(API_URL + "me", {
      name,
      phone,
      email,
      address
    }, {headers: authHeader()});
  }
}

export default new AuthService();
