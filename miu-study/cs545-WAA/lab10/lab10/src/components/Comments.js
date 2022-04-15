import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CommentService from '../services/CommentService'
import PostService from '../services/PostService'
import AuthService from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

export default function Comments({ postId }) {
    console.log('RENDER COMMENTS')
    const [comments, setComments] = useState([])
    const navigate = useNavigate();
    
    useEffect(() => {
        CommentService.getCommentsByPostId(postId).then(
            (res) => {
                setComments(res.data)
            },
            (error) => {
              console.log("Private page", error.response);
              // Invalid token
              if (error.response && error.response.status === 403) {
                AuthService.logout();
                navigate("/login");
                window.location.reload();
              }
            }
          );        
    }, [postId])

    return (
        
        <ul className="list-group list-group-flush">
            {
                comments.map(c =>
                    <li className="list-group-item" key={c.id}>
                        {c.name}
                    </li>
                )
            }
        </ul>

    )
}
