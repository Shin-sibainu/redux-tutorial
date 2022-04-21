import { createSlice } from "@reduxjs/toolkit";

//状態の初期状態
const initialState = {
  name: "",
};

//Sliceの作成
const slice = createSlice({
  name: "user", //Sliceの名称
  initialState,
  reducers: {
    // ここに定義したキーがAction Creator関数の名前となる
    // つまり、Action Creatorは自動生成される
    setName: (state, action) => {
      // 第一引数は現在（更新前）のState
      // 第二引数は渡されたaction
      // action.payloadプロパティに、Action Creatorに渡された引数が入っている
      // この関数は新しい状態を返却する
      return Object.assign({}, state, { name: action.payload });
    },
    clearName: (state) => {
      return Object.assign({}, state, { name: "" });
    },
  },
});

export default slice.reducer;

export const { setName, clearName } = slice.actions;
