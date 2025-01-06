import React, { useState, useEffect } from 'react';
import { Avatar, Switch } from 'antd';

export const PreviewData = () => {
  const [active, setActive] = useState(false); // State to manage the switch
  const previousValues = JSON.parse(sessionStorage.getItem('user')) || {};

  useEffect(() => {
    // Set initial state from session storage
    if (previousValues.active !== undefined) {
      setActive(previousValues.active);
    }
  }, [previousValues]);

  const onChange = (checked) => {
    console.log(`Switch toggled to ${checked}`);
    setActive(checked);

    // Update sessionStorage with new active state
    const updatedValues = { ...previousValues, active: checked };
    sessionStorage.setItem('user', JSON.stringify(updatedValues));
  };

  return (
    <div className="d-flex flex-column gap-3">
      <div className="Summary">
        <div className="mainTitle">
          <h6 className="m-0 p-2 mb-2 bg-Titles rounded p-0 text-start text-dark">Summary</h6>
          <div className="d-flex px-2 w-75 flex-column gap-2">
            <div className="d-flex justify-content-between align-items-center">
              <small className="m-0 lineHeight-20 p-0 text-secondary">Employee</small>
              <small className="m-0 lineHeight-20 p-0 text-dark"><Avatar
      src={previousValues?.image} 
      style={{
        width: 30,
        height: 30,
      }}
    />
    {previousValues?.name}</small>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="m-0 lineHeight-20 p-0 text-secondary">Role</small>
              <small className="m-0 lineHeight-20 p-0 text-dark">{previousValues?.role}</small>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="m-0 lineHeight-20 p-0 text-secondary">E-Mail</small>
              <small className="m-0 lineHeight-20 p-0 text-dark text-end" style={{
                 wordBreak: 'break-word', // Break words that are too long
                 textAlign: 'start',
              }}>{previousValues?.email}</small>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="m-0 lineHeight-20 p-0 text-secondary">Phone</small>
              <small className="m-0 lineHeight-20 p-0 text-dark">{previousValues?.phone}</small>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="Summary">
            <div className="mainTitle">
              <h6 className="m-0 p-2 mb-2 bg-Titles rounded p-0 text-start text-dark">Date</h6>
              <div className="d-flex px-2 w-75 flex-column gap-2">
                <div className="d-flex justify-content-between align-items-center">
                  <small className="m-0 lineHeight-20 p-0 text-secondary">Start Date</small>
                  <b className="m-0 lineHeight-20 p-0 text-dark">{previousValues?.date}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="Summary">
            <div className="mainTitle">
              <h6 className="m-0 p-2 mb-2 bg-Titles rounded p-0 text-start text-dark">Active</h6>
              <div className="d-flex px-2 w-75 flex-column gap-2">
                <div className="d-flex justify-content-between align-items-center">
                  <small className="m-0 lineHeight-20 p-0 text-secondary">Active</small>
                  <b className="m-0 lineHeight-20 p-0 text-dark">
                    <Switch checked={active} onChange={onChange} size="small" />
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
