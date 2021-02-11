const amqp = require('amqplib/callback_api');

const rabbitConnect = (queueName: string, message: string) => {
  // create connection 
  amqp.connect('amqp://localhost', (err: any, connection: any) => {
    if (err) {
      throw err;
    }
    // create a channel
    connection.createChannel((channelErr: any, channel: any) => {
      if (channelErr) {
        throw channelErr;
      }
      // assert Queue 
      channel.assertQueue(queueName, {
        durable: false
      })
      // send message to queue 
      channel.sendToQueue(queueName, Buffer.from(message));

      console.log(`${message} is sent to ${queueName}`)
    })
  })
}

module.exports = {
  rabbitConnect
}