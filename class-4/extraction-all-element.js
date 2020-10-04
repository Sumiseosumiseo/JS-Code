function getData(){
  
  const data = []

for(let element of [...document.querySelectorAll('.athing')]){
  const title = element.querySelectorAll('.storylink').innerText
  const commentElement = element.nextElementSibling.querySelector('.subtext a+ a')
  const comment = commentElement ? commentElement.innerText: ""
  
  data.push({title, comment})
  element.nextElementSibling.remove()
  element.remove()
  
}

console.table(data);
}
getData();
