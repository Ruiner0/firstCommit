let form=document.getElementById('addForm');
let itemList=document.getElementById('items');

form.addEventListener('submit',addItems);
itemList.addEventListener('click',removeItem);

function addItems(e){
    e.preventDefault();

    let newItem=document.getElementById('item').value;
    let li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem))

    let delBtn=document.createElement('button');
    delBtn.className='btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'))

    li.appendChild(delBtn)

    itemList.appendChild(li)
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}