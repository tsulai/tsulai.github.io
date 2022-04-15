import axios from "axios"
import UserService from "./UserService";

let user = {}
const login = async (email, password) => {
    return axios({
        method: 'post',
        url: `authenticate/`,
        withCredentials: false,
        data: {
            'email': email,
            'password': password
        }
    }).then((lgRes) => {
        //console.log("res is: " + JSON.stringify(lgRes.data))
        if (lgRes.data.accessToken) {
            user = lgRes.data            
            user['email'] = email 
            //console.log('token is ' + lgRes.data.accessToken)
            return getLoggedInUser(email, lgRes.data.accessToken, user)
        }
    }).then( res => {
        //console.log('return from getLoggedInUser : ' + res)
    });

}

const getLoggedInUser = async(email, accessToken, user) => {
    //console.log('email is ' + email + 'token is ' + accessToken)    
        await UserService.getUserLoggedIn(email, accessToken).then(
            (res) => {
                //console.log('return from userService: ' + res.roles)
                user['roles'] = res.roles
                user['username'] = res.firstname + ' ' + res.lastname 
                localStorage.setItem("user", JSON.stringify(user));   
                //console.log('localstorage set: ' + localStorage.getItem("user"))
                
                return res           
            },
            (error) => {
                console.log(error);
            }
        )

    
}
const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = localStorage.getItem("user") != undefined ? JSON.parse(localStorage.getItem("user")) : ''
    
const AuthService = {
    login,
    logout,
    getCurrentUser
};

export default AuthService;