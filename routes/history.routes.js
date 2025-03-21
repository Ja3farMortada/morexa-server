const express = require("express");
const router = express.Router();

const HistoryController = require("../controllers/HistoryController");

router.post("/sales/details", HistoryController.fetchOrderItemsById);

router.post("/sales/search", HistoryController.fetchSalesHistory);
router.post("/payment/search", HistoryController.fetchPaymentHistory);
router.post(
    "/money-transfer/search",
    HistoryController.fetchUserMoneyTransferHistory
);
router.post("/return/search", HistoryController.fetchReturnHistory);

router.post("/purchase/search", HistoryController.fetchPurchaseHistory);
router.post("/purchases/details", HistoryController.fetchPurchaseItemsById);
router.post("/receipt/search", HistoryController.fetchReceiptHistory);

module.exports = router;
