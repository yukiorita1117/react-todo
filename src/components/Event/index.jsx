import React from "react";

//注意！！ eventはオブジェクトなので{event}で渡さないとダメ
const Event = ({ event, dispatch }) => {
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `本当にイベント(id:${id})を削除してもよろしいでしょうか？`
    );
    if (result) dispatch({ type: "DELETE_EVENT", id });
  };
  console.log(event);
  return (
    <tr>
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
};

export default Event;
