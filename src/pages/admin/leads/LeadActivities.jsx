import React, { useState } from "react";
import ClientProfile from "../../../componets/client profile/ClientProfile";
import Select from "react-select";
import "./lead-activities.scss";
import TaskSummary from "../../../componets/task summary/TaskSummary";
import Profiling from "../../../componets/profiling/Profiling";
import Documents from "../../../componets/documents/Documents";
const LeadActivities = () => {
  const [activity, setActivity] = useState("");

  const options = [
    { value: "summary", label: "Task Summary" },
    { value: "profile", label: "Client Profile" },
    { value: "documents", label: "Documents" },
  ];

  console.log(activity);
  return (
    <section className="section" id="lead-activities">
      <ClientProfile />
      <div className="selector">
        <Select
          placeholder={"Task Summary"}
          options={options}
          onChange={setActivity}
          defaultValue={"summary"}
          value={activity}
        />
      </div>

      {activity.value === "summary" ? <TaskSummary /> : ""}
      {activity.value === "profile" ? <Profiling /> : ""}
      {activity.value === "documents" ? <Documents /> : ""}
    </section>
  );
};

export default LeadActivities;
