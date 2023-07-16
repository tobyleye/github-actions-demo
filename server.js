import express from "express";

export const sum = (x, y) => {
  return x + y;
};

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log("server is up like my * in the morning"));

app.get("/", (res, req) => {
  res.json({
    msg: "Hello world",
  });
});
