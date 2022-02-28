// $(".titulo").click(() => {
//     console.log("Click")
// })

// $(".titulo").mouseenter(() => {
//     console.log("Mouse enter")
// })

// $(".titulo").mouseleave(() => {
//     console.log("Mouse leave")
//     $("#sair").show()
// })

// $(".titulo").dblclick(() => {
//     console.log("Double click")
// })

// -------------------------- Animations
// $("#button").click(() => {
//     $("#square").fadeToggle()
// })

// $("#button").click(() => {
//     $("#square").slideToggle()
// })

// $("#button").click(() => {
//     $("#square").animate({width: 1000}, 3000)
// })

// -------------------------- Callbacks
// $("#button").click(() => {
//     $("#square").hide(2000, function callBack() {
//         console.log("Hide")
//         $("#square").show(2000)
//     })
// })

// -------------------------- Selectors
let lista1 = $("#lista1")

lista1.find(".item1").hide()

console.log(lista1.children())