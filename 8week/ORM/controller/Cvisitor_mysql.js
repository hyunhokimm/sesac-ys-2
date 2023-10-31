import {
  getVisitors,
  insertVisitor,
  delVisitor,
  getVisitorById,
  patchVisitor,
} from "../models/Visitor_mysql.mjs";

export const home = (req, res) => {
  res.render("index");
};

export const visitor = (req, res) => {
  //   const data = Visitor.getVisitors();
  //   res.render("visitor", { data: data });
  getVisitors((rows) => {
    res.render("visitor", { data: rows });
  });
};

// POST /visitor => 방명록 insert
export const postVisitor = (req, res) => {
  // insert할 데이터
  console.log("req.body", req.body);
  insertVisitor(req.body, (id) => {
    console.log("ctrl postVisitor ", id);
    res.send({
      ...req.body,
      id,
    });
  });
};

// DELETE /visitor/:id => 방명록 삭제
export const deleteVisit = (req, res) => {
  console.log(req.params);
  delVisitor(req.params.id, (result) => {
    res.send({ result: result });
  });
};

// GET /visitor/:id => 방명록 하나 조회
export const getVisitor = (req, res) => {
  getVisitorById(req.params.id, (result) => {
    console.log("ctrl getVisitorById: ", result);
    res.send(result);
  });
};

// PATCH /visitor/:id => 방명록 수정
export const patchVisit = (req, res) => {
  console.log(req.body);

  patchVisitor(req.body, (result) => {
    console.log("ctrl getVisitorById: patchVisitor", result);
    res.send({ result: true });
  });
};
