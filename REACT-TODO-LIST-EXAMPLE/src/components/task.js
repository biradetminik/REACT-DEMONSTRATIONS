import React, { useState } from "react";
import "../styles/task.css";

export default function Task(props) {
  const [isEdited, setIsEdited] = useState(false);
  let newTaskName = props.name;

  const editButton = <button onClick={editTask}>Edit</button>;

  const editField = (
    <input
      type="text"
      id="edit-task-input"
      defaultValue={newTaskName}
      onChange={(e) => (newTaskName = e.target.value)}
    />
  );

  const taskLabel = <span>{props.name}</span>;

  /// *** FUNCTIONS *** ///
  function editTask() {
    setIsEdited(!isEdited);
  }

  function saveTask(id, taskName) {
    props.onEdit(id, taskName);
    setIsEdited(!isEdited);
    newTaskName = null;
  }
  const saveButton = (
    <button id="btn-save" onClick={() => saveTask(props.id, newTaskName)}>
      Save
    </button>
  );

  /// *** HTML *** ///
  return (
    <li>
      <p>
        {isEdited ? editField : taskLabel}
        {"  "} Completed ?? <b>{props.isCompleted ? "YES" : "NO :((("}</b>
      </p>

      {/* COMPLETE BUTTON */}
      <button onClick={() => props.onComplete(props.id)}>
        {props.isCompleted ? "UNCOMPLETE!" : "Complete"}
      </button>

      {isEdited ? saveButton : editButton}

      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </li>
  );
}
