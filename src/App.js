import React from "react";
import "./App.scss";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      sort: "",
      size: "",
    };
  }

  filterProduct = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      this.setState({ size: e.target.value, products: data.products });
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(e.target.value) > 0
        ),
      });
    }
  };

  sortProduct = (e) => {
    const sort = e.target.value;
    console.log(e.target.value);
    this.setState({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? b.price > a.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    });
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React shopping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                sort={this.state.sort}
                size={this.state.size}
                filterProduct={this.filterProduct}
                sortProduct={this.sortProduct}
              />
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">sidebar</div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
    );
  }
}

export default App;
