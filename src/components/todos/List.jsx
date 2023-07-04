import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TodoBox } from "./List.styled";
import { DoneBtn, Delete } from "./List.styled";
import { TLR } from "./List.styled";
import { SubBody } from "./List.styled";

const List = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <TLR>Todo List Remake</TLR>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <TodoBox key={todo.id}>
                <Link to={`/${todo.id}`}>상세페이지</Link>
                <br />
                <SubBody>id : </SubBody>
                {todo.id}
                <br />
                <SubBody>제목 : </SubBody>
                {todo.title}
                <br />
                <SubBody>내용 : </SubBody>
                {todo.body}
                <br />
                <SubBody>완료 여부 :</SubBody>
                {todo.isDone.toString()}
                <br />
                {/* isDone은 toString으로 감싸줘야 boolean 타입으로 나온다. */}
                <DoneBtn
                  onClick={() => {
                    dispatch({
                      type: "SWITCH_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  완료
                </DoneBtn>
                <Delete
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  삭제
                </Delete>
              </TodoBox>
            );
            // map은 항상 key를 가져야 한다!
          })}
      </div>
      <div>
        <TLR>Todo List Remake</TLR>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <TodoBox key={todo.id}>
                <Link to={`/${todo.id}`}>상세페이지</Link>
                <br />
                <SubBody>id : </SubBody>
                {todo.id}
                <br />
                <SubBody>제목 : </SubBody>
                {todo.title}
                <br />
                <SubBody>내용 : </SubBody>
                {todo.body}
                <br />
                <SubBody>완료 여부 :</SubBody>
                {todo.isDone.toString()}
                <br />
                {/* isDone은 toString으로 감싸줘야 boolean 타입으로 나온다. */}
                <DoneBtn
                  onClick={() => {
                    dispatch({
                      type: "SWITCH_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  취소
                </DoneBtn>
                <Delete
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  삭제
                </Delete>
              </TodoBox>
            );
            // map은 항상 key를 가져야 한다!
          })}
      </div>
    </div>
  );
};

export default List;
