let header = document.getElementById("main-header");
let items = document.getElementsByTagName("li");

header.style.borderBottom = "solid 3px #000";

items[2].style.backgroundColor='green';

for(let i=0; i<items.length; i++){
    items[i].style.fontWeight='bold';
}
