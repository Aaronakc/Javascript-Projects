const pushBtn=document.querySelector('#btn');
const spanElement=document.querySelector('#counter');
let count=0;


function increaseCount(){
  count++;
  spanElement.innerText=count;
  spanElement.style.display='block';
}

pushBtn.addEventListener('click',increaseCount)