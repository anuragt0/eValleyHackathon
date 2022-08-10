import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navigate('/login');
    }

    const showUserProfile = ()=>{
        navigate('/profile')
    }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          eValley
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link active" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link active" to="/areas">
                Slot details
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>

            {/* <li className="nav-item active">
        <Link className="nav-link active" to="#">Something</Link>
      </li> */}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <li className="nav-item active">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link active" to="/signup">
                    Sign up
                  </Link>
                </li>
              </form>
            ) : (
                <>
                <button className="mx-3" onClick={showUserProfile}>
                    <i className="fa-solid fa-user " onClick={showUserProfile}></i>
                </button>
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
