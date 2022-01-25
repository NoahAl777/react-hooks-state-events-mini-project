import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryButtons = categories.map((category, index) => {
    const className = category === selectedCategory ? "selected" : null;
    return (<button
      key={index}
      className={className}
      onClick={() => onSelectCategory(category)}
    >
      {category}
    </button>)
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
