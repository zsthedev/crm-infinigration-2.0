import React, { useEffect, useState } from "react";
import ClientProfile from "../../../componets/client profile/ClientProfile";
import Select from "react-select";
import "./lead-activities.scss";
import TaskSummary from "../../../componets/task summary/TaskSummary";
import Profiling from "../../../componets/profiling/Profiling";
import Documents from "../../../componets/documents/Documents";
import { getLeadDetails, getTaskSummary } from "../../../redux/actions/leads";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../loader/Loader";
const LeadActivities = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const id = params.id;
  const { loading, leads, details } = useSelector((state) => state.leads);

  let tasks = leads && leads.leads.find((l) => l._id.toString() === id);

  tasks = tasks.taskSummary;
  const [activity, setActivity] = useState("summary");

  const options = [
    { value: "summary", label: "Task Summary" },
    { value: "profile", label: "Client Profile" },
    { value: "documents", label: "Documents" },
  ];

  useEffect(() => {
    dispatch(getLeadDetails(id));
  }, []);

  console.log(activity);
  return loading || !details || !leads ? (
    <Loader />
  ) : (
    <section className="section" id="lead-activities">
      <ClientProfile client={details.client} />
      <div className="selector">
        <Select
          placeholder={"Task Summary"}
          options={options}
          onChange={setActivity}
          defaultValue={"summary"}
          value={activity}
        />
      </div>

      {activity.value === "summary" || activity === "summary" ? (
        <TaskSummary data={tasks} />
      ) : (
        ""
      )}
      {activity.value === "profile" ? <Profiling /> : ""}
      {activity.value === "documents" ? <Documents programs={details.client.program}/> : ""}
    </section>
  );
};

export default LeadActivities;
