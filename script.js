$(".titulo").click(() => {
    console.log("Click")
})

$(".titulo").mouseenter(() => {
    console.log("Mouse enter")
})

$(".titulo").mouseleave(() => {
    console.log("Mouse leave")
    $("#sair").show()
})

$(".titulo").dblclick(() => {
    console.log("Double click")
})