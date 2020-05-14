import React, { useState, useEffect } from "react";
import { Link, Navigate, navigate } from "@reach/router";
import axios from "axios";

const People = (props) => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [value, setValue] = useState("");
  const [number, setNumber] = useState("");
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${props.id}`)
      .then((res) => {
        console.log(res);
        setPeople(res.data);
        console.log(people);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

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
        <div>
          <h1>{people.name}</h1>
          <h2>Height: {people.height}</h2>
          <h2>Hair Color: {people.hair_color}</h2>
          <h2>Eye Color: {people.eye_color}</h2>
          <h2>Skin Color: {people.skin_color}</h2>
        </div>
      </div>
    </div>
  );
};

export default People;
