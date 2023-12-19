import React from "react";

interface ComentRow {
  idx: number;
  writer: string;
  title: string;
}

interface Props {
  comment: ComentRow;
}

const CommentTr = ({ comment }: Props) => {
  return (
    <div>
      <tr key={comment.idx + 1}>
        <td>{comment.idx + 1}</td>
        <td>{comment.title}</td>
        <td>{comment.writer}</td>
      </tr>
      ;
    </div>
  );
};

export default CommentTr;
