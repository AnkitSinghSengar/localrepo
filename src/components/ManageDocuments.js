import React, { useEffect, useState } from "react";
import "../App.css";

import SecondModal from "../SecondModal";
import Modal from "../Modal";
import ThirdModal from "../ThirdModal";

const ManageDocuments = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // To keep track of the user to delete
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

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
    setShowEditModal(true);
  };

  const handleUpload = () => {
    setShowUploadModal(true);
  };
  const handleConfirmUpload = () => {
    setShowUploadModal(false);
    alert("File Uploaded");
  };
  const handleDelete = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    const updatedData = data.filter((item) => item.id !== selectedUser.id);
    localStorage.setItem("myData", JSON.stringify(updatedData));
    setData(updatedData);
    setShowDeleteModal(false);
    alert(`${selectedUser.name} deleted`);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleUploadCancel = () => {
    setShowUploadModal(false);
  };

  const handleEditCancel = () => {
    setShowEditModal(false);
  };

  const handleShare = () => {
    alert("Documents are shared");
  };

  const handleSave = () => {
    alert("File Changes Saved");
  };

  return (
    <div>
      {data.length > 0 && (
        <>
          <h2>My Uploads</h2>
          <div className="container">
            <div className="column">
              <h3>Label</h3>
              {data.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
            <div className="column">
              <h3>File Name</h3>
              {data.map((item) => (
                <p key={item.id}>{item.email}</p>
              ))}
            </div>
            <div className="column">
              <h3>Action</h3>
              {data.map((item) => (
                <div key={item.id}>
                  <div style={{ marginBottom: "10px" }}>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <span style={{ marginRight: "10px" }}></span>
                    <button onClick={() => handleDelete(item)}>Delete</button>
                    <span style={{ marginRight: "10px" }}></span>
                    <button onClick={() => handleShare()}>Share</button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button onClick={() => handleUpload()}>Add Upload</button>
            </div>
          </div>
        </>
      )}
      <SecondModal
        p="Upload"
        isOpen={showUploadModal}
        onCancel={handleUploadCancel}
        onConfirm={handleConfirmUpload}
      />
      <Modal
        p="Delete File"
        isOpen={showDeleteModal}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
      <ThirdModal
        p="Edit"
        isOpen={showEditModal}
        onSave={handleSave}
        onCancel={handleEditCancel}
      />
    </div>
  );
};

export default ManageDocuments;
