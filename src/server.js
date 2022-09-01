import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const loggerMiddleware = morgan("dev");

//middlewares
app.use(loggerMiddleware);

//routes
app.get("/", (req, res) => {
    return res.send("<h1>Home</h1>");
})

//app listening
app.listen(PORT, () => {
    console.log(`Server is listening : ${PORT}`);
})