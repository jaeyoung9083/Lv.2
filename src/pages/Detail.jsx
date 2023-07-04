import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TodoBox } from "./Detail.styled";
import { useDispatch } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  console.log("id", id);

  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos);
  console.log("todos", todos);

  const todo = todos.filter((todo) => todo.id === id)[0];
  console.log("todo", todo);

  const [comment, setComment] = useState([]);

  const dispatch = useDispatch();

  return (
    <div>
      <TodoBox>
        id : {todo.id}
        <br />
        제목 : {todo.title}
        <br />
        내용 : {todo.body}
        <br />
        완료 여부 : {todo.isDone.toString()}
        <br />
        <button onClick={() => navigate("/")}>이전 페이지</button>
      </TodoBox>
      <div>
        <h2>댓글</h2>
        <br />
        <input
          name="내용"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            dispatch({
              type: "ADD_COMMENT",
              payload: comment,
            });
            setComment("");
          }}
        >
          댓글 등록
        </button>
      </div>
    </div>
  );
};

export default Detail;
