import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // Error handling:
    // throw new Error("Some error here");
    res.json(products);
  })
);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const pokemon = await Product.findById(req.params.id);
    if (pokemon) {
      res.json(pokemon);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
