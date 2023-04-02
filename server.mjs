import { createServer } from "http";
import env from "dotenv";
import { Sequelize } from "sequelize";

env.config();

const db = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: process.env.MYSQLHOST,
    dialect: "mysql",
  }
);

try {
  await db.authenticate();
  console.log("Database connected");
  // await User.sync();
} catch (err) {
  console.error(err);
}

createServer((req, res) => {
  res.write("Hello World!");
  res.end();
}).listen(process.env.PORT);
