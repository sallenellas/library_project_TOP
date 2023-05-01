// starting JavaScript
let myLibrary = [];

function Book(title, author, genre){
    this.title = title;
    this.author = author;
    this.genre = genre;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}


const form = document.querySelector('form');

// inputs
const title = document.querySelector('#title');
const author = document.querySelector('#author')
const genre = document.querySelector('#genre');

// buttons
const addButton = document.querySelector('#add');
const display = document.querySelector('#display');

// output
const library = document.querySelector('.library');

// adds book to library
addButton.addEventListener('click', (e) => {

    let libro = new Book(title.value, author.value, genre.value)
    addBookToLibrary(libro)
    console.log(libro);
    console.log(myLibrary);

    form.reset();
    e.preventDefault();
});

// displays library
display.addEventListener('click', (e) => {

    let t;
    let a;
    let g;
    let bookX;

    for(let i = 0; i < myLibrary.length; i++){
        bookX = myLibrary[i];
        console.log(typeof bookX);
    }
});

// only displays one book at the moment

// const Person = (name) => {
//     const sayName = () => console.log(`my name is ${name}`);
//     return {sayName};
// }
// // const Nerd = (name) => {
// //     const {sayName} = Person(name);
// //     const doSomethingNerdy = () => console.log('nerd stuff');
// //     return {sayName, doSomethingNerdy};
// //     }


// const Nerd = (name) => {
//     const prototype = Person(name);
//     const doSomethingNerdy = () => console.log('nerd stuff');
//     return Object.assign({}, prototype, {doSomethingNerdy});
//   }

// const jeff = Nerd('jeff');
// jeff.sayName();
// jeff.doSomethingNerdy();


