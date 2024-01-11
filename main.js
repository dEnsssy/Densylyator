// const btnPlus = document.getElementById("plus");
// const btnMinus = document.getElementById("minus");
// const btnMultiply = document.getElementById("multiply");
// const btnDivide = document.getElementById("divide");
const actionBtns = document.querySelectorAll(".content__btn");
const resultBtn = document.getElementById("calculate");
const result = document.getElementById("result");
let action = "";

function calculateNumbers(action) {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    switch (action) {
        case "+":
            colorResult(result, Number(input1.value) + Number(input2.value));
            return `${Number(input1.value)} ${action} ${Number(
                input2.value
            )} = ${Number(input1.value) + Number(input2.value)}`;
        case "-":
            colorResult(result, Number(input1.value) - Number(input2.value));
            return `${Number(input1.value)} ${action} ${Number(
                input2.value
            )} = ${Number(input1.value) - Number(input2.value)}`;
        case "*":
            colorResult(result, Number(input1.value) * Number(input2.value));
            return `${Number(input1.value)} ${action} ${Number(
                input2.value
            )} = ${Number(input1.value) * Number(input2.value)}`;
        case "/":
            colorResult(result, Number(input1.value) / Number(input2.value));
            return `${Number(input1.value)} ${action} ${Number(
                input2.value
            )} = ${Number(input1.value) / Number(input2.value)}`;
        default:
            return "Сперва выберите знак!";
    }
}

function colorResult(result, res) {
    if (res >= 0) {
        result.style.color = "green";
    } else {
        result.style.color = "red";
    }
}

actionBtns.forEach((element) => {
    element.addEventListener("click", () => {
        action = element.textContent.trim();
    });
});

resultBtn.onclick = function () {
    result.textContent = calculateNumbers(action);
};
