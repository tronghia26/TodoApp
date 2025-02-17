import { useMemo, useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";
import FilterPanel from "./components/FilterPanel";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Tôi học thêm",
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: 2,
      name: "Tôi học toán",
      isImportant: true,
      isCompleted: true,
      isDeleted: false,
    },
    {
      id: 3,
      name: "Tôi học nhạc",
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
    },
  ]);

  const [selectedFilterId, setSelectedFilterId] = useState("all");
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeTodoItemId, setActiveTodoItemId] = useState();
  const [searchText, setSearchText] = useState("");

  const activeTodoItem = todoList.find((todo) => {
    return todo.id === activeTodoItemId;
  });

  const handleCompletedCheckboxChange = (todoId) => {
    const newTodoList = todoList.map((todo) => {
      if (todoId === todo.id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const handleTodoItemClick = (todoId) => {
    setShowSidebar(true);
    setActiveTodoItemId(todoId);
  };

  const handleTodoItemChange = (newTodo) => {
    const newTodoList = todoList.map((todo) => {
      if (newTodo.id === todo.id) {
        return newTodo;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const inputRef = useRef();

  const filteredTodos = useMemo(() => {
    return todoList.filter((todo) => {
      if (!todo.name.includes(searchText)) {
        return false;
      }
      switch (selectedFilterId) {
        case "all":
          return true;
        case "important":
          return todo.isImportant;
        case "completed":
          return todo.isCompleted;
        case "deleted":
          return todo.isDeleted;
        default:
          return true;
      }
    });
  }, [todoList, selectedFilterId, searchText]);

  return (
    <div className="container">
      <FilterPanel
        selectedFilterId={selectedFilterId}
        setSelectedFilterId={setSelectedFilterId}
        searchText={searchText}
        setSearchText={setSearchText}
        todoList={todoList}
      />
      <div className="main-content">
        <input
          ref={inputRef}
          type="text"
          name="add-new-task"
          placeholder="Add new task"
          className="task-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const value = e.target.value;
              setTodoList([
                ...todoList,
                {
                  id: crypto.randomUUID(),
                  name: value,
                  isImportant: false,
                  isCompleted: false,
                  isDeleted: false,
                },
              ]);
              inputRef.current.value = "";
            }
          }}
        />
        <div>
          {filteredTodos.map((todo) => {
            return (
              <TodoItem
                id={todo.id}
                name={todo.name}
                key={todo.id}
                isImportant={todo.isImportant}
                isCompleted={todo.isCompleted}
                handleCompletedCheckboxChange={handleCompletedCheckboxChange}
                handleTodoItemClick={handleTodoItemClick}
              />
            );
          })}
        </div>
        {showSidebar && (
          <Sidebar
            key={activeTodoItemId}
            todoItem={activeTodoItem}
            handleTodoItemChange={handleTodoItemChange}
            setShowSidebar={setShowSidebar}
          />
        )}
      </div>
    </div>
  );
}

export default App;
