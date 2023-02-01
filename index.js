const btn=document.querySelector(".btn")
const n=document.querySelector("#name")
const em=document.querySelector("#email")

my_form.addEventListener('submit', onSubmit)

// btn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     console.log('click')
// })

btn.addEventListener('mouseover', (e)=>{
    e.preventDefault();
    console.log('mouseover')
})

btn.addEventListener('mouseout', (e)=>{
    e.preventDefault();
    console.log('mouseout')
})

function onSubmit(e){
    e.preventDefault();

    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`${n.value}:${em.value}`))
    console.log(li)

    n.value=''
    em.value=''
}