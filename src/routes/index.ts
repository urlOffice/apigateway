import express, { Request, Response } from "express";
import axios from 'axios';
//local
const registry: { [key: string]: any } = require("./registry.json");
const routes = express.Router();


// this is probably where you can put in entry to service registry. 
routes.all("/:apiName", (req: Request, res: Response) => {
  if (registry.services[req.params.apiName]) {
    const url = registry.services[req.params.apiName].url
    console.log("i am the url", url)
    axios.get(url).then(
      (response) => {
        res.status(200).send(response.data)
      }
    )
  } else {
    res.send("API Name does not exist");
  }
});

export default routes

//need an endpoint
// need a database
// need a service 

// amqp, it's still just a queue, needs something to turn it into messages and create an endpoint. 

// do not connect your rabbitmq directly from apiGateway

// right a lamda authorization service that can be found in the apigateway
// it can be held inside the apigateway. the abstraction layer is all done here.

// all client messages needs to communicate w/ the apigateway. The apigateway messages all services

// all ms that need to communicated w/ each other, is done through msbus. 

//grpc protocal
//http protocal
//amqp protocal 

//take data and send it back

//event sourcing pattern 
//topic based exchange
// event stream

//microservice patterns, domain driven design, event sourcing, 

// orchastration services -= just get data from services