import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Comments from './Comments'
import { useNavigate, useParams } from 'react-router-dom'
import PostService from '../services/PostService'
import AuthService from '../services/AuthService'
import AuthHeader from '../services/AuthHeader'

export default function PostDetail({ changeFetchFlag }) {
    console.log('RENDER POST DETAIL')
    const [post, setPost] = useState({})
    const params = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        PostService.deletePostById(params.id).then(
            (res) => {
              setPost({})
              navigate("/");
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
    }

    useEffect(() => {
        if (params.id) {
            PostService.getPostById(params.id).then(
                (res) => {
                  setPost(res.data)
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
        }
    }, [params.id])

    return (
        <div >
            { params.id && //param id ပါမှ Load တော့မှာ ဒါမပါရင် <Post> နဲ့အတူ <PostDetail> ပါ render လုပ်တော့ id မတွေ့တော့ api error တက်တာ
                
                //Object.keys(post).length !== 0 &&

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{post.author}</h6>
                        <p className="card-text">{post.content}</p>
                        <div className="card-header">Comments</div>
                        <Comments postId={params.id} />
                        <div className='text-center'>
                            <a href="#" className="card-link">edit</a>
                            <a href="#" className="card-link" onClick={handleDelete}>delete</a>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
