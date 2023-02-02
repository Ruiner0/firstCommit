let ulist=document.getElementById('ul')
let li=document.createElement('li')
li.className='ul-item'

document.getElementById('my_form').addEventListener('submit', disp);

function disp(e){
    e.preventDefault();

    let n=e.target.name.value;
    let email=e.target.email.value;

    const obj={
        n, email
    }
    
    localStorage.setItem(obj.email,JSON.stringify(obj))
    showUserOnScreen(obj)

}

function showUserOnScreen(obj){
    let parentEl=document.getElementById('ul')
    let childEl=document.createElement('li')
    let btn=document.createElement('input')
    btn.type='button'
    btn.value='Delete'
    btn.onclick=()=>{
        localStorage.removeItem(obj.email)
        parentEl.removeChild(childEl)
    }
    
    
    
    childEl.textContent=obj.n+' | '+obj.email
    parentEl.appendChild(parentEl.appendChild(childEl))

    childEl.appendChild(btn)
    
}
