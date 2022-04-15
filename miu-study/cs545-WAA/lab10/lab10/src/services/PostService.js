import axios from "axios";
import AuthHeader from "./AuthHeader";

const API_URL = '/posts'
const getAllPosts = () => {
    return axios.get(`${API_URL}/`, { headers: AuthHeader() })
}

const getPostById = (id) =>{
    return axios.get(`${API_URL}/${id}`, { headers: AuthHeader() })
}

const deletePostById = (id) =>{    
    return axios.delete(`${API_URL}/${id}`,{ headers: AuthHeader() })
}

const addPost = (post) =>{
    return axios.post(API_URL, post, { headers: AuthHeader() })
}

const PostService = {
    getAllPosts,
    getPostById,
    deletePostById,
    addPost
}
export default PostService