import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./user";

const reducer = combineReducers({
  user: userReducer,
});

//ストア生成
const store = configureStore({ reducer });

export default store;
