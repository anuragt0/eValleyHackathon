import React from 'react'
import { Link } from "react-router-dom";


const Admin = () => {
    
  return (
    <div>
        <h1 className='my-3'>Welcome to the platform analysis</h1>

        <div className="card w-75 my-5 mx-3">
        <div className="card-body">
            <h5 className="card-title">All Areas</h5>
            <p className="card-text">Get all the information about the areas providing slots, add a new area and delete any existing area.</p>
            <Link to="/admin/areas" className="btn btn-primary">Areas</Link>
        </div>
        </div>

        <div className="card w-50 my-5 mx-3">
        <div className="card-body">
            <h5 className="card-title">All Users</h5>
            <p className="card-text">Get all the information ragarding the existing users on this platform, there activities, make any user admin etc.</p>
            <Link to="/admin/users" className="btn btn-primary">Users</Link>
        </div>
        </div>

    </div>
  )
}

export default Admin