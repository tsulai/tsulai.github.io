import axios from "axios";

const getUserLoggedIn = (email, accessToken) =>{
    const config = {
        headers: {
            Authorization: 'Bearer ' + accessToken
        }
    }
    return axios.get(`/user?id=${email}`, config)
        .then(res => {         
            return res.data;
        })
}

const UserService = {
    getUserLoggedIn
}

export default UserService;