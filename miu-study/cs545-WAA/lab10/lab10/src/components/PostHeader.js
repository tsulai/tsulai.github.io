import React, {useState} from 'react'
import AuthService from '../services/AuthService';

export default function PostHeader() {
    console.log(AuthService.getCurrentUser)
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const isSignUp = AuthService.getCurrentUser === '' ? true : false
    const isWelcome = AuthService.getCurrentUser === '' ? true : false

    const handleLogout = () => {
      AuthService.logout();
      window.location.href = "/login";
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
      <a className="navbar-brand text-info font-weight-bolder" href="/">
        <img src="https://compro.miu.edu/wp-content/uploads/Compro-25th-year-laurels-150.png" alt="Logo" width="36" height="36" className="vertical-align-middle" />
        <span className="">&nbsp;Lab 10 React Router</span>
      </a>
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-between`} id="navbarsExample09">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/posts">Posts</a>
          <a className="nav-item nav-link" href="/new">New Post</a>
        </div>

        <div className="navbar-nav">
        <div className="navbar-nav">
          {
            isWelcome ? <a className="nav-item nav-link" href="/login">Sign In</a>
              : <React.Fragment><a className="nav-item nav-link" href="#">Profile</a><a className="nav-item nav-link" >Welcome, {AuthService.getCurrentUser.username}</a></React.Fragment>
          }

          {
            isSignUp ? <a className="nav-item nav-link" href="/signup" >Sign Up</a> :
              <a className="nav-item nav-link" href="#" onClick={handleLogout}>Logout</a>
          }

        </div>
        </div>
      </div>
    </nav>
  )
}
