import {DataTypes, Sequelize} from "sequelize";
import express from "express";

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/postgres')

const User = sequelize.define ("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  underscored: true
});




const users = await User.findAll();
console.log(users)
const app = express()
const port = 3000

app.get('/users', (req, res) => {
  res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})