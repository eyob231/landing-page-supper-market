import express from 'express';
import asyncHandler from 'express-async-handler';
import { readFile } from 'fs/promises';
import path from 'path';

const router = express.Router();

// Helper function to load products from JSON
const loadProducts = async () => {
  const productsPath = path.join(process.cwd(), 'products.json');
  const productsData = await readFile(productsPath, 'utf8');
  return JSON.parse(productsData);
};

// @desc    Fetch all products with search, pagination, filtering and sorting
// @route   GET /api/products
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 10;
  const page = Number(req.query.pageNumber) || 1;
  
  // Load products from JSON
  let products = await loadProducts();

  // Search keyword
  if (req.query.keyword) {
    const keywordRegex = new RegExp(req.query.keyword, 'i');
    products = products.filter(product => 
      keywordRegex.test(product.name) || 
      (product.description && keywordRegex.test(product.description))
    );
  }

  // Filter by category if provided
  if (req.query.category) {
    products = products.filter(product => 
      product.category === req.query.category
    );
  }

  // Price range filter
  if (req.query.minPrice) {
    products = products.filter(product => 
      product.price >= Number(req.query.minPrice)
    );
  }
  if (req.query.maxPrice) {
    products = products.filter(product => 
      product.price <= Number(req.query.maxPrice)
    );
  }

  // Rating filter
  if (req.query.minRating) {
    products = products.filter(product => 
      product.rating >= Number(req.query.minRating)
    );
  }

  // Sorting
  if (req.query.sort) {
    const sortFields = req.query.sort.split(',');
    products.sort((a, b) => {
      for (const field of sortFields) {
        const [key, order] = field.split(':');
        if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
  } else {
    // Default sort by newest (assuming you have a createdAt field)
    products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  // Pagination
  const count = products.length;
  const paginatedProducts = products.slice(
    pageSize * (page - 1),
    pageSize * page
  );

  res.json({
    products: paginatedProducts,
    page,
    pages: Math.ceil(count / pageSize),
    count,
    pageSize
  });
}));

export default router;