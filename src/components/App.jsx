import React from "react";
import { useState, useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import reducer from "../reducers/index";
import Event from "../components/Event";
import EventForm from "../components/EventForm";

const App = () => {
  //ここのstateはreducerが勝手に検知して変えてくれる(イベント発火時に)
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <div className="container">
        <br />
        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {state.map((event, index) => (
              <Event key={index} event={event} dispatch={dispatch} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
