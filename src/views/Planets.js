import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const Planets = (props) => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [value, setValue] = useState("");
  const [number, setNumber] = useState("");
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${props.id}`)
      .then((res) => {
        console.log(res);
        setPlanets(res.data);
        console.log(planets);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let destination = "";
    setValue("");
    setNumber("");
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
    setValue("");
    let dropDownMenu = e.target.value;
    setValue(dropDownMenu);
    console.log("this is value" + value);
  };

  const handleChangeNum = (e) => {
    e.preventDefault();
    setNumber("");
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
            <option selected value="people">
              People
            </option>
            <option value="planets">Planet</option>
          </select>
          <label>ID: </label>
          <input
            onChange={handleChangeNum}
            className="form-control"
            type="number"
            name="number"
            value="2"
          />
          <button className="btn btn-primary">Search</button>
        </form>
        <div>
          <h1>{planets.name}</h1>
          <h2>Climate: {planets.climate}</h2>
          <h2>Terrain: {planets.terrain}</h2>
          <h2>Surface Water: {planets.surface_water}</h2>
          <h2>Population: {planets.population}</h2>
        </div>
      </div>
    </div>
  );
};

export default Planets;
