// let secondEl = document.querySelector('.list-group-item:nth-child(2)');
// let thirdEl = document.querySelector('.list-group-item:nth-child(3)');

// secondEl.style.backgroundColor='green';
// thirdEl.style.display='none';

// let items = document.querySelectorAll('.list-group-item');
// items[1].style.backgroundColor='green';

let odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
for (let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='MediumSeaGreen';
}
