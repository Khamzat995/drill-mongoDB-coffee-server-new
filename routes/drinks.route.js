const { Router } = require("express");
const router = Router();
const {
  getDrinks,
  getAvailability,
  getDrinkById,
  postDrink,
  patchDrink,
  deleteDrink,
} = require("../controllers/drink.controllers");

router.get("/drinks", getDrinks);
router.get("/drinks/in-stock", getAvailability);
router.get("/drinks/:id", getDrinkById);
router.post("/drinks", postDrink);
router.patch("/drinks/:id", patchDrink);
router.delete("/drinks/:id", deleteDrink);

module.exports = router;
