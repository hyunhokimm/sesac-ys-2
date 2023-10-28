import { delModelVisitor, getModel, postModel } from "../model/Visitor.mjs";

export const visitor = (req, res) => {
  getModel((rows) => {
    res.render("visitor", { data: rows });
  });
};

export const postVisitor = (req, res) => {
  postModel(req.body, (rows) => {
    rows;
    console.log(rows);
    res.send({
      ...req.body,
      rows,
    });
  });
};

export const delConVisitor = (req, res) => {
  console.log(req.params);
  delModelVisitor(req, (cb) => {
    res.send("삭제가 완료되었습니다.");
  });
};

export const home = (req, res) => {
  res.render("index");
};
