let menuBtn = document.querySelector('.main__menu-btn, .menu__btn' );
let menu = document.querySelector('.main__menu, .menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
}) 




let btn1 = document.getElementById('btn1');
let news1 = document.getElementById('news1');

let btn2 = document.getElementById('btn2');
let news2 = document.getElementById('news2');

let btn3 = document.getElementById('btn3');
let news3 = document.getElementById('news3');

let btn4 = document.getElementById('btn4');
let news4 = document.getElementById('news4');

let btn5 = document.getElementById('btn5');
let news5 = document.getElementById('news5');


btn1.addEventListener('click', function(){
	news1.classList.toggle('active');
})

btn1.addEventListener('click', function(){
	btn1.classList.toggle('active');
})



btn2.addEventListener('click', function(){
	news2.classList.toggle('active');
})

btn2.addEventListener('click', function(){
	btn2.classList.toggle('active');
})



btn3.addEventListener('click', function(){
	news3.classList.toggle('active');
})

btn3.addEventListener('click', function(){
	btn3.classList.toggle('active');
})



btn4.addEventListener('click', function(){
	news4.classList.toggle('active');
})

btn4.addEventListener('click', function(){
	btn4.classList.toggle('active');
})



btn5.addEventListener('click', function(){
	news5.classList.toggle('active');
})

btn5.addEventListener('click', function(){
	btn5.classList.toggle('active');
})



