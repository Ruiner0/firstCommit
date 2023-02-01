let form=document.getElementById('addForm');
let itemList=document.getElementById('items');
let filter=document.getElementById('filter');

form.addEventListener('submit',addItems);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);

function addItems(e){
    e.preventDefault();

    let newItem=document.getElementById('item').value;
    let newItem1=document.getElementById('item1').value;
    let li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem))
    li.appendChild(document.createTextNode(" "+newItem1))

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

function filterItems(e){
    let text=e.target.value.toLowerCase();
    let items=itemList.getElementsByTagName('li');
    

    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })
}

