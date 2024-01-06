const myLibrary = [];
class Book {
    constructor(title, author, pages,) {
         this.title = title;
         this.author = author;
         this.pages = pages;
} 
}

let book2 = new Book('2nd', 'Author2', false);
function addBook(bookName) {
     myLibrary.push(bookName);
}
addBook(book2);

// do not touch the code inside. It is used for popup activation

let flag = 1;
const circle = document.querySelector('.addNewButton');
const x = document.querySelector('#x');
circle.addEventListener('click', 
    function append() {
        if (flag == 1) {
            console.log('function append ran');
            flag=0
            popupForm.classList.add('active')
            circle.style.backgroundColor = 'rgb(30, 66, 176);'
            x.style.transform = 'rotate(45deg)';
        } else {
            console.log('function remove ran');
            popupForm.classList.remove('active')
            flag=1;
            circle.style.backgroundColor = 'rgb(45, 80, 185);'
            x.style.transform = 'rotate(0deg)';
            
        }
    }
)
const container = document.querySelector('.container');
const popupForm = document.querySelector('.popup');

// do not touch the code inside. It is used for popup activation

//This code is used to get the data from the submit text boxes
let bookName;
let authorName;
let pagesValue;
let submit = document.querySelector('.submitButtonSpecific')
let library = document.querySelector('.library')
let bookCard = document.querySelector('.bookCard')
function getBookValue() {
    bookName = document.querySelector('.bookNameTextField').value;
    console.log('function ran book');
    console.log(bookName);
}
function getAuthorValue() {
    authorName = document.querySelector('.authorNameTextField').value;
    console.log('function ran author');
    console.log(authorName);
}
function getPagesValue() {
    pagesValue = document.querySelector('.pagesTextField').value;
    console.log('function ran pages');
    console.log(pagesValue);
}

submit.addEventListener('mousedown', getBookValue);
submit.addEventListener('mousedown', getAuthorValue);
submit.addEventListener('mousedown', getPagesValue);

submit.addEventListener('mouseup', function() {
    document.querySelector('.bookNameTextField').value = '';
    document.querySelector('.authorNameTextField').value = '';
    document.querySelector('.pagesTextField').value = '';
    console.log('function remove ran');
    popupForm.classList.remove('active');
    flag=1;
    x.style.transform = 'rotate(0deg)';
    let bookObject = new Book(bookName, authorName, pagesValue);
    function addBook() {
         myLibrary.push(bookObject);
    }
    addBook();
    var newDiv = document.createElement('div');
    newDiv.classList.add('bookCard');
    bookCard.classList.add
    library.appendChild(newDiv);



})

//This code is used to get the data from the submit text boxes


