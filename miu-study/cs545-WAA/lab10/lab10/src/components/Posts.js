
import React, {useState, useEffect} from 'react'
import Post from './Post'
import axios from 'axios'
import { Link } from "react-router-dom";
import PostDetail from './PostDetail';
import { useNavigate } from 'react-router-dom';
import PostService from '../services/PostService'
import AuthService from '../services/AuthService';

/*
lab 8 
export default function Posts({ fetchFlag, clickedItem }) {
    */
export default function Posts({ fetchFlag }) {
    console.log('RENDER POSTS')
    
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        PostService.getAllPosts().then(
          (res) => {
            setPosts(res.data)
          },
          (error) => {
            console.log("Private page", error.response);
            //navigate("/login");
            // Invalid token
            if (error.response && error.response.status === 403) {
              AuthService.logout();
              navigate("/login");
              //window.location.reload();
            }
          }
        );
      }, []);
   
    return (
        <div>
            <div className='post-box-container'>
                { posts &&
                    posts.map(s =>
                      <Link to={`${s.id}`} key={s.id}><Post key={s.id} id={s.id} title={s.title} author={s.author} />
                      </Link>  
                    )
                }
            </div>
            <PostDetail />
        </div>
    )
}
