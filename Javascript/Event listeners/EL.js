const btn=document.querySelector('.btn');
const heading=document.querySelector("h2");

btn.addEventListener('click',function(){
  console.log("I have been clicked.");
});
btn.addEventListener("mouseover",(event)=>{
  event.target.classList.add("height");
});
btn.addEventListener("mouseout",(event)=>{
  event.target.classList.remove("height");
});