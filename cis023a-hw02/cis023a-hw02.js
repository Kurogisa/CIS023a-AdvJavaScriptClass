function input2Array(num) {
  const numArr = String(num)
    .split(",")
    .map((str) => Number(str));
  return numArr;
}
function input2ArrayStr(input) {
  const strArr = input.split("").map((str) => String(str));
  return strArr;
}
function square(num, index, arr) {
  arr[index] = num * num;
}
function positiveCheck(num) {
  return num > 0;
}
function sum(total, num) {
  return total + num;
}
function v_count(letter) {
  //letter.toLowerCase();
  var v_Map = {};
  var vowel_count = 0;
  var a_count = 0;
  var e_count = 0;
  var i_count = 0;
  var o_count = 0;
  var u_count = 0;
  var y_count = 0;
  switch (letter) {
    case a:
      a_count++;
      vowel_count++;
      break;
    case e:
      e_count++;
      vowel_count++;
      break;
    case i:
      i_count++;
      vowel_count++;
      break;
    case o:
      o_count++;
      vowel_count++;
      break;
    case u:
      u_count++;
      vowel_count++;
      break;
    case y:
      y_count++;
      vowel_count++;
      break;
    default:
      break;
  }
  switch (vowel_count > 0) {
    case a_count > 0:
      v_Map[newKey] = a_count;
    case e_count > 0:
      v_Map[newKey] = e_count;
    case i_count > 0:
      v_Map[newKey] = i_count;
    case o_count > 0:
      v_Map[newKey] = o_count;
    case u_count > 0:
      v_Map[newKey] = u_count;
    case y_count > 0:
      v_Map[newKey] = y_count;
  }
  return v_Map;
}
//below is the functions called on by the buttons directly
function sqArr() {
  var userInput = document.getElementById("userInput").value;
  let numArr = input2Array(userInput);
  //will use the forEach() method
  numArr.forEach(square);
  document.getElementById("answer").innerHTML = numArr.join(", ");
}
function posNum() {
  var userInput = document.getElementById("userInput").value;
  let numArr = input2Array(userInput);
  //numArr.filter(positiveCheck);
  document.getElementById("answer").innerHTML = numArr
    .filter(positiveCheck)
    .join(", ");
}
function sumArr() {
  var userInput = document.getElementById("userInput").value;
  let numArr = input2Array(userInput);
  //will use the reduce() method
  var arrSum = numArr.reduce(sum);
  document.getElementById("answer").innerHTML = arrSum;
}
function rmDup() {
  var userInput = document.getElementById("userInput").value;
  let numArr = input2Array(userInput);
  let uniqueArr = [...new Set(numArr)];
  document.getElementById("answer").innerHTML = uniqueArr;
}
function vowelCount() {
  var userInput = document.getElementById("userInput").value;
  let strArr = input2ArrayStr(userInput);
  //strArr.map(v_count); //haven't gotten the map to work
  document.getElementById("answer").innerHTML = strArr;
}
