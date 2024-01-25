import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../Card/Card";
import Filters from "../Filters";
import "./Content.css";
import Loader from "../Common/Loader";


const Content = ({ data, nextCall,hasMore,product_for }) => {
  const [loading,setLoading] = useState(true);
  const [content, setContent] = useState(data);
  const [fliter, setFilter] = useState({
    gender: "M",
    color: false,
    category: false,
  });

  useEffect(() => {
    let filteredData = data;
    setContent(filteredData);
    setLoading(false);
    console.log("Hello");
  }, [fliter]);

    
  return (
    <div>
      {loading ? <Loader/> :
    <div className="content">
    
      <div className="mainDisplay">
        <div className="sideBar">
          <Filters setFilter={setFilter} fliter={fliter} />
        </div>
        <InfiniteScroll loader={<Loader/>}
          dataLength={data.length}
          className="product-tile-holder"
          next={nextCall}
          hasMore={hasMore}
        >
          {data.map((ele, i) => (
            <Card key={i} {...ele} index={i} product_for={product_for} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
}
    </div>
  );
};

export default Content;
