const { Router } = require("express");
const { drinksController } = require ('../controllers/drink.controllers')

const router = Router();

router.get("/drinks", drinksController.getDrinks);
router.get("/drinks/in-stock", drinksController.getAvailability);
router.get("/drinks/:id", drinksController.getDrinkById);
router.post("/drinks", drinksController.postDrink);
router.patch("/drinks/:id", drinksController.patchDrink);
router.delete("/drinks/:id", drinksController.deleteDrink);

module.exports = router;
