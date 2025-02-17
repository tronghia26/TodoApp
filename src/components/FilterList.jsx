import PropTypes from "prop-types";
import "./FilterList.css";
import { FILTER_ITEMS } from "../constant";
import { useAppContext } from "../context/AppProvider";

const FilterList = ({ countByFilterType }) => {
  const { selectedFilterId, setSelectedFilterId } = useAppContext();
  return (
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
  );
};

FilterList.propTypes = {
  FILTER_ITEMS: PropTypes.object.isRequired,
  countByFilterType: PropTypes.func.isRequired,
};

export default FilterList;
