import PropTypes from "prop-types";
import "./Sidebar.css";
import { useState } from "react";

const Sidebar = (props) => {
  const data = props.todoItem;
  const [name, setName] = useState(data.name);
  const [isImportant, setIsImportan] = useState(data.isImportant);
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);

  const handleSave = () => {
    const newTodo = { ...data, name, isImportant, isCompleted };
    props.handleTodoItemChange(newTodo);
    props.setShowSidebar(false);
  };

  if (!data) return null;
  return (
    <div className="sidebar">
      <form className="sb-form">
        <div className="sb-form-field">
          <label htmlFor="sb-name">Todo Name</label>
          <input
            id="sb-name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => {
              //   props.handleTodoNameChange(data.id, e.target.value);
              setName(e.target.value);
            }}
            readOnly
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-isImportant">Is important ?</label>
          <input
            id="sb-isImportant"
            name="isImportant"
            type="checkbox"
            checked={isImportant}
            onChange={() => {
              setIsImportan(!isImportant);
            }}
            readOnly
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-completed">Is completed?</label>
          <input
            id="sb-completed"
            name="isCompleted"
            type="checkbox"
            checked={isCompleted}
            onChange={() => {
              setIsCompleted(!isCompleted);
            }}
            readOnly
          />
        </div>
      </form>
      <div className="sb-footer">
        <button onClick={handleSave}>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  todoItem: PropTypes.object.isRequired,
  handleTodoItemChange: PropTypes.func.isRequired,
  setShowSidebar: PropTypes.bool.isRequired,
};

export default Sidebar;
