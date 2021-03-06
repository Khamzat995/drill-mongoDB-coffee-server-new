const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
const boxen = require("boxen");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/drinks.route"));

const start = () => {
  try {
    mongoose.connect(
      "mongodb+srv://khamzat:12345@cluster0.aa1ma.mongodb.net/CoffeeDrill",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log(
      boxen(chalk.bold.magentaBright("MongoDB подключен"), {
        borderColor: "yellowBright",
        borderStyle: "round",
      })
    );
  } catch (e) {
    console.log(e.message);
  }
};
start();

app.listen(3020, () => {
  console.log(
    boxen(chalk.bold.greenBright("Сервер подключен"), {
      borderColor: "yellowBright",
      borderStyle: "round",
    })
  );
});
