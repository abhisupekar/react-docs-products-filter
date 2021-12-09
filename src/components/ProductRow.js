const ProductRow = (props) => {
  let inStock;
  if (props.product.stocked) {
    inStock = "In Stock";
  } else {
    inStock = "Out of Stock";
  }
  return (
    <tr className="table-warning">
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
      <td>{inStock}</td>
    </tr>
  );
};

export default ProductRow;
