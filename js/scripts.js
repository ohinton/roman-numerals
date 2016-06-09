var letters = ["I", "V", "X", "L", "C", "D", "M"];
var values =  [1,    5,   10, 50,  100, 500, 1000];

var subtractNotation = function(num) {
  var n = "";
  for(var i=0; i<=6; i++) {
    if(values[i]>=num) {
      n = n + letters[i];
      for(var s=i-1; ;s--) {
        if(letters[s]==="I" || letters[s]==="X" || letters[s]==="C") {
          n = letters[s] + n;
          break;
        }
      }
      break;
    }
  }
  return n;
}

var convert = function(input) {
  var output = "";
  while (input > 0) {
    for(var i=6; i>=0; i--) {
      if(values[i]<=input) {
        output = output + letters[i];
        input -= values[i];
        if(output.slice(output.length-4,output.length)===letters[i]+letters[i]+letters[i]+letters[i]) {
          var sumOfLastFive = 0;
          for(var j=0; j<5; j++) {
            sumOfLastFive += values[letters.indexOf(output[output.length-1])];
            output = output.slice(0,output.length-1);
          }
          output = output + subtractNotation(sumOfLastFive);
        }
        break;
      }
    }
  }
  return output;
}

$(document).ready(function() {

  $("#roman-numeral").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number").val());
    var output = convert(input);
    $("p").text(output);
  });
});
