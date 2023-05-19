


// First Box Without Event Delegation

let bigBox1 = document.querySelectorAll('.box-1 div')

bigBox1.forEach((box, index) => {
  box.addEventListener("click", function (event){
   event.target.innerText = index + 1;

 setTimeout(()=> {
  event.target.innerText = "";     
 }, 3000)
  })
})

// Second Box With Event Delegation


let bigBox2 = document.querySelector('.box-2')

bigBox2.addEventListener("click", function (event){
  let text = event.target.dataset.text 
console.log(text)
event.target.innerText = text;

setTimeout(()=> {
  event.target.innerText = "";     
 }, 3000)

})


