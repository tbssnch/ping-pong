function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("YOU GOT THIS DUDE");
    } else if (i % 3 === 0) {
      output.push("AYY, LOOK AT YOU GO");
    } else if (i % 5 === 0) {
      output.push("GULP GULP GULP");
    } else  {
      output.push(i);
    }
  }
  return output;
};

exports.thingy = Calculator;
