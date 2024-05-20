
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let countEl2 = document.getElementById("count-el2")
console.log(countEl)

let count = 0 

function increment(){
    count +=1
   countEl.textContent = count 
 }

 function restar(){
  if (count > 0 ){
    count -=  1
    countEl.textContent = count
 }


 }

 let count2=0
 function increment2(){

  count2 +=1
 countEl2.textContent = count2 
}

function restar2(){
  if (count2 > 0 ){
    count2 -=  1
    countEl2.textContent = count2
 }
   }


