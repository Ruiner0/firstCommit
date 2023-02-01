let itemslist=document.querySelector('#items')

//parentElement
itemslist.parentElement.style.backgroundColor='#f4f4f4';

//lastElementChild
itemslist.lastElementChild.textContent='Hello';

// lastchild
console.log(itemslist.lastChild);

// firstelementchild
itemslist.firstElementChild.style.color="green";

// firstchild
console.log(itemslist.firstChild);

// nextsibling
console.log(itemslist.nextSibling);

// nextelementsibling
console.log(itemslist.nextSibling);

// previoussibling
console.log(itemslist.previousSibling);

// previouselementsibling
console.log(itemslist.previousElementSibling);

// createelement
let newDiv=document.createElement('div')
newDiv.id='newdiv'

// setAttribute
newDiv.setAttribute('title', 'hello')

// createtesxtnode
let newDivText=document.createTextNode("Hello..")

// appendchild
newDiv.appendChild(newDivText)

let container=document.querySelector('header .container')
let h1=document.querySelector('header h1')

container.insertBefore(newDiv, h1)
