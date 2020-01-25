import React, { useState, useReducer } from "react";
import styled from "styled-components";
import reducer from "../../reducers/index";

const StyledH4 = styled.h4`
  margin-top: 32px;
`;

const StyledButton = styled.button`
  margin-right: 4px;
`;

const EventForm = () => {
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

  const deleteAllEvents = e => {
    e.preventDefault();
    const result = window.confirm(
      "本当に全てのイベントを削除してもいいですか？"
    );
    if (result) dispatch({ type: "DELETE_ALL_EVENT", title, body });
  };

  //disabledはtrueの時に非活性化する
  const unCreatable = title === "" || body === "";
  return (
    <>
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

        <StyledButton
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベント作成
        </StyledButton>
        <StyledButton
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.length === 0}
        >
          全てのイベントを削除する
        </StyledButton>
      </form>
    </>
  );
};

export default EventForm;
