const Drink = require("../models/Drink.model");

const getDrinks = async (req, res) => {
  const data = await Drink.find();
  res.json(data);
};

const getAvailability = async (req, res) => {
  const data = await Drink.find({ availability: true });
  res.json(data);
};

const getDrinkById = async (req, res) => {
  const data = await Drink.findById(req.params.id);
  res.json(data);
};

const postDrink = async (req, res) => {
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
  } catch (e) {
    console.log(e);
  }
};

const patchDrink = async (req, res) => {
  try {
    const patch = await Drink.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    await patch.save();
    res.json("Напиток изменён"); // сообщение сервера
  } catch (e) {
    console.log(e.message);
  }
};

const deleteDrink = async (req, res) => {
  try {
    const data = await Drink.findById(req.params.id);
    data.delete();
    res.json("Напиток удален");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  getDrinks,
  getAvailability,
  getDrinkById,
  postDrink,
  patchDrink,
  deleteDrink,
};
