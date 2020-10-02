import React, { Component } from "react";
import "./Filter.scss";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count + "\t"}Products</div>
        <div className="filter-order">
          Order
          <select value={this.props.sort} onChange={this.props.sortProduct}>
            <option>Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter
          <select value={this.props.size} onChange={this.props.filterProduct}>
            <option value="">ALL</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}
