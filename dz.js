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
const text = document.getElementById('inpu');
function input(event) {
    // console.log('запита до сервера');
}
document.addEventListener(
    'input',
    _.throttle(() => {
        console.log('input event handler invocation every 500ms.');
    }, 500),
);
// const input = _.throttle(input, 500);