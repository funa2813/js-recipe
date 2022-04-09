const display = document.getElementById("display")
const plusButton0 = document.getElementById("plus-button0")
const plusButton1 = document.getElementById("plus-button1")
const plusButton2 = document.getElementById("plus-button2")
let count = 0
plusButton0.onclick = function () {
  count += 1
  display.textContent = count
}
plusButton1.onclick = function () {
  count -= 1
  display.textContent = count
}
plusButton2.onclick = function () {
  count *= 2
  display.textContent = count
}
