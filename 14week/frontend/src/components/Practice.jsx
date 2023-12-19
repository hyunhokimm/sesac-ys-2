import React, { useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000");

const Practice = () => {
  const initSocketConnect = () => {
    if (!socket.connect) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();
  });

  const hello = () => {
    socket.emit("hello", { mes: "hello" });
  };
  const study = () => {
    socket.emit("study", { mes: "study" });
  };
  const bye = () => {
    socket.emit("bye", { mes: "bye" });
  };

  return (
    <div>
      <h3>socket</h3>
      <button onClick={hello}>hello</button>
      <button onClick={study}>study</button>
      <button onClick={bye}>bye</button>
    </div>
  );
};

export default Practice;
