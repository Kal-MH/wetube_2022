import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();
const loggerMiddleware = morgan("dev");

//setting
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

//middlewares
app.use(loggerMiddleware);

//routes
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

//app listening
app.listen(PORT, () => {
    console.log(`Server is listening : ${PORT}`);
})