import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import { Table } from "react-bootstrap";

const ProductTable = (props) => {
  let lastCategory = null;
  const rows = [];
  props.products.map((product) => {
    if (JSON.stringify(product).indexOf(props.filterText) === -1) {
      return 0;
    }
    if (props.inStockOnly && !product.stocked) {
      return 0;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name}></ProductRow>);
    lastCategory = product.category;
  });
  return (
    <Table bordered hover className="text-center">
      <thead>
        <tr className="table-primary">
          <th>Name</th>
          <th>Price</th>
          <th>In Stock</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default ProductTable;
