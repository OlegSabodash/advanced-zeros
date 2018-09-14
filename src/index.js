module.exports = function getsumerosCount(number, base) {
  var baseOne = base
  var y = 0;
  var numberOne = number;
  var sum = 0;
  var arr = [];
  var n;
  for (let i = 2; i <= base; i++) {
      n = 1;
      if (baseOne % i == 0) {
          y = 0;
          while (baseOne % i == 0) {
              y++;
              baseOne = Math.floor(baseOne / i);
          }
          sum = 0;
          
          while (Math.pow(i, n) < number) {
              sum += Math.floor(numberOne / Math.pow(i, n));
              n++;
          }
          arr.push(sum / y);
      }
      arr.sort(function (a, b) {return a - b})
  }
  return Math.floor(arr[0]);

}