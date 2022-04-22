const { configureStore } = require("@reduxjs/toolkit");
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
