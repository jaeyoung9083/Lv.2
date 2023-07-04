import { styled } from "styled-components";

export const TodoBox = styled.div`
  border-bottom: 3px solid #0ba7e4;
  padding: 10px;
  margin: 10px;
`;

export const DoneBtn = styled.button`
  border-radius: 10px;
  border: 1px solid white;
  background: skyblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
export const Delete = styled.button`
  border-radius: 10px;
  border: 1px solid white;
  background: red;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export const TLR = styled.h2`
  display: flex;
  justify-content: center;
`;

export const SubBody = styled.span`
  font-weight: 600;
`;
