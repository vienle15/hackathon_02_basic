function checkPalindrome() {
  const string = prompt("nhập vào 1 chuỗi ");
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      alert("không phải chuỗi đối xứng");
      return;
    }
  }

  alert("Chuỗi đối xứng");
}

function changeLowerUpper(input) {
  const string = prompt("nhập chuỗi");
  console.log(string);
  let newString = "";
  for (let c in input) {
    if (c === c.toUpperCase()) {
      newString += c.toLowerCase();
    } else newString += c.toUpperCase();
  }
  return newString;
}

function findMax() {
  const string = prompt("nhập vào 5 số nguyên, cách nhau bới phím space");
  console.log(string);
  const convertArray = string.split(" ", 5);
  console.log(">>>>>", convertArray);

  //   if (Number.isInteger(convertArray) === false) {
  //     alert("phải nhập vào số nguyên");
  //     return string;
  //   }

  max = Number(convertArray[0]);
  for (let i = 0; i < Number(convertArray.length); i++) {
    if (max < Number(convertArray[i])) {
      max = Number(convertArray[i]);
    }
  }
  console.log("Số lớn nhất là :" + " " + max);
}

function sorting() {
  let arr = prompt([]);
  arr.sort();
  console.log(arr);
}
