const ProductCategoryRow = (props) => {
  return (
    <tr className="table-danger font-weight-bold text-uppercase">
      <td colspan="3">{props.category}</td>
    </tr>
  );
};

export default ProductCategoryRow;
