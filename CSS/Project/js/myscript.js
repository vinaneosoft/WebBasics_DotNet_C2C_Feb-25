const anodes=document.getElementsByTagName('a'); // collection

function addActive(){
for(let anode of anodes){
    anode.classList.remove('activeLink');
}
event.target.classList.add('activeLink');
} 