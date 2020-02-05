$(document).ready(function() {
  $("#add").on("click", function(e) {
    e.preventDefault()
    var add = Number($("#numOne").val()) + Number($("#numTwo").val())
    $("#answer").val(add)
  })
  $("#subtract").on("click", function(e) {
    e.preventDefault()
    var subtract = Number($("#numOne").val()) - Number($("#numTwo").val())
    $("#answer").val(subtract)
  })
  $("#multiply").on("click", function(e) {
    e.preventDefault()
    var multiply = Number($("#numOne").val()) * Number($("#numTwo").val())
    $("#answer").val(multiply)
  })
  $("#divide").on("click", function(e) {
    e.preventDefault()
    var divide = Number($("#numOne").val()) / Number($("#numTwo").val())
    $("#answer").val(divide)
  })
})
