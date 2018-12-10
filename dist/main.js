const source = $("#wonders-template").html()
const template = Handlebars.compile(source)

const wonders = [
    { name: "Mount Everest", location: "Nepal", visited: false, visitedClass: "not-visited" },
    { name: "Grand Canyon", location: "Arizona", visited: true, visitedClass: "visited"}
]

const render = function(){
    let newHtml = template({wonders})
    $("#wonders").append(newHtml)
}

render()