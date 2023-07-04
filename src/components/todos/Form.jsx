import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

const Form = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(event) => {
        if (!title || !body) {
          alert("제목과 내용을 입력해주세요");
          return false;
        }

        event.preventDefault();
        dispatch({
          type: "ADD_TODO",
          payload: {
            id: shortid.generate(),
            title: title,
            body,
            isDone: false,
            // 생략 가능 title: title, -> title,
          },
        });
        setTitle("");
        setBody("");
        // onSubmit이 dispatch가 끝나고 나면은
        // setTitle,setBody로 빈값으로 다시 만들어주기
      }}
    >
      <div>
        <label>제목</label>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
          name="title"
        />
        <label>내용</label>
        <input
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
          type="text"
          name="body"
        />
      </div>
      <button>추가하기</button>
    </form>
  );
};

export default Form;
