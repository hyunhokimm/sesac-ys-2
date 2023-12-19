import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: skyblue;
  width: 500px;
  height: 500px;
`;
const Mychat = styled.div`
  background-color: yellow;
  text-align: left;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 20px;
`;

const Yourchat = styled.div`
  text-align: right;
  background-color: yellow;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 20px;
`;

const Input = styled.div`
  width: 100%;
`;

const Button = styled.button``;

const Chatting = () => {
  return (
    <div>
      <h3>chatting</h3>
      <Box>
        <div>
          <Mychat>안녕</Mychat>
        </div>
        <div>
          <Yourchat>안녕</Yourchat>
        </div>
        <Input>
          <input type="text" />
          <Button>입력</Button>
        </Input>
      </Box>
    </div>
  );
};

export default Chatting;
