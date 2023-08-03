const Producer = require("../producer");
const producer=new Producer();

exports.sendMessage = async (req, res) => {

  try {
    producer.createRabbitChannel();
    producer.publishMessage(req.body);
    res.send("message send!!")
  } catch (error) {
    res.send(error)
    console.log(error.message);
  }
};

exports.getMessage = async (req, res) => {
  try {
    const data = await producer.consumeMessage();
    console.log(data)
    res.send(data)
   
  } catch (error) {
    res.send(error)
    console.log(error.message);
  }
};
