import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService {

    getUsers() {

        return axios.get(USER_API_BASE_URL);
    }
    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    // getUserById(user){
    //     return axios.get(USER_API_BASE_URL + '/' + userId);
    // }

   

}

export default new UserService()