module.exports = function* rate(){
  let rating = yield ["collect/number", {
    message: "How would you rate this, from 1 to 10?",
    min: 1,
    max: 10,
    initial: 5
  }]
  let reason = yield ["collect/input", {
    message: `Why did you rate this a ${rating}?`
  }]
  return { rating, reason };
}