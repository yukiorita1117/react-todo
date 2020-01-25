//state:前の状態(未定義の可能性もあるので初期化する)
//サンプルイベント
// event = [
//   { id: 1, title: "タイトル1", body: "内容だよ" },
//   { id: 1, title: "タイトル２", body: "内容だよ!!" }
// ];

const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;

      //stateを展開して、id挿入し、eventも展開して挿入
      return { ...state, id, ...event };
    case "DELETE":
      return state;
    case "DELETE_ALL_EVENT":
      return [];
    default:
      return state;
  }
};

export default events;
