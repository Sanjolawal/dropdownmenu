 button = document.querySelector(".button")
console.log(button)
let span = document.querySelector('span')
console.log(span)
text = '-'
click = 0

function showorhide(){
    span.style.display = 'block'
    button.textContent  = text
    click += 1
if (click > 1) {
    span.style.display = 'none'
    click = 0
    button.textContent  = '+'
}

}

button.addEventListener('click', showorhide)

button1 = document.querySelector(".button1")
console.log(button1)
let span1 = document.querySelector('.span1')
console.log(span1)

function showmenu2() {
    span1.style.display = 'block'
    button1.textContent  = text
    click += 1
    if (click > 1) {
        span1.style.display = 'none'
        click = 0
        button1.textContent  = '+'
    }
}
button1.addEventListener('click', showmenu2)

button2 = document.querySelector(".button2")
console.log(button2)
let span2 = document.querySelector('.span2')
console.log(span2)

function showmenu3() {
    span2.style.display = 'block'
    button2.textContent  = text
    click += 1
    if (click > 1) {
        span2.style.display = 'none'
        click = 0
        button2.textContent  = '+'
    }
}
button2.addEventListener('click', showmenu3)




