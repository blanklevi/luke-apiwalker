import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const Homepage = (props) => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [value, setValue] = useState("");
  const [number, setNumber] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("https://swapi.dev/api/people/") //fix this to show all of the data
  //     .then((res) => {
  //       console.log(res.data.results);
  //       setPeople(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let destination = "";
    if (value == "people") {
      destination = "people";
    }
    if (value == "planets") {
      destination = "planets";
    }
    // if value == people
    navigate(`/${value}/${number}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    let dropDownMenu = e.target.value;
    setValue(dropDownMenu);
    console.log("this is value" + value);
  };

  const handleChangeNum = (e) => {
    e.preventDefault();
    let numberz = e.target.value;
    setNumber(numberz);
    console.log("this is number" + number);
  };

  return (
    <div>
      <div className="container">
        <form className="form-group" onSubmit={handleSubmit}>
          <label>Search For: </label>
          <select
            name="dropDown"
            className="form-control"
            onChange={handleChange}
          >
            <option value="people">People</option>
            <option value="planets">Planet</option>
          </select>
          <label>ID: </label>
          <input
            onChange={handleChangeNum}
            className="form-control"
            type="number"
            name="number"
          />
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
