import React from "react";
import { useState, useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import reducer from "../reducers/index";

const App = () => {
  //ここのstateはreducerが勝手に検知して変えてくれる(イベント発火時に)
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = e => {
    //eはイベントオブジェクト的なやつ
    //preventDefault()メソッドで初期で備わってる全体再レンダリングを防止する。(更新して欲しいところだけレンダリングさせたい)
    e.preventDefault();
    dispatch({ type: "CREATE_EVENT", title, body });

    setTitle("");
    setBody("");
  };

  const StyledH4 = styled.h4`
    margin-top: 32px;
  `;

  return (
    <>
      <div className="container">
        <StyledH4>イベント作成フォーム</StyledH4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">Title</label>
            <input
              className="form-control"
              id="formEventTitle"
              value={title}
              onChange={e => setTitle(e.target.value)}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="formEventBody">Body</label>
            <textarea
              className="form-control"
              id="formEventBody"
              value={body}
              onChange={e => setBody(e.target.value)}
            ></textarea>
          </div>

          <button className="btn btn-primary" onClick={addEvent}>
            イベント作成
          </button>
          <button className="btn btn-danger">全てのイベントを削除する</button>
        </form>
        <br />
        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
};

export default App;
