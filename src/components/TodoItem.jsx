import PropTypes from "prop-types";

const TodoItem = (props) => {
  return (
    <div
      className="todo-item"
      onClick={() => {
        props.handleTodoItemClick(props.id);
      }}
    >
      <div style={{ display: "flex", gap: 4 }}>
        <input
          type="checkbox"
          checked={props.isCompleted}
          onChange={() => {
            props.handleCompletedCheckboxChange(props.id);
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <p className="todo-item-text">{props.name}</p>
      </div>
      {props.isImportant && <p>⭐</p>}
    </div>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isImportant: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  handleCompletedCheckboxChange: PropTypes.func.isRequired,
  handleTodoItemClick: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default TodoItem;
