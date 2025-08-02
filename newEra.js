// const fir = document.getElementById('first');
// const sec = document.getElementById('sec');
// const thitd = document.getElementById('third');
// fir.addEventListener('click', function (event) {
//     const clicked = event.target
//     alert('click')
// })
// sec.addEventListener('click', () => {
//     alert('sec')
// })
// thitd.addEventListener('click', () => {
//     alert('third')
// })


// const userList = document.getElementById('userList');

// userList.addEventListener('click', function(event) {
//      if (event.target.classList.contains('deleteButton')) {
//         const li = event.target.closest('li');
//        li.remove();
//      }
// })

const taskForm = document.getElementById('taskForm');
const newTask = document.getElementById('newTask');
const taskList  = document.getElementById('addTask');
// addTask.addEventListener('submit' , () => {
//     newTask.textContent = '';
//     newTask.style.color = 'red';
// }) 
taskForm.addEventListener('submit', function(event) {
   event.preventDefault();
    const li = document.createElement('li');
     const taskText = newTask.value;
     li.innerHTML = `<input type = 'checkbox'> <p>${taskText}</p> <button class = 'delete'>delete</button>`;
    // li.textContent = taskText;;
    // li.style.color = 'red';
    // taskList.appendChild(li); 
    
    newTask.value = '';

});
taskList.addEventListener('click', function(event) {
    const target = event.target;
    if (event.target.classList.contains()) {
        const 
    }
})
// Додати обробник події для додавання нового завдання
// Заборонити стандартну поведінку форми


     // Створити новий елемент завдання
    
    // Очистити поле введення
    
// Додати обробник події для видалення завдання


// Додати обробник події для відмітки виконання завдання