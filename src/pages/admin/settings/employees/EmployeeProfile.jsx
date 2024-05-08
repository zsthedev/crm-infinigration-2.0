import React, { useEffect, useState } from "react";
import AdminData from "../../../../componets/admin data/AdminData";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../../../redux/actions/admin";
import { useParams } from "react-router-dom";
import Loader from "../../../loader/Loader";
import placeholder from "../../../../assets/placeholder.jpg";
const EmployeeProfile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { loading, error, message, employee } = useSelector(
    (state) => state.admin
  );
  const [email, setEmail] = useState(employee ? employee.employee.email : "");
  const [name, setName] = useState(employee && employee.employee.name);
  const [role, setRole] = useState(employee && employee.employee.role);

  useEffect(() => {
    dispatch(getEmployee(params.id));
  }, []);
  return loading ? (
    <Loader /> || !employee.employee
  ) : (
    <section className="section" id="employee-profile">
      <div className="profile-container">
        <div className="image-container">
          <img
            src={
              employee && employee.employee.avatar.url === "temp_url"
                ? placeholder
                : employee && employee.employee.avatar.url
            }
            alt=""
          />
          <span>
            Joined On: {employee && employee.employee.createdAt.split("T")[0]}
          </span>
          <button className="primary-btn">Upload Profile Picture</button>
        </div>
        <form action="">
          <input
            type="text"
            placeholder="Name"
            value={(employee && employee.employee.name) || ""}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={(employee && employee.employee.email) || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Role"
            value={(employee && employee.employee.role) || ""}
            onChange={(e) => setRole(e.target.value)}
            readOnly
          />
          <button className="primary-btn">Update Profile</button>
        </form>
      </div>

      <div className="stats-container">
        <AdminData description={"Leads Assigned"} number={0} />
        <AdminData description={"Conversion"} number={0} />
        <AdminData description={"Success Ration"} number={0} />
      </div>
    </section>
  );
};

export default EmployeeProfile;
