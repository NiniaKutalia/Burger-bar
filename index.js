"use strict"

let input = document.querySelector('.form');
let button = document.querySelector('.btn');
let ul = document.querySelector('.ul-item');
let deleteAll = document.querySelector('.clear');
let forma = document.querySelector('form')

forma.addEventListener('submit', function (gacherdi) {
    gacherdi.preventDefault();
    let inputValue = input.value;
    if (inputValue == ' ') {
        return;
    }
    let li = document.createElement('li');
    let btnDelete = document.createElement('button');
    btnDelete.textContent = 'delete me';
    btnDelete.addEventListener('click', function () {
        li.remove();
    })
    li.textContent = inputValue;
    li.appendChild(btnDelete);
    ul.appendChild(li);
    input.value = ' ';
})

deleteAll.addEventListener('click', function () {
    ul.innerHTML = ' ';
})


let navigation = document.getElementById('navbar');
let burgerbar = document.getElementById('burgerBar');

burgerbar.addEventListener('click', function () {
    burgerbar.classList.toggle('activeBar');
    navigation.classList.toggle('activeNav');
})