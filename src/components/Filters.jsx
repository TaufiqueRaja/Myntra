import React,{useContext} from "react";
import { dataContext } from "./App";

const Filters = () => {
  const {filter,setFilter} = useContext(dataContext)
  
  function filterColor(e) {
    setFilter({...filter,color:e.target.value})
  }
  

  return (
    <div className="filter-holder">
      <div>
        <h3>COLOR</h3>
        <div className="filter_group">
          <input
            type="radio"
            name="color"
            id="color-all"
            value=""
            onChange={filterColor}
          />
          <label htmlFor="color-all">All</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            name="color"
            id="white"
            value="white"
            onChange={filterColor}
          />
          <label htmlFor="white">White</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            id="black"
            name="color"
            value="black"
            onChange={filterColor}
          />
          <label htmlFor="black">Black</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            id="blue"
            name="color"
            value="blue"
            onChange={filterColor}
          />
          <label htmlFor="blue">Blue</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            id="green"
            name="color"
            value="green"
            onChange={filterColor}
          />
          <label htmlFor="green">Green</label>
        </div>
        <div className="filter_group">
          <input
            type="radio"
            id="yellow"
            name="color"
            value="yellow"
            onChange={filterColor}
          />
          <label htmlFor="yellow">Yellow</label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
