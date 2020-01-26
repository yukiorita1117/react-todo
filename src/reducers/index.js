//Root Reducer
import { combineReducers } from "redux";
import events from "./events";

//eventsとしてcombineReducerで定義したので、eventsはオブジェクトになっている
export default combineReducers({ events });
