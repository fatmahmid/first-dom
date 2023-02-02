let list1=Array.from(document.getElementsByClassName('list1'));
let lists=Array.from(document.getElementsByClassName('lists'));
let mylist=Array.from(document.getElementsByClassName('mylist'));
let mylist2=Array.from(document.getElementsByClassName('mylist2'));
var price=Array.from(document.getElementsByClassName('price'));
//somme Totale
let total= Array.from(document.getElementsByClassName('total'));
function calculateSum(){ var counter=Array.from(document.getElementsByClassName('counter')); 
let somme=0;
 for (i=0; i<mylist.length; i++){ 
    total[i].value=Number(price[i].innerText)* Number(counter[i].innerText)
     somme+=Number(price[i].innerText)* Number(counter[i].innerText) 
     totalfin.value=somme;
     }
     } 
     const addButton = document.querySelector('.add');
     const minusButton = document.querySelector('.minus');
     // Set the initial value of the counter to 0
     let counter = 0;
     // Add an event listener to the "add" buttonaddButton.addEventListener('click', () => {
         // Increment the counter by 1 counter++;
          // Update the counter on the page updateCounter() calculateSum();})  
          // Function to update the counter on the pagefunction updateCounter() {
             // Get a reference to the counter element let counterElement = document.querySelector('.counter'); 
             // Update the text content of the counter element counterElement.textContent = counter; } 
             // Add an event listener to the "minus" buttonminusButton.addEventListener('click', () => {
                 // Decrement the counter by 1 if (counter > 0) { counter--; 
                 // Update the counter on the page updateCounter() calculateSum(); }})
                  //fonction heart
                  const button = document.querySelector('.heart');button.addEventListener('click', function() {
     button.classList.toggle('red');});
//alert en cas de clique sur acheter 
function myfunction(){
     confirm('are your sure to buy?');} 