import { useMemo } from "react";
import "./FilterPanel.css";
import PropTypes from "prop-types";

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

const FilterPanel = ({ selectedFilterId, setSelectedFilterId, todoList }) => {
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
      <input className="search-text" placeholder="Search" />
      <div className="filter-container">
        {FILTER_ITEMS.map((filterItem) => {
          return (
            <div
              className={`filter-item ${
                filterItem.id === selectedFilterId ? "selected" : ""
              }`}
              onClick={() => setSelectedFilterId(filterItem.id)}
              key={filterItem.id}
            >
              <div className="filter-name">
                <img src={filterItem.iconPath} />
                <p>{filterItem.label}</p>
              </div>
              <p>{countByFilterType[filterItem.id]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

FilterPanel.propTypes = {
  selectedFilterId: PropTypes.string.isRequired,
  setSelectedFilterId: PropTypes.func.isRequired,
  todoList: PropTypes.array.isRequired,
};

export default FilterPanel;
