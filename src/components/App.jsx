import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <div className="container">
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">Title</label>
            <input className="form-control" id="formEventTitle"></input>
          </div>

          <div className="form-group">
            <label htmlFor="formEventBody">Body</label>
            <input className="form-control" id="formEventBody"></input>
          </div>

          <button className="btn btn-primary">イベント作成</button>
          <button className="btn btn-danger">全てのイベントを削除する</button>
        </form>
      </div>
    </>
  );
};

export default App;
