import "./CategoryList.css";

const CATEGORY_ITEMS = [
  { id: "personal", label: "Personal" },
  { id: "company", label: "Company" },
  { id: "travel", label: "Travel" },
  { id: "idea", label: "Idea" },
];

const CategoryList = () => {
  return (
    <div>
      <p>Categories</p>
      {CATEGORY_ITEMS.map((category) => {
        return (
          <div key={category.id} className="category-item">
            <p className="category-name">{category.label}</p>
            <p>2</p>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
