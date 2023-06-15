/** @format */

import React from "react";
import { arrayData } from "./data";

export const StockPhone = () => {
  console.log(arrayData, "check-data");


  return (
    
      <div style= {{marginTop:"50px"}}>
        {arrayData.map((data, key ) => {
          console.log(data, "check-data1");

          return (
            <div key={key} 
            style= {{display:"flex", justifyContent:"space-between", alignItem:"center", marginLeft:"200px" }}>
            <div>
             <strong> {data.id} . </strong>
            </div>
            <div>
                {data.phone}
            </div>
            <div >
        <img src={data.image}  style= {{height: "50px", width: "50px", marginRight:"200px"}}/>
      </div>
      </div>
          );
        })}
      
      
      
    </div>
  );
};
