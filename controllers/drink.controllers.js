const Drink = require("../models/Drink.model");

module.exports.drinksController = {
  getDrinks: async (req, res) => {
    try {
      const data = await Drink.find({}, { name: true, price: true });
      res.json(data);
    }
    catch (e) {
      res.json({
        error: `Ошибка при получении всех напитков`,
      });
    }
  },

  getAvailability: async (req, res) => {
    try {
      const data = await Drink.find({ availability: true });
      res.json(data);
    }
    catch (e) {
      res.json({
        error: `Ошибка при получении напитков в наличии`,
      });
    }
  },

  getDrinkById: async (req, res) => {
    try {
      const data = await Drink.findById(req.params.id);
      res.json(data);
    }
    catch (e) {
      res.json({
        error: `Ошибка при поиске напитка с ID: ${req.params.id}`,
      });
    }
  },

  postDrink: async (req, res) => {
    try {
      const post = await new Drink({
        name: req.body.name,
        price: req.body.price,
        availability: req.body.availability,
        caffeine: req.body.caffeine,
        volume: req.body.volume,
        description: req.body.description,
      });
      await post.save();
      res.json("Напиток добавлен");
    }
    catch (e) {
      res.json({
        error: "Ошибка при добавлении нового напитка",
      });
    }
  },

  patchDrink: async (req, res) => {
    try {
      const patch = await Drink.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );
      await patch.save();
      res.json("Напиток изменён"); // сообщение сервера
    }
    catch (e) {
      res.json({
        error: `Ошибка при редактировании напитка с ID: ${req.params.id}`,
      });
    }
  },

  deleteDrink: async (req, res) => {
    try {
      const data = await Drink.findById(req.params.id);
      data.delete();
      res.json("Напиток удален");
    }
    catch (e) {
      res.json({
        error: "Ошибка при удалении напитка",
      });
    }
  },
};


