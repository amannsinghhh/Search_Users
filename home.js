var form_action = document.getElementById("myform")
form_action.addEventListener("submit", function (e) {
    e.preventDefault()
    var search = document.getElementById("search").value
    var search_name = search.split(" ").join("")

    document.getElementById("result").innerHTML = ""

    fetch("https://api.github.com/users/" + search_name)
        .then((result) => result.json())
        .then((data) => {
            console.log(data)
            document.getElementById("result").innerHTML = `<a target="_blank" href="https://www.github.com/${search_name}"><img src="${data.avatar_url}"/></a>`
        })

})