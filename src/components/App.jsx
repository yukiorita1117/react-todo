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

  const StyledButton = styled.button`
    margin-right: 4px;
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

          <StyledButton className="btn btn-primary" onClick={addEvent}>
            イベント作成
          </StyledButton>
          <StyledButton className="btn btn-danger">
            全てのイベントを削除する
          </StyledButton>
        </form>
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
            {state.map((event, index) => {
              const id = event.id;
              const handleClickDeleteButton = () => {
                dispatch({ type: "DELETE_EVENT", id });
              };
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{event.title}</td>
                  <td>{event.body}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleClickDeleteButton}
                    >
                      削除
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
