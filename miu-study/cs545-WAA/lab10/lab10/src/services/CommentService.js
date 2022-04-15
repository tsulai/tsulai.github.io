import axios from "axios";
import AuthHeader from "./AuthHeader";

const API_URL = "/comments";

const getCommentsByPostId = (id) => {
    return axios.get(`${API_URL}/post/${id}`, { headers: AuthHeader() })
}

const CommentService = {
    getCommentsByPostId,
}
export default CommentService