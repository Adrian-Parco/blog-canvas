import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "i3V0ZtI9qyfUWEag",
  database: "blog",
});
