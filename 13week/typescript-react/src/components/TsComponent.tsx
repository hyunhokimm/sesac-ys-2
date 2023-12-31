import { useState } from "react";
import CommentTr from "./CommentTr";

interface ComentRow {
  writer: string;
  title: string;
}

const TsComponent = () => {
  const [inputWriter, setInputWriter] = useState<string>("");
  // 초기값을 넣어줄 경우엔 초기값의 타입으로 알아서 해석함
  const [inputTitle, setInputTitle] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [comment, setComment] = useState<ComentRow[]>([]);
  const [result, setResult] = useState<ComentRow[]>([]);
  const [searchType, setSearchType] = useState("writer");

  return (
    <div>
      <h3>전체 댓글 목록</h3>
      <table border={1} style={{ marginTop: "30px", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>댓글 검색 결과</h3>
      {result.length > 0 ? (
        <div>
          <table border={1} style={{ marginTop: "30px", width: "500px" }}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      ) : (
        <h5>검색 결과가 없습니다.</h5>
      )}
    </div>
  );
};

export default TsComponent;
