import React from "react";
import "./task-summary.scss";
const TaskSummary = () => {
  return (
    <div className="task-summary">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Done by</th>
            <th>Task</th>
            <th>Status</th>
            <th>Follow-up Date</th>
            <th>Task Close Date</th>
            <th>Task Closed by</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default TaskSummary;
