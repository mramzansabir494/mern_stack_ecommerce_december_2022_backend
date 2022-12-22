import express from "express";
import { create, findAll, findOne, remove, update } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter
    .route("/")
    .post(create)
    .get(findAll);
//   .post(authenticate, authorize("author"), create);

productRouter
  .route("/:id")
  .get(findOne)
  .put(update)
  .delete(remove);
//   .put(authenticate, authorize("author"), update)
//   .delete(authenticate, authorize("admin","author"), remove);

export { productRouter };
