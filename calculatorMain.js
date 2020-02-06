$(document).ready(function() {
  var window = 0
  var number1 = 0
  $("#inputs").val(window)
  $("button").on("click", function(e) {
    e.preventDefault()
    $("button").removeClass("active")
    $(this).addClass("active")
    if ($(this).text() === "C") {
      display = ""
    }
    $("#inputs").val((window += $(this).val()))
    if ($(this).attr("class") == "operators") {
      Number(display) = Number(number1)
      display = ""
    }
  })
})
// sheduled 1:1 with Ryan to discuss
// why "button" isn't working, and the rest
