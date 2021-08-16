import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import products from "../products.json";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
  render() {
    const rows = [];
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    let lastCategory = null;
    const product = products;

    product.forEach((products) => {
      if (products.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !products.stocked) {
        return;
      }

      if (products.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={products.category}
            key={products.category}
          />
        );
      }
      rows.push(<ProductRow product={products} key={products.name} />);

      lastCategory = products.category;
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
