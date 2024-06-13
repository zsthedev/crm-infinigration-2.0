import React, { useEffect, useState } from "react";
import "./remarks.scss";
import Remark from "../../../componets/remark/Remark";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../loader/Loader";
import { createRemarks } from "../../../redux/actions/remark";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
const Remarks = () => {
  const { loading, error, message } = useSelector((state) => state.remarks);
  const [title, setTitle] = useState("");
  const [remark, setRemark] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createRemarks(params.id, title, remark));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
        toast.success(message);
        dispatch({ type: "clearMessage" });
      }
  }, [error,message]);

  return loading ? (
    <Loader />
  ) : (
    <section className="section" id="remarks">
      <form action="" onSubmit={submitHandler}>
        <h2 className="heading">Add Remarks</h2>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name=""
          id=""
          placeholder="Enter Remarks"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
        ></textarea>
        <button className="primary-btn">Submit</button>
      </form>

      <div className="review-container">
        <Remark />
      </div>
    </section>
  );
};

export default Remarks;
