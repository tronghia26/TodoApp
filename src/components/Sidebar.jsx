import PropTypes from "prop-types";
import "./Sidebar.css";
import { useState } from "react";
import { CATEGORY_ITEMS } from "../constant";

const Sidebar = (props) => {
  const data = props.todoItem;
  const [name, setName] = useState(data.name);
  const [isImportant, setIsImportan] = useState(data.isImportant);
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);
  const [category, setCategory] = useState(data.category);

  const handleSave = () => {
    const newTodo = { ...data, name, isImportant, isCompleted, category };
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
        <div className="sb-form-field">
          <label htmlFor="sb-category">Category</label>
          <select
            id="sb-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            readOnly
          >
            {CATEGORY_ITEMS.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              );
            })}
          </select>
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
