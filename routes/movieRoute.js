import express from "express"
import { create, deleteMovie, getAll, getOne, update } from "../controller/movieController.js";

const route = express.Router();

route.post("/create",create);
route.get("/getAll",getAll);
route.get("/getOne/:id",getOne);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteMovie);

export default route;