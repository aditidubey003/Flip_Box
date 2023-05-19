/*let box = document.querySelector('.box')

box.addEventListener("click", function (){
        let allBoxes = document.querySelectorAll('.box')
        allBoxes.forEach((box) => {
         box.innerText = getNumber()
        })
})


function getNumber(){
  let number = Math.floor(Math.random()* 12)
  console.log(number);
  return number;
}
*/



let allBoxes = document.querySelectorAll('.box')

allBoxes.forEach((box) => {
  box.addEventListener("click", function (event){
   event.target.innerText = Math.floor(Math.random()* 12);

 setTimeout(()=> {
       event.target.innerText = "";     
 }, 3000)
        })
})