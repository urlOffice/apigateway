import express, { Request, Response } from "express";
import axios from 'axios';
const { rabbitConnect } = require('./../rabbitmq');
//local
const registry: { [key: string]: any } = require("./registry.json");
const routes = express.Router();


// this is probably where you can put in entry to service registry. 
routes.all("/:apiName", (req: Request, res: Response) => {
  const queueName = registry.services[req.params.apiName].name
  console.log("im running", queueName)
  const message = 'im a message from routes apigateway';
  rabbitConnect(queueName, message)

  // axios.get(route).then(response => {
  //   res.send(response.data);
  // })
});

export default routes