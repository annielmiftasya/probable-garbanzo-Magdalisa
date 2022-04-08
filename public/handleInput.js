

const  tinput1=()=>{
   let inputValue = document.getElementById('input1').value
   return inputValue
}
const tinput2 =()=>{
   let inputValue = document.getElementById('input2').value
   return inputValue
}
const tinput3 =()=>{
   let inputValue = document.getElementById('input3').value
   return inputValue
}
const tinput4 =()=>{
   let inputValue = document.getElementById('input4').value
   return inputValue
}
var cobaForm = document.getElementById('form1')

cobaForm.addEventListener('submit', (e) => {
   e.preventDefault()
 
   console.log(tinput1())
   console.log(tinput2())
   console.log(tinput3())
   console.log(tinput4())
   

   filterCar(tinput1(),tinput2(),tinput3(),tinput4());
   
}
)



