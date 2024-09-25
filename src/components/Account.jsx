import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser"))
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();

  // Fetch user data from localStorage
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName); // Set first name from user object
      setLastName(user.lastName); // Set last name from user object
      setEmail(user.email); // Set email from user object
    }
  }, [user]); // Only run once when the component mounts

  const handleEdit = () => {
    setShowModal(true);
  };

  // update the user
  const handleUpdate = (e) =>{
    e.preventDefault();
     // Create updated user object
     const updatedUser = {
      ...user,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    // Update state and localStorage
    setUser(updatedUser);
    localStorage.setItem("loggedUser", JSON.stringify(updatedUser));
    setShowModal(false);

  }

  // Delete modal
  const handleDelete = (e) =>{
    e.preventDefault();

    setShowDeleteModal(true);
  }

  // confirm Delete
  const confirmDelete = () =>{
    localStorage.removeItem("loggedUser");

    setUser(null);
    setFirstName("");
    setLastName("");
    setEmail("");
    setShowDeleteModal(false);
  }

  // navbar

  const handleRegister = () => {
    navigate('/'); // Navigate to the register page
  };

  const handleLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="registration-detail">
        <nav class="nav-detail navbar justify-content-end">
        <form class="form-inline">
          <button onClick={handleLogin} class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Login
          </button>
          <button onClick={handleRegister} class="btn btn-outline-primary my-2 my-sm-0" type="submit">
            Register
          </button>
        </form>
      </nav>
    <div>
      <h1 className="table-title">User List</h1>

      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td className="d-flex edit-logout-btn">
              <button onClick={handleEdit} className="btn btn-primary">
                Edit
              </button>
              <button onClick={handleDelete} className="btn btn-danger">Logout</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Modal for editing user */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal_content">
            <h3 className="text-light">Edit User</h3>
            <form onSubmit={handleUpdate}>
              <div className="form-group input-field">
                <label htmlFor="" className="text-light">
                  First Name:
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Edit First Name"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group input-field">
                <label htmlFor="" className="text-light">
                  Last Name:
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Edit Last Name"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group input-field">
                <label htmlFor="" className="text-light">
                  Email:
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Edit Email"
                  required
                  className="form-input"
                />
              </div>

              <div className="d-flex justify-content-between mt-4 mb-3">
                <button type="submit" className="btn btn-success save-btn-detail">Save Changes</button>
                <button onClick={()=>{setShowModal(false)}} className="btn btn-danger save-btn-detail">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      
      {/* Modal for confirming deletion */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal_content">
            <h4 className="text-light">Confirm Delete</h4>
            <p className="text-light">Are you sure you want to delete this user?</p>
            <div className="modal-actions">
              <button onClick={confirmDelete} className="save-btn btn btn-success">Yes, Delete</button>
              <button onClick={() => setShowDeleteModal(false)} className="cancel-btn btn btn-danger">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Account;
