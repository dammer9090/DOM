// let para1 = document.querySelector('.para1');

// let para2 = document.querySelector('#para2');

// console.log(para1.textContent)
// console.log(para2.textContent)

// let para3 = document.querySelectorAll('.para3');

// for(let i = 0; i < para3.length; i++)
// {
//     console.log(para3[i].textContent)
// }

// console.log(para3[3].textContent)



// let para1 = document.querySelector('.para1');

// para1.textContent = '  para 2';

// para1.innerHTML = '<strong>this is para 200</strong>'

// let div1 = document.querySelector('.div1');

// let para2 = document.createElement('p');

// para2.textContent = 'this is div ';

// // div1.appendChild(para2);

// div1.insertAdjacentElement('beforebegin', para2);

// // div1.remove()


// console.log(para2.textContent);

// function changeBG(){
//     let para2 = document.querySelector('.para2')
//     let div1 = document.querySelector('.div1');
//     para2.textContent = 'this is new para ';
//     para2.style.color = 'white ';
//     div1.style.backgroundColor ='red';
//     div1.style.fontSize ='50px';


// }


// const btn1 = document.querySelector('#btn1');

// btn1.addEventListener('click', ()=>{
//         let para2 = document.querySelector('.para2')
//         let div1 = document.querySelector('#div1');
//         para2.textContent = 'this is new para ';
//         para2.style.color = 'white ';
//         div1.style.backgroundColor ='red';
//         div1.style.fontSize ='50px';

// })


let div1 = document.querySelector('#div1');

function changeStyle(){

    if( div1.classList.contains('bgRed')){
        div1.classList.add('bgGreen');
        div1.classList.remove('bgRed');
    }else{
        div1.classList.add('bgRed');
        div1.classList.remove('bgGreen');
    }
 
}

setInterval(() => {
    if( div1.classList.contains('bgRed')){
        div1.classList.add('bgGreen');
        div1.classList.remove('bgRed');
    }else{
        div1.classList.add('bgRed');
        div1.classList.remove('bgGreen');
    }
    
}, 1000);



 