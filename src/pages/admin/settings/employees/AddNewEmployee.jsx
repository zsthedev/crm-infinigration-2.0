import React, { useEffect, useState } from "react";
import "./emplyee.scss";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../../redux/actions/admin";
import toast from "react-hot-toast";
import Loader from "../../../loader/Loader";
import { useNavigate } from "react-router-dom";
const AddNewEmployee = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const roleOptions = [
    {
      value: "marketing",
      label: "Marketing",
    },
    {
      value: "operations",
      label: "Operations",
    },

    {
      value: "finance",
      label: "Finance",
    },
  ];
  const dispatch = useDispatch();
  const { error, message, loading } = useSelector((state) => state.admin);

  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/admin/settings/employee");
    }
  }, [error, message]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createUser(name, email, password, role.value));
  };
  return loading ? (
    <Loader />
  ) : (
    <section className="section" id="add-new-employee">
      <div className="content">
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "69vw",
                border: "transparent",
                backgroundColor: "#F1F1F1",
                fontSize: "14px",
                padding: "3px",
                color: "#363636",
              }),
            }}
            placeholder="Choose Role"
            options={roleOptions}
            defaultValue={role}
            onChange={setRole}
            value={role}
          />
          <button className="primary-btn">Create Employee</button>
        </form>
      </div>
    </section>
  );
};

export default AddNewEmployee;
