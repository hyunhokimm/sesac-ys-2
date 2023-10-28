import express from "express";
import {
  visitor,
  home,
  postVisitor,
  delConVisitor,
} from "../controller/Cvisitor.mjs";
const router = express.Router();

router.get("/", home);

router.get("/visitor", visitor);
router.post("/visitor", postVisitor);
router.delete("/visitor/:id", delConVisitor);

export default router;
