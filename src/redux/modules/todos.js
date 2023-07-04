import shortid from "shortid";
import React from "react";
import { useDispatch } from "react-redux";

const initialState = [
  {
    id: shortid.generate(),
    title: "리액트1",
    body: "리액트 복습하기",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "리액트2",
    body: "3시 까진 완성해보자",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "리액트3",
    body: "이해 완료",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "리액트4",
    body: "완성 여부",
    isDone: true,
  },
];

// reducer
// action 안에는 -> type, payload
// type이라는 처리를 payload 만큼 해줘
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    default:
      return state;

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

      // default:
      return state;
  }
};

export default todos;
