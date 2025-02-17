import { useMemo } from "react";
import "./FilterPanel.css";
import PropTypes from "prop-types";
import CategoryList from "./CategoryList";
import FilterList from "./FilterList";
import { FILTER_ITEMS } from "../constant";
import { useAppContext } from "../context/AppProvider";

const FilterPanel = () => {
  const { todoList, searchText, setSearchText } = useAppContext();

  const countByFilterType = useMemo(() => {
    return todoList.reduce(
      (acc, cur) => {
        if (cur.isImportant) {
          acc.important += 1;
        }
        if (cur.isCompleted) {
          acc.completed += 1;
        }
        if (cur.isDeleted) {
          acc.deleted += 1;
        }
        return acc;
      },
      { all: todoList.length, important: 0, completed: 0, deleted: 0 }
    );
  }, [todoList]);

  return (
    <div className="filler-panel">
      <input
        className="search-text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <FilterList
        FILTER_ITEMS={FILTER_ITEMS}
        countByFilterType={countByFilterType}
      />
      <CategoryList />
    </div>
  );
};

FilterPanel.propTypes = {
  todoList: PropTypes.array.isRequired,
};

export default FilterPanel;
