import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
import cors from "cors"
const PORT = process.env.PORT
import bodyparser from "body-parser"
import MathRoutes from "./routers/MathControllerRouter.js"

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors());
app.use("/api",MathRoutes)

app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    res.render('error');
  });

app.listen(PORT, ()=>console.log(`running on port ${PORT}`))