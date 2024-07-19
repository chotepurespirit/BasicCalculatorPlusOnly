function sumNumber() {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    const result = document.getElementById("result")
    result.innerHTML = num1 + num2
}