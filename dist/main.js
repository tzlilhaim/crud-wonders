const source = $("#wonders-template").html()
const template = Handlebars.compile(source)

const render = function (wonders) {
  $("#wonders").empty()
  let newHtml = template({ wonders })
  $("#wonders").append(newHtml)
}

const fetch = function () {
  $.get("/wonders", function (response) {
    render(response)
  })
}

const addWonder = function () {
  let newWonder = $("#new-wonder-input").val()
  let newLocation = $("#new-location-input").val()
  let data = { name: newWonder, location: newLocation }
  $.post("/wonder", data, function (response) {
    console.log("POST complete")
    render(response)
  })
}

$("#wonders").on("click", ".visit", function () {
  let wonder = $(this).closest(".wonder").find(".name").text().split("-")
  wonder = wonder[0].trim()
  $.ajax({
    url: '/wonder',
    type: 'PUT',
    data: {wonder:wonder},
    success: function(response) {
        render(response)
    }
  })
})

$("#wonders").on("click", ".delete", function () {
    let wonder = $(this).closest(".wonder").find(".name").text().split("-")
    wonder = wonder[0].trim()
    $.ajax({
      url: '/wonder',
      type: 'DELETE',
      data: {wonder:wonder},
      success: function(response) {
          render(response)
      }
    })
  })

fetch() //load the data on page load
