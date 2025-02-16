import React, { useEffect, useState } from "react";
import "../../styles/ProductFilter.css";
import { items } from "../../frontendeval/ProductFilter/Items";
import { act } from "react-dom/test-utils";

const ProductFilter = () => {
  const filters = ["Bags", "Watches", "Sports", "Sunglasses"];
  const [filteredData, setFilteredData] = useState(items);
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterClick = (e) => {
    const category = e.target.id;
    console.log(category);
    if (activeFilters.includes(category)) {
      const filters = activeFilters.filter((el) => el !== category);
      setActiveFilters(filters);
    } else {
      setActiveFilters([...activeFilters, category]);
    }
  };
  //console.log("activeFilter ", activeFilteres);

  const filterProducts = () => {
    if (activeFilters.length) {
      const tempItems = items.filter((item) =>
        activeFilters.includes(item.category)
      );
      setFilteredData(tempItems);
    } else {
      setFilteredData(items);
    }
  };

  useEffect(() => {
    filterProducts();
  }, [activeFilters]);

  console.log("filteredData ", filteredData);

  return (
    <div className="app">
      <div className="filters" onClick={handleFilterClick}>
        {filters.map((item, index) => (
          <button
            key={index}
            id={item}
            className={activeFilters.includes(item) ? "selected" : ""}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="product-list">
        {filteredData.map((item, idx) => (
          <div className="item" key={idx}>
            {item.name}
            <p className="category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
