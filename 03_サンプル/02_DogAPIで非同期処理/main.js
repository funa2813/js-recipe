const imageElement = document.getElementById("dog-image")
const button = document.getElementById("button")

// 指定したサーバーにデータを取りに行く
button.onclick = function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      imageElement.src = data.message
    })
}
