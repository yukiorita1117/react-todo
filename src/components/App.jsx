import React from "react";
import { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers/index";
import AppContext from "../contexts/AppContext";
import Events from "../components/Events";
import EventForm from "../components/EventForm";

const App = () => {
  //ここのstateはreducerが勝手に検知して変えてくれる(イベント発火時に)
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
