let str = "";
let val = 0;

function one() {
  let p = document.getElementById("display");
  str += "1";
  p.innerHTML = str;
}

function two() {
  let p = document.getElementById("display");
  str += "2";
  p.innerHTML = str;
}

function three() {
  let p = document.getElementById("display");
  str += "3";
  p.innerHTML = str;
}

function four() {
  let p = document.getElementById("display");
  str += "4";
  p.innerHTML = str;
}

function five() {
  let p = document.getElementById("display");
  str += "5";
  p.innerHTML = str;
}

function six() {
  let p = document.getElementById("display");
  str += "6";
  p.innerHTML = str;
}

function seven() {
  let p = document.getElementById("display");
  str += "7";
  p.innerHTML = str;
}

function eight() {
  let p = document.getElementById("display");
  str += "8";
  p.innerHTML = str;
}

function nine() {
  let p = document.getElementById("display");
  str += "9";
  p.innerHTML = str;
}

function zero() {
  let p = document.getElementById("display");
  str += "0";
  p.innerHTML = str;
}


function subtraction() {
  let p = document.getElementById("display");
  str += "-";
  p.innerHTML = str;
}

function multiplication() {
  let p = document.getElementById("display");
  str += "*";
  p.innerHTML = str;
}

function division() {
  let p = document.getElementById("display");
  str += "/";
  p.innerHTML = str;
}

function addition() {
  let p = document.getElementById("display");
  str += "+";
  p.innerHTML = str;
}

function decimal() {
  let p = document.getElementById("display");
  str += ".";
  p.innerHTML = str;
}

//function AC() {
  //let p = document.getElementById("display");
  //p.innerHTML = "0";
//}

function equal() {
  let p = document.getElementById("display");
  p.innerHTML = str;
  var result = eval(str);
  p.innerHTML = result;
  if (result > 999999999) {
    var exponent = result.toExponential();
    document.getElementById("display");
    p.innerHTML = exponent;
  }
  }

//  function negation() {
  //  let p = document.getElementById("display");
    //val = 0 - val;
  //}

  //function percentage() {
    //let p = document.getElementById("display");
    //val = val / 100;
  //}

//function decimal() {
  //if (x > 999) {
    //let p = document.getElementById("display").value = y.toLocalString();
  //}
//}

//  if (number >)
//}
