document.querySelector('[id= "24501511"]')
document.querySelector('[id= "24501511"]').innerText
document.querySelector('[id= "24501511"] .storylink').innerText
//extract all data
document.querySelectorAll('.storylink, .subtext a+ a')
[...document.querySelectorAll('.storylink, .subtext a+ a')].map(e => e.innerText)
//fined the blank comment row
document.querySelector('.athing').nextElementSibling
//fined the main element
document.querySelector('.athing')
//fiend the title
document.querySelector('.athing').querySelector('.title')
document.querySelector('.athing').querySelector('.storylink').innerText
document.querySelector('.athing').nextElementSibling.querySelector('.subtext a+ a').innerText
document.querySelector('.athing').remove()