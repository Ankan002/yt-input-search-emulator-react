import React, {useState} from "react";
import mockData from "../data/MOCK_DATA.json";
import "./Engine.css";

const Engine = () => {

    const [searchTerm, setSearchTerm] = useState('')

    console.log(mockData)

  return (
    <div className="engine-div">
      <div className="mb-2" style={{ width: "40%", marginTop: 20 }}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter the term"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
      {
          mockData.filter((item) => {
              if(searchTerm === '' || searchTerm === null){
                  return item
              }
              else{
                  return item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
              }
          }).map((item) => (
              <p key={item.id}>{item.first_name}{" "}{item.last_name}</p>
          ))
      }
    </div>
  );
};

export default Engine;
