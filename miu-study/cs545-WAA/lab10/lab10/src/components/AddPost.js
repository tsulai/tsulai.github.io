import React, { useCallback, useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../services/AuthService'
import PostService from '../services/PostService'

export default function AddPost() {
    console.log('RENDER ADD POST')
   
    const newPostForm = useRef();
    
    const [validate, setValidate] = useState({})
    const [status, setStatus] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
      if(AuthService.getCurrentUser === ''){
        AuthService.logout();
        navigate("/login");
        window.location.reload();
      }
    }, [])
    
    const addPost = () => {
        //useRef
        const form = newPostForm.current;
        const post = {
            title : form['title'].value,
            author: form['author'].value,
            content: form['content'].value,
            userId: 1
        }

        PostService.addPost(post).then(
            (res) => {
             setStatus("Successfully created new post.")
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

        // //hardcoded for now
        // //setPost({ ...post, 'userId': 1 })//previously post was state by using useState
        // axios.post(`/posts`, post)
        //     .then(res => {
        //         console.log(res)
        //         //changeFetchFlag()//fetchFlag ပြန်မပို့တော့ page သက်သက်ဖြစ်သွားပြီမို့ Post သွားရင် အစက ပြန်Load မှာပဲ
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }
    //useCallback to prevent <Comment> component render again when click Add Post Button
    const handleAddPost = useCallback(() => {
        if(validateForm()){
            addPost();            
        }
    },[])

    const handleReset = () =>{
        const form = newPostForm.current;
        form['title'].value = '';
        form['author'].value = '';
        form['content'].value = '';
        setStatus('');        
    }

    const validateForm = () =>{
        let errors = {}
        const form = newPostForm.current;
        if(form['title'].value === ''){ 
            errors.title = 'Title is required.*';
        }
        if(form['author'].value === ''){
            errors.author = 'Author is required.*';
        }
        if(form['content'].value === ''){
            errors.content = 'Content is required.*';
        }
        setValidate(errors)

        if (Object.keys(errors).length === 0) {
            return true;
          } else {
            return false;
          }
    } 

    return (
        <div className="col-md-6 mb-3 ">
            <h4>Add Post</h4>
            <div className="field-validate">{status}</div>
            <form ref={newPostForm}>
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input  required type="text" className="form-control" id="postTitle" placeholder="Enter post title"  name={'title'}  />
                    <div className="field-validate">{ validate.title}</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Author</label>
                    <input required type="text" className="form-control" id="postAuthor" placeholder="Enter post title" name={'author'}  />
                    <div className="field-validate">{ validate.author}</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Content</label>
                    <textarea required className="form-control" id="postContent" rows="3"  name={'content'} ></textarea>
                    <div className="field-validate">{validate.content}</div>
                </div>
            </form>           
            <div>
                <div className="col-auto">
                    <button className="btn btn-primary mb-3"  onClick={handleAddPost}>Add Post</button>
                    <button className="btn btn-submit mb-3"  onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}
