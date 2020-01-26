import React, { useContext } from "react";
import { DELETE_EVENT, ADD_OPERATION_LOG } from "../../actions";
import AppContext from "../../contexts/AppContext";
import { timeCurrentIso8601 } from "../../utils";

//注意！！ eventはオブジェクトなので{event}で渡さないとダメ
const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `本当にイベント(id:${id})を削除してもよろしいでしょうか？`
    );
    if (result) {
      dispatch({ type: DELETE_EVENT, id });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id=${id})を削除しました！`,
        operatedAt: timeCurrentIso8601()
      });
    }
  };
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
