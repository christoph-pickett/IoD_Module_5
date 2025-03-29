const addNumbers = (req, res) => {
  if (!req.query?.num1 || !req.query?.num2) {
    res.status(422);
    res.send({ result: "not valid values" });
  }
  const number1 = parseInt(req.query?.num1) || 0;
  const number2 = parseInt(req.query?.num2) || 0;

  const result = number1 + number2;

  res.status(200);
  res.send({ result });
};

const multiplyNumbers = (req, res) => {
  const number1 = parseInt(req.query?.num1) || 0;
  const number2 = parseInt(req.query?.num2) || 0;

  const result = number1 * number2;

  res.status(200);
  res.send({ result });
};

module.exports = {
  addNumbers,
  multiplyNumbers,
};
