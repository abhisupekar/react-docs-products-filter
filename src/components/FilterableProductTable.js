import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = () => {
  const PRODUCTS = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
    {
      category: "Cloths",
      price: "$199.99",
      stocked: true,
      name: "Tshirt",
    },
  ];
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const onFilterTextChange = (filterText) => {
    setFilterText(filterText);
  };

  const onInStockOnlyChange = (inStockOnly) => {
    setInStockOnly(inStockOnly);
  };
  return (
    <div
      style={{
        border: "3px solid black",
        margin: "auto",
        width: "50%",
        padding: "10px",
      }}
    >
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={onFilterTextChange}
        onInStockOnlyChange={onInStockOnlyChange}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={PRODUCTS}
      />
    </div>
  );
};

export default FilterableProductTable;
