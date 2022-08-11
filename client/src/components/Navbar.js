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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          eValley
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
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

          </ul>
          <ul className="nav navbar-nav navbar-right">
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <li className="nav-item active">
                  <Link className="nav-link active mx-3" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link active mx-3" to="/signup">
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
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a href="#" class="navbar-brand">Brand</a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a href="#" class="nav-item nav-link active">Home</a>
                <a href="#" class="nav-item nav-link">Profile</a>
                <a href="#" class="nav-item nav-link">Messages</a>
                <a href="#" class="nav-item nav-link disabled" tabindex="-1">Reports</a>
            </div>
            <div class="navbar-nav ms-auto">
                <a href="#" class="nav-item nav-link">Login</a>
            </div>
        </div>
    </div>
</nav> */}
    </div>
  );
};

export default Navbar;
