import { useMemo } from "react";
import "./FilterPanel.css";
import PropTypes from "prop-types";
import CategoryList from "./CategoryList";
import FilterList from "./FilterList";

const FILTER_ITEMS = [
  {
    id: "all",
    label: "ALL",
    iconPath: "/inbox.png",
  },
  {
    id: "important",
    label: "Important",
    iconPath: "/flag.png",
  },
  {
    id: "completed",
    label: "Completed",
    iconPath: "/check.png",
  },
  {
    id: "delete",
    label: "Delete",
    iconPath: "/delete.png",
  },
];

const FilterPanel = ({
  selectedFilterId,
  setSelectedFilterId,
  searchText,
  setSearchText,
  todoList,
}) => {
  // const [selectedFilterId, setSelectedFilterId] = useState("all");

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
        selectedFilterId={selectedFilterId}
        setSelectedFilterId={setSelectedFilterId}
        countByFilterType={countByFilterType}
      />
      <CategoryList />
    </div>
  );
};

FilterPanel.propTypes = {
  selectedFilterId: PropTypes.string.isRequired,
  setSelectedFilterId: PropTypes.func.isRequired,
  todoList: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default FilterPanel;
