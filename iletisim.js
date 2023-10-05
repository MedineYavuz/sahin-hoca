const iletisim=document.querySelector("#iletisim");

const toDoInput=document.querySelector("#name");

toDoInput.addEventListener("keyup",run);

function run (e){
    iletisim.textContent=e.target.value;
}


