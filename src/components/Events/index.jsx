import React from "react";
import Event from "../Event";
import styled from "styled-components";

const EventsWrapper = styled.div`
  margin-top: 24px;
`;

const Events = ({ state, dispatch }) => {
  return (
    <>
      <EventsWrapper>
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
      </EventsWrapper>
    </>
  );
};

export default Events;
