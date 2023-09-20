const div = document.querySelector('div');
const button = document.querySelector('button');
const form = document.querySelector('form');
//const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');


div.addEventListener('click', event => {
    console.log('clicked div');
    console.log(event);
});

button.addEventListener('click', event => {
    event.stopPropagation();
    console.log('clicked button');
    console.log(event);
});

form.addEventListener('submit', event => {
    event.preventDefault();
});

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     });
// });

list.addEventListener('click', event => {
    event.target.closest('li').classList.toggle('highlight');
});