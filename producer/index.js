const amqp = require("amqplib");
require("dotenv").config();

class Producer {
  Channel;
  
  // Create rabbit channel
  async createRabbitChannel() {
    try {
      const connection = await amqp.connect(process.env.RABBIT_MQ_URL);
      console.log("connected with rabbitMq");
      this.channel = await connection.createChannel();
    }
    catch (error) {
      console.log(error.message);
    }
  }

    // Publish a message
  async publishMessage(data) {
    if (!this.channel) {
      await this.createRabbitChannel();
    }
    try {
      await this.channel.assertQueue(process.env.QUEUE_NAME);
      const isSend = await this.channel.sendToQueue(
        process.env.QUEUE_NAME,
        Buffer.from(JSON.stringify(data))
      );
      if(isSend)
      {
        console.log("Data Send!!")
      }
      await this.channel.close();
    } catch (error) {
      console.log(error.message);
    }
  }

   // Consume a message
  async consumeMessage() {
    if (!this.channel) {
      await this.createRabbitChannel();
    }
    try {
      await this.channel.consume(process.env.QUEUE_NAME, (data) => {
          this.channel.ack(data);
          console.log(`${Buffer.from(data.content.toString())}`);
        });
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = Producer;
