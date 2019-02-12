document.addEventListener("DOMContentLoaded", function (event) {

    let fromRight = document.getElementById("fromRight")
    let textbox = document.getElementById("textbox")
    let circle = document.getElementById("circle")
    let image= document.getElementById("image")
    let header= document.getElementById("header")
    let text= document.getElementById("text")
    let about= document.getElementById("about")
    let button = document.getElementById("button")

    TweenLite.to(text, 3, {text: "Hi,<br>I'm Damon,<br>designer and developer.", ease:Linear.easeNone})
    TweenMax.to(fromRight, 2, {scaleX: 1, delay: 4,  ease: Elastic.easeOut.config(1, 0.7)})
    TweenMax.to(textbox, 2, {fontSize: "24px", marginLeft: "100px", delay: 4, ease: Elastic.easeOut.config(1, 0.7)})
    TweenMax.to(circle, 2, {marginRight: "250px", delay: 4, ease: Elastic.easeOut.config(1, 0.7)})
    TweenMax.to(image, 3, {opacity:.8, scaleX:1,delay: 3, ease: Bounce.easeOut})
    TweenMax.to(header, 3, {scale: 1, delay: 6, ease: Elastic.easeOut.config(1, 0.7)})
    TweenMax.to(about, 3, {opacity:1, y:20, delay: 6.3})



})