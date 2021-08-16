import FilterableProducts from "./Components/FilterableProducts";
import products from "./products.json";

import "./App.css";

function App() {
  return (
    <div>
      <FilterableProducts product={products} />
    </div>
  );
}

export default App;
