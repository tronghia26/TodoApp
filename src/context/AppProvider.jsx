import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Tôi học thêm",
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
      category: "personal",
    },
    {
      id: 2,
      name: "Tôi học toán",
      isImportant: true,
      isCompleted: true,
      isDeleted: false,
      category: "personal",
    },
    {
      id: 3,
      name: "Tôi học nhạc",
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
      category: "personal",
    },
  ]);
  const [selectedFilterId, setSelectedFilterId] = useState("all");
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeTodoItemId, setActiveTodoItemId] = useState();
  const [searchText, setSearchText] = useState("");

  return (
    <AppContext.Provider
      value={{
        selectedCategoryId,
        setSelectedCategoryId,
        todoList,
        setTodoList,
        selectedFilterId,
        setSelectedFilterId,
        showSidebar,
        setShowSidebar,
        activeTodoItemId,
        setActiveTodoItemId,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
