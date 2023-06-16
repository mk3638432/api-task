/** @format */
import React, { useState, useEffect } from "react";
import axios from "axios";
// import axios from "./axios"
import "./AxioApi.css";

const API = "https://jsonplaceholder.typicode.com";

const AxioApi = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // useEffect(() => {
  // using promise

  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) =>
  //      setMyData(res.data))
  //   console.log("useeffect-res", res.data)
  //      .catch((error) =>
  // setIsError(error.message)
  //   console.log("useeffect-error", error)
  // );

  // }, []);

  // Using Async Await

  const getApiData = async (url) => {
    try {
      // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      const res = await axios.get(url);

      //   const res = await axios.get("/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  //   calling the function
  useEffect(() => {
    getApiData(`${API}/posts`);
    // getApiData()
  }, []);

  return (
    <>
      <div
        style={{ textAlign: "center", marginTop: "20px", fontWeight: "800" }}>
        AxioApi
      </div>
      {/* loop store in data */}
      {isError !== "" && <h2> {isError} </h2>}

      <div className='grid'>
        {myData.slice(0, 12).map((post) => {
          const { id, title, body } = post;
          return (
            <div className='card' key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AxioApi;
