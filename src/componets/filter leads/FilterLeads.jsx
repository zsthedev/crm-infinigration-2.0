import React from "react";
import Select from "react-select";
import "./filterleads.scss";
const FilterLeads = ({ isOpen }) => {
  return (
    <form
      action=""
      className="filter-leads"
      style={{ display: isOpen ? "none" : "" }}
    >
      <div className="inputs-row">
        <div>
          <label htmlFor="">Select Branch</label>
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "none",
                outline: "none",
                backgroundColor: "#f1f1f1",
                color: "#363636",
                fontSize: "14px",
                borderRadius: "4px",
                padding: "2px",
              }),
            }}
          />
        </div>

        <div>
          <label htmlFor="">Select Employees</label>
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "none",
                outline: "none",
                backgroundColor: "#f1f1f1",
                color: "#363636",
                fontSize: "14px",
                borderRadius: "4px",
                padding: "2px",
              }),
            }}
          />
        </div>

        <div>
          <label htmlFor="">Select Date</label>
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "none",
                outline: "none",
                backgroundColor: "#f1f1f1",
                color: "#363636",
                fontSize: "14px",
                borderRadius: "4px",
                padding: "2px",
              }),
            }}
          />
        </div>

        <div>
          <label htmlFor="">Searh by Delayed Days</label>
          <input type="number" placeholder="Delayed Days" />
        </div>

        <div>
          <label htmlFor="">Search by Tags</label>
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "none",
                outline: "none",
                backgroundColor: "#f1f1f1",
                color: "#363636",
                fontSize: "14px",
                borderRadius: "4px",
                padding: "2px",
              }),
            }}
          />
        </div>
      </div>
      <button className="primary-btn">Filter</button>
    </form>
  );
};

export default FilterLeads;
