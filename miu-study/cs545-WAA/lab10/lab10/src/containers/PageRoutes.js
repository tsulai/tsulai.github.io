import React from 'react'
import { Navigate, BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import AddPost from '../components/AddPost';
import PostDetail from '../components/PostDetail';
import Posts from '../components/Posts';
import Login from '../components/Login'

export default function PageRoutes() {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<Navigate replace to="/posts" />} />
                <Route path='/posts' element={<Posts />} >
                    <Route path=':id' element={<PostDetail />} />
                </Route>
                <Route path="/new" element={<AddPost />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>

    )
}
