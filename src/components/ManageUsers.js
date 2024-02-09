import React, { useEffect, useState } from "react";
import "../App.css";
import Modal from "../Modal";

const ManageUsers = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // To keep track of the user to delete
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchDataFromLocalStorage = () => {
      const storedData = localStorage.getItem("myData");
      if (storedData) {
        setData(JSON.parse(storedData));
      }
      // Move the code for setting initial data outside the conditional check
      const initialData = [
        { id: 1, name: "Text User", email: "textuser@gmail.com" },
        { id: 2, name: "Anne Hunter", email: "anne.hunter@mail.com" },
        { id: 3, name: "Jale Boser", email: "jale@yahoo.com" },
      ];
      setData(initialData);
      localStorage.setItem("myData", JSON.stringify(initialData));
    };

    fetchDataFromLocalStorage();
  }, []);

  const handleEdit = (id) => {
    console.log(`Edit item with id: ${id}`);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    const updatedData = data.filter((item) => item.id !== selectedUser.id);
    localStorage.setItem("myData", JSON.stringify(updatedData));
    setData(updatedData);
    setShowModal(false);
    alert(`${selectedUser.name} deleted`);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div>
      {data.length > 0 && (
        <>
          <h2>Users</h2>
          <div className="container">
            <div className="column">
              <h3>Name</h3>
              {data.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
            <div className="column">
              <h3>User Email Id</h3>
              {data.map((item) => (
                <p key={item.id}>{item.email}</p>
              ))}
            </div>
            <div className="column">
              <h2>Actions</h2>
              {data.map((item) => (
                <div key={item.id}>
                  <div style={{ marginBottom: "10px" }}>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <span style={{ marginRight: "10px" }}></span>
                    <button onClick={() => handleDelete(item)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <Modal
        p="Are you sure you want to delete this user?"
        isOpen={showModal}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ManageUsers;
