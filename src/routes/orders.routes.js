const express = require("express");
const {
  placeOrder,
  getMyOrders,
  getMyTransactions,
  getOrderById,
  getOrderTracking,
  submitPaymentReference,
} = require("../controllers/orders.controller");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

// Allow order tracking lookup by order ID or Order Number (public)
router.get("/:id/tracking", getOrderTracking);

// Authenticated routes
router.use(requireAuth);

router.post("/", placeOrder);
router.get("/my-orders", getMyOrders);
router.get("/my-transactions", getMyTransactions);
router.get("/:id", getOrderById);

// Submit Bank RRN / Payment Reference after payment
router.put("/:id/payment-reference", submitPaymentReference);

module.exports = router;


