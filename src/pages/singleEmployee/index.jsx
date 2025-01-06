// Import necessary hooks and components from React and Ant Design
import React, { useState, useEffect } from 'react';
import { Switch, Input, Button, message, Avatar } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';

export const SingleEmployee = () => {
  // Extract 'id' from URL parameters (used to fetch specific employee data)
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Retrieve previously stored employee data from localStorage or initialize with an empty array
  const previousValues = JSON.parse(localStorage.getItem('user')) || [];

  // State to store employee data, initialized with data of the employee based on the id
  const [editedData, setEditedData] = useState(previousValues[id] || {});

  // State to toggle edit mode
  const [isEditable, setIsEditable] = useState(false);

  // Function to handle changes in form fields (name, role, email, etc.)
  const handleInputChange = (field, value) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  // Function to enable edit mode
  const handleEdit = () => {
    setIsEditable(true);
  };

  // Function to save the updated data and store it in localStorage
  const handleSave = () => {
    const updatedValues = [...previousValues]; // Create a copy of the previous employee data

    // Assign the current id to the editedData (to keep track of the employee)
    editedData.id = id;

    // Replace the old record with the updated one
    updatedValues.splice(id, 1, editedData);

    // Save the updated employee data in localStorage
    localStorage.setItem('user', JSON.stringify(updatedValues));

    // Show a success message
    message.success('Employee data updated successfully!');

    // Disable edit mode after saving
    setIsEditable(false);
  };

  return (
    <div className="d-flex flex-column gap-3">
      <div className="Summary">
        <div className="mainTitle">
          <h6 className="m-0 p-2 mb-2 bg-Titles rounded p-0 text-start text-dark">Summary</h6>
          <div className="d-flex px-2 w-50 flex-column gap-2">
            {/* Employee Information */}
            <div className="d-flex justify-content-between align-items-center ">
              <small className="m-0 lineHeight-20 p-0 text-secondary">Employee</small>
              <div className="d-flex w-50">
                {/* Avatar to display employee's profile picture */}
                <Avatar
                  src={editedData?.image} 
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
                {/* Name Input Field */}
                <Input
                  value={editedData.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={!isEditable}
                  className={`${isEditable ? "border" : "border-0"} bg-transparent`}
                />
              </div>
            </div>

            {/* Role Input Field */}
            <div className="d-flex justify-content-between align-items-center">
              <small className="m-0 lineHeight-20 p-0 text-secondary">Role</small>
              <Input
                value={editedData.role || ''}
                onChange={(e) => handleInputChange('role', e.target.value)}
                disabled={!isEditable}
                className={`w-50 ${isEditable ? "border" : "border-0"} bg-transparent`}
              />
            </div>

            {/* Email Input Field */}
            <div className="d-flex justify-content-between align-items-center">
              <small className="m-0 lineHeight-20 p-0 text-secondary">E-Mail</small>
              <Input
                value={editedData.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={!isEditable}
                className={`w-50 ${isEditable ? "border" : "border-0"} bg-transparent`}
              />
            </div>

            {/* Phone Input Field */}
            <div className="d-flex justify-content-between align-items-center">
              <small className="m-0 lineHeight-20 p-0 text-secondary">Phone</small>
              <Input
                value={editedData.phone || ''}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                disabled={!isEditable}
                className={`w-50 ${isEditable ? "border" : "border-0"} bg-transparent`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Employee Date Information */}
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="Summary">
            <div className="mainTitle">
              <h6 className="m-0 p-2 mb-2 bg-Titles rounded p-0 text-start text-dark">Date</h6>
              <div className="d-flex px-2 w-75 flex-column gap-2">
                {/* Start Date Input Field */}
                <div className="d-flex justify-content-between align-items-center">
                  <small className="m-0 lineHeight-20 p-0 text-secondary">Start Date</small>
                  <Input
                    className={`w-50 ${isEditable ? 'border' : 'border-0'} bg-transparent`}
                    type="date"
                    value={editedData.date || ''}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    disabled={!isEditable}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Active Status */}
        <div className="col-12 col-md-6">
          <div className="Summary">
            <div className="mainTitle">
              <h6 className="m-0 p-2 mb-2 bg-Titles rounded p-0 text-start text-dark">Active</h6>
              <div className="d-flex px-2 w-75 flex-column gap-2">
                <div className="d-flex justify-content-between align-items-center">
                  <small className="m-0 lineHeight-20 p-0 text-secondary">Active</small>
                  {/* Active Status Switch */}
                  <Switch
                    checked={editedData.active || false}
                    onChange={(value) => handleInputChange('active', value)}
                    size="small"
                    disabled={!isEditable}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons: Save, Cancel, Edit */}
      <div className="d-flex justify-content-end gap-2 mt-3">
        {isEditable ? (
          <>
            {/* Save and Cancel buttons shown when in edit mode */}
            <Button type="primary" className="AddEmployee px-5" onClick={handleSave}>
              Save
            </Button>
            <Button className="AddEmployee bg-danger px-5" onClick={() => setIsEditable(false)}>
              Cancel
            </Button>
          </>
        ) : (
          // Edit button shown when not in edit mode
          <Button className="AddEmployee px-5" onClick={handleEdit}>Edit</Button>
        )}
      </div>
    </div>
  );
};
