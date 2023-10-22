// 液晶部分に表示する数値を入れる変数を定義しておく（初期値は０）
let inputValue = "";
let target = 0;
let method = "";

function getCalc(value) {
  const display = document.getElementById("display");

  //get_calc関数の以下の部分について、早期リターンを実装してください。
  if (value === "." && inputValue.includes(".")) {
    return;
  }
  inputValue = inputValue + value;
  display.value = inputValue;
}

function clickClear() {
  const display = document.getElementById("display");

  display.value = "";
  inputValue = "";
  target = 0;
  method = "";
}

function clickPlus() {
  method = "plus";
  if (inputValue === "") {
    return;
  }

  target = parseFloat(inputValue);
  inputValue = "";
}

function clickMinus() {
  method = "minus";
  if (inputValue === "") {
    return;
  }

  target = parseFloat(inputValue);
  inputValue = "";
}

function clickAst() {
  method = "ast";
  if (inputValue === "") {
    return;
  }

  target = parseFloat(inputValue);
  inputValue = "";
}

function clickSlash() {
  method = "sla";
  if (inputValue === "") {
    return;
  }
  target = parseFloat(inputValue);
  inputValue = "";
}

function clickEqual() {
  if (
    inputValue === "." ||
    target === "" ||
    inputValue === "" ||
    isNaN(target)
  ) {
    return;
  }

  switch (method) {
    case "plus":
      display.value = target + parseFloat(inputValue);
      break;

    case "minus":
      display.value = target - parseFloat(inputValue);
      break;

    case "ast":
      display.value = target * parseFloat(inputValue);
      break;

    case "sla":
      display.value = target / parseFloat(inputValue);
      break;
  }
  target = parseFloat(display.value);

  //inputvalue=""; を追加
  inputValue = "";

  // console.log({ "display.value": display.value });
  console.log({ target });
  // console.log({ inputValue });
}
