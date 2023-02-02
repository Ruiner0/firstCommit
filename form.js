
document.getElementById('my_form').addEventListener('submit', disp);
function disp(e){
    e.preventDefault();

    let n=e.target.name;
    let email=e.target.email;

    
    localStorage.setItem('username',n.value)
    localStorage.setItem('email',email.value)
}

