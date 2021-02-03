import express, { Request, Response } from "express";
import axios from 'axios';
const registry: { [key: string]: any } = require("./registry.json");

const routes = express.Router();
// this is probably where you can put in entry to service registry. 
routes.all("/:apiName/:path", (req: Request, res: Response) => {
  const route = registry.services[req.params.apiName].url + req.params.path
  console.log("im running", route)
  axios.get(route).then(response => {
    res.send(response.data);
  })
});

export default routes