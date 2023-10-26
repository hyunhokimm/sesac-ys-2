const { commentInfos } = require("../models/comment");

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  const commentData = commentInfos();
  res.render("comments", {
    commentData,
  });
};
