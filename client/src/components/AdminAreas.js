import {React, useEffect, useState, useRef} from 'react'

const AdminAreas = () => {
    const host = process.env.NODE_ENV === 'production' ? 'https://evalleyhackathon.herokuapp.com' : 'http://localhost:5000';

    const [allData, setAllData] = useState({allAreas:[], allUsers: []});
    const [dltArea, setDltArea] = useState({name: "", address: "", totalSlots: ""});
    const ref = useRef(null);
    const refClose = useRef(null);
    const ref2 = useRef(null);
    const refClose2 = useRef(null);

    const [newArea, setNewArea] = useState({name: "", address: "", totalslots: null});


    useEffect(() => {
        fetch(`${host}/api/auth/admin`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("DATA is: ", data);
            setAllData(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
      
    }, [])

    const handleDelete = (area)=>{
        console.log("To delete: ", area._id);
        setDltArea(area);
        ref.current.click();
    }

    const handleDltConfirm = ()=>{
        const areaID = dltArea._id;
        fetch(`${host}/api/auth/removearea`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({areaID: areaID}),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        refClose.current.click();
        window.location.reload();
    }

    const handleAddNewArea = ()=>{
        ref2.current.click();
    }

    const onChange = (e)=>{
        setNewArea({...newArea, [e.target.name]: e.target.value})
    }

    const handleAddArea = (e)=>{
        e.preventDefault();
        refClose2.current.click();
        console.log("Adding new Area");
        console.log(newArea);
        fetch(`${host}/api/auth/addarea`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(newArea),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }
    

  return (
    <>
        {/* MODAL STARTING */}
        <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel" style={{"color": "red"}}>
                <b>Confirm Delete</b> 
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <h5>Name: {dltArea.name}</h5>
              <h5>Address: {dltArea.address}</h5>
              <h5>Total Slots: {dltArea.totalSlots}</h5>
              
            </div>
            <div className="modal-footer">
              <button 
                // ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref = {refClose}
              >
                Close
              </button>
              <button
                onClick={handleDltConfirm}
                type="button"
                className="btn btn-danger"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND MODAL FOR ADDING AREA */}
      <button
        ref={ref2}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add a new area
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              {/* Form */}
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    // aria-describedby="emailHelp"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    onChange={onChange}
                    // minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="totalslots" className="form-label">
                    Total slots
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="totalslots"
                    name="totalslots"
                    onChange={onChange}
                    // minLength={5}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button 
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref = {refClose2}
              >
                Close
              </button>
              <button
                onClick={handleAddArea}
                type="button"
                className="btn btn-primary"
              >
                Add area
              </button>
            </div>
          </div>
        </div>
      </div>

    <div>
        <h1 className='my-5'>Area Information</h1>
        <div className="text-center my-5">
            <button type="button" class="btn btn-success btn-lg" onClick={()=>handleAddNewArea()}>Add new area</button>

        </div>

        <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Total slots</th>
    </tr>
  </thead>
  <tbody>
    {
        allData.allAreas.map((area)=>{
            
            return(<tr key={area._id}>
                <td>{area.name}</td>
                <td>{area.address}</td>
                <td>{area.totalSlots}</td>
                <td><button className='btn btn-danger' onClick={()=>handleDelete(area)}>Delete</button></td>
            </tr>)
        })
    }
    
    
   
  </tbody>
</table>
    
    
    </div>
    </>
  )
}

export default AdminAreas