//state:前の状態(未定義の可能性もあるので初期化する)
//サンプルイベント
// event = [
//   { id: 1, title: "タイトル1", body: "内容だよ" },
//   { id: 1, title: "タイトル２", body: "内容だよ!!" }
// ];

const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      return state;
    case "DELETE":
      return state;
    case "DELETE_ALL_EVENT":
      return [];
    default:
      return state;
  }
};

export default events;
