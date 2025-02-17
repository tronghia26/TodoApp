import PropTypes from "prop-types";
import "./FilterList.css";

const FilterList = ({
  FILTER_ITEMS,
  selectedFilterId,
  setSelectedFilterId,
  countByFilterType,
}) => {
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
  selectedFilterId: PropTypes.string.isRequired,
  setSelectedFilterId: PropTypes.func.isRequired,
  countByFilterType: PropTypes.func.isRequired,
};

export default FilterList;
