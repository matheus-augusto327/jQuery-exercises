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
// let lista1 = $("#lista1")

// lista1.find(".item1").hide()

// console.log(lista1.children())

// -------------------------- Chaining
// let jq = $("#lista1").slideUp(2000).slideDown(2000).fadeOut(1000)
// console.log(jq)

// -------------------------- Read Elements
// console.log($("#lista1").html())
// console.log($("#lista1").text())

// console.log($("#novo").val())
// console.log($("#novo").attr("name"))

// -------------------------- Modify Elements
// $("#lista1").html("<li>Novo Item</li> <li>Novo item</li>")
// $("li").attr("name", (i, oValue) => {
//     return oValue + i
// })

// -------------------------- Removing Elements
// $("#lista2").empty()
// $("li").remove("#1, #2")

// -------------------------- Inserting Elements
// $("#lista2").prepend("<li>Prepend</li>")
// $("#lista2").append("<li>Append</li>")

// $("#lista2").before("<li>Before</li>")
// $("#lista2").after("<li>After</li>")

// -------------------------- Modifying CSS
// $("h1").toggleClass("bg-blue")
// $("h1").css({
//     "background": "red",
//     "font-size": "36px"
// })

// -------------------------- Dimensions
// let box = $(".box")

// box.innerWidth(700)

// box.append(
//     "largura: ", box.width(), "<br>",
//     "largura + padding: ", box.innerWidth(), "<br>",
//     "largura + padding + borda: ", box.outerWidth(), "<br>",
//     "largura + padding + borda + margem: ", box.outerWidth(true), "<br>",
// )

// -------------------------- Siblings
let selected = $("#div1").siblings()
let selected = $("#div1").nextAll()
let selected = $("#div1").next()
let selected = $("#div1").nextUntil("#div3")
let selected = $("#div1").prev()
let selected = $("#div1").prevAll()
console.log(selected)
