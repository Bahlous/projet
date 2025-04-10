import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../JS/actions/userAction";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, user]);

  return (
    <>
      <div className="user-card">
        <h2>{user.name}</h2>
        <div>
          <button onClick={() => dispatch(deleteUser(user._id))}>Delete</button>
          <button className="details-btn" onClick={() => setShowDetails(true)}>
            See Details
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="modal-overlay" onClick={() => setShowDetails(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>User Details</h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>ID:</strong> {user._id}</p>
            {/* Add more fields as needed */}
            <button onClick={() => setShowDetails(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserCard;
