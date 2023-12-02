import React, { useState } from "react";

const Practice = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");

  const [userInfo, setUserInfo] = useState([
    { id: 1, name: "코디", email: "codi@gmail.com" },
    { id: 2, name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);

  const [searchInfo, setSearchInfo] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "search") {
      setSearch(value);
    }
  };

  const onDouble = (id) => {
    const updatedUserInfo = userInfo.filter((user) => user.id !== id);
    setUserInfo(updatedUserInfo);
  };

  const onClick = () => {
    // 배열을 직접 수정하는 것이 아니라 새로운 배열을 생성하여 업데이트
    setUserInfo([...userInfo, { id: userInfo.length + 1, name, email }]);
    setName(""); // 등록 후에 입력값 초기화
    setEmail(""); // 등록 후에 입력값 초기화
  };

  const onSearch = () => {
    const sear = userInfo.filter((searchIn) => searchIn.email.includes(search));
    setSearchInfo(sear);
  };

  const onAll = () => {
    setSearchInfo(userInfo);
  };

  return (
    <div>
      <div style={{ margin: "1rem 0" }}>
        <input
          name="name"
          value={name}
          onChange={onChange}
          placeholder="이름"
        />
        <input
          name="email"
          value={email}
          onChange={onChange}
          placeholder="이메일"
        />
        <button onClick={onClick}>등록</button>
      </div>
      <br />

      <div style={{ marginBottom: "1rem" }}>
        <input onChange={(e) => onChange(e)} name="search" type="text" />
        <button onClick={onSearch}>검색</button>
        <button onClick={onAll}>전체</button>
      </div>

      <table
        style={{
          border: "1px solid",
          textAlign: "center",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ border: "1px solid" }}>
            <th style={{ border: "1px solid", padding: "8px" }}>번호</th>
            <th style={{ border: "1px solid", padding: "8px" }}>제목</th>
            <th style={{ border: "1px solid", padding: "8px" }}>작성자</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((user) => (
            <tr
              style={{ border: "1px solid" }}
              onDoubleClick={() => onDouble(user.id)}
              key={user.id}
            >
              <td style={{ border: "1px solid", padding: "8px" }}>{user.id}</td>
              <td style={{ border: "1px solid", padding: "8px" }}>
                {user.name}
              </td>
              <td style={{ border: "1px solid", padding: "8px" }}>
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <table
        style={{
          border: "1px solid",
          textAlign: "center",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ border: "1px solid" }}>
            <th style={{ border: "1px solid", padding: "8px" }}>번호</th>
            <th style={{ border: "1px solid", padding: "8px" }}>제목</th>
            <th style={{ border: "1px solid", padding: "8px" }}>작성자</th>
          </tr>
        </thead>
        <tbody>
          {searchInfo.map((user) => (
            <tr
              style={{ border: "1px solid" }}
              onDoubleClick={() => onDouble(user.id)}
              key={user.id}
            >
              <td style={{ border: "1px solid", padding: "8px" }}>{user.id}</td>
              <td style={{ border: "1px solid", padding: "8px" }}>
                {user.name}
              </td>
              <td style={{ border: "1px solid", padding: "8px" }}>
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Practice;
