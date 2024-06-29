const express = require("express");
const {
  addAllProducts,
  getAllProducts,
  createProduct,
  getProduct,
  searchProduct,
} = require("../controllers/products.controller");
const ProductsRouter = express.Router();
ProductsRouter.post("/addall", addAllProducts);
ProductsRouter.post("/", createProduct);
ProductsRouter.get("/:id", getProduct);
ProductsRouter.get("/", getAllProducts);
ProductsRouter.get("/search/:key", searchProduct);

module.exports = ProductsRouter;
