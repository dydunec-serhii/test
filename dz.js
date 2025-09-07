// const text = document.querySelector('button');
// text.textContent = 'goodbye';
// const img = document.getElementById('myImage');
// img.setAttribute("src", "two.png");
// const link = document.getElementById('link');
// link.setAttribute("href", "https://youtu.be/NaZeslUINF4?feature=shared");
// const img2 = document.getElementById("src");
// img2.setAttribute("alt", "new alt");
// const uli = document.getElementById('ul');
// const first = uli.querySelector('li');
// first.textContent = "привіт";
// const text = document.createElement('h1');
// console.log(text);
// const text = document.querySelector('#p-id');
// text.textContent = 'traktor soy gyd';
// text.style.backgroundColor = 'red';
// const text1 = document.querySelector('.site-nav');
// text1.style.backgroundColor = 'red'
// const href = document.querySelector('a');
// href.classList.add('site-nav__link');
// const link1 = document.querySelector('a[href="https://"]')
// link1.computedStyleMap.fontSize = '100px'
// const href = document.querySelectorALL('a[href^http://"]');
// href.forEach(element => {
//     element.style,background = 'orange'
// });
// const text = document.querySelector('h1');
// text.textContent = 'hello'
// text.classList.add('colo')
// console.style.backgroundColor = 'blue';
// text.classList.replace('colo' , 'color');
// text.classList.contains('list');
// function calculate() {
//     const firstNUm = parseFloat(document.getElement(firstNUm).valeu)
//     const operator = parseFloat(document.getElement(operator).valeu)
//     const secNumn = parseFloat(document.getElement(secNumn).valeu)
//     let result;
//     switch (operator) {
//         case '+':
//             result = firstNUm + secNumn;
//             break;
//         case '-':
//             result = firstNUm - secNumn;
//         case '*':
//             result = firstNUm * secNumn;
//             break
//         case '/':
//             firstNUm / secNumn;
//             break
//         default:
//             result = 'невірна операція'
//             break;

//     }
//     document.getElement('result').textContent = result;
// }
// const photo = document.querySelector('li');
// photo.addEventListener('click', () => {
// photo.body 
// })
// const images = document.querySelectorAll('.photos img');
// const modal = document.getElementById('fullscreenModal');
// const modalImage = document.getElementById('modalImage');
// const closeModal = document.getElementById('closeModal');

// images.forEach((img) => {
//     img.addEventListener('click', () => {
//         modalImage.src = img.src;
//         modal.classList.add('show');
//         modal.classList.remove('hidden');
//     });
// });

// closeModal.addEventListener('click', () => {
//     modal.classList.remove('show');
//     modal.classList.add('hidden');
// });

// modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.classList.remove('show');
//         modal.classList.add('hidden');
//     }
// });
// const num = _.add(2,3)\
// const text = document.getElementById('inpu');
// function input(event) {
//     // console.log('запита до сервера');
// }
// document.addEventListener(
//     'input',
//     _.throttle(() => {
//         console.log('input event handler invocation every 500ms.');
//     }, 500),
// );
// const input = _.throttle(input, 500);
// const sliser = [
//     { src: './6.png' },
//     { src: './5.png' },
//     { src: './4.png' }
// ]
// let one = 0;
// const div = document.getElementById('div-slider');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');

// function updateSlid() {
//     const member = sliser[one];
//     sliser.src = member.one;

// }
// prevBtn.addEventListener('click', () => {
//     one = (one - 1) % sliser.length;
//     updateSlid();
// })
// nextBtn.addEventListener('click', () => {
//     one = (one + 1) % sliser.length;
//     updateSlid();
// })
// updateSlid();

// const sliser = [
//     { src: './twoo.png' },
//     { src: './onee.png' },
//     { src: './twoo.png' }
// ];

// let index = 0; 
// const div = document.getElementById('div-slider');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');
// const imgEl = document.getElementById('slideImg');

// function updateSlide() {
//     const member = sliser[index];
//     imgEl.src = member.src;
//     imgEl.alt = `Slide ${index + 1}`;
// }

// prevBtn.addEventListener('click', () => {
//     index = (index - 1 + sliser.length) % sliser.length;
//     updateSlide();
// });

// nextBtn.addEventListener('click', () => {
//     index = (index + 1) % sliser.length;
//     updateSlide();
// });

// updateSlide();


// const inpu = document.getElementById('input1');
// const butt = document.getElementById('but');

// function buttInp(event) {
//     let result = event.target.value;
//     console.log(result);
// }
// const boda = _.debounce(buttInp , 500);
// inpu.addEventListener('input', boda);


// butt.addEventListener('submit' , () => {
//  let result = event.target.value;

// })
// const boda = _.debounce(result , 500)

// function inpuFunc(event) {
//     let result = event.target.value;
//     console.log(result);
// }

// const trotInpu = _.throttle(inpuFunc, 5000);
// inpu.addEventListener('input', trotInpu);



// const target = document.getElementById('target');

// const observer = new IntersectionObserver((entries) => entries.forEach(element => {
//     if (element.isIntersecting) {
//         element.target.classList.add('visible')

//     } else {
//         element.target.classList.remove('visible');
//     }

// }),
//     { threshold: 0.5 }
// );

// observer.observe(target);

// const div = document.getElementById('div-img');


// document.addEventListener('DOMContentLoaded', () => {
//     const img = document.querySelectorAll('.imgg');
//     const observer = new IntersectionObserver((entries, observer) => entries.forEach(element => {
//         if (element.isIntersecting && element.intersectionRatio >= 0.5) {
//             let targ = element.target;
//             targ.src = targ.dataset.src;
//             targ.classList.add('visible');
//             observer.unobserve(targ);
//         }
//     });
// }, { threshold: 0.5 });

// img.forEach(img => {
//     observer.observe(img);
// }) 
// document.addEventListener('DOMContentLoaded', () => {
//     const images = document.querySelectorAll('.imgg');

//     const observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
//           const img = entry.target;
//           img.src = img.dataset.src;
//           img.classList.add('visible');
//           console.log('srdsdrsdrsrr');
//           observer.unobserve(img);
//         }
//       });
//     }, { threshold: 0.5 });

//     images.forEach(img => {
//       observer.observe(img);
//     });
//   });

// import { nanoid } from "nanoid";
// console.log(nanoid());
// const id = nanoid(3);
// console.log(id);

// const taskInput = document.getElementById('taskInput');
// const addTaskBtn = document.getElementById("addTaskBtn");
// const taskList = document.getElementById('taskList');
// const deletBut = document.getElementById('removeTaskBtn');
// addTaskBtn.addEventListener('click', () => {
//   const li = document.createElement('li');
//   li.textContent = taskInput.value;
//   li.style.color = 'red';
//   taskList.appendChild(li)
//   taskInput.value = '';
// })
// deletBut.addEventListener('click', () => {
//   const li = document.removeChild('li');
// })
