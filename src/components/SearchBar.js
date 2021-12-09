import { Container, Form } from "react-bootstrap";

const SearchBar = (props) => {
  const handleTextChange = (e) => {
    props.onFilterTextChange(e.target.value);
  };

  const handleInStockOnlyChange = (e) => {
    props.onInStockOnlyChange(e.target.checked);
  };
  return (
    <div>
      <Container className="mt-4 mb-4 bg-secondary text-white">
        <Form>
          <Form.Group
            controlId="formName"
            className="border border-secondary rounded-top rounded-bottom  px-3 py-3"
          >
            <Form.Label>Search Text</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={props.filterText}
              placeholder="Enter name"
              onChange={(e) => handleTextChange(e)}
            />
            <Form.Check
              type="checkbox"
              label="Only show products In stock"
              className="mt-2"
              checked={props.inStockOnly}
              onChange={(e) => handleInStockOnlyChange(e)}
            />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default SearchBar;
