const newBtn = document.getElementById("newBtn");
const addBtn = document.getElementById("addBtn");
const popUp = document.getElementById("popUp");
const closePopUp = document.getElementsByTagName("span")[0];

addBtn.addEventListener("click",addBookToLibrary);
newBtn.addEventListener("click",() => popUp.style.display="block");
closePopUp.addEventListener("click",() => popUp.style.display="none");


class Book{
    constructor(title,author,pages,read){
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value + "pg";
        this.read = form.read.value;
    }
}

let myLibrary = [];
let newBook;

restore();

function addBookToLibrary(){
    event.preventDefault();
    popUp.style.display ="none";

    newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    setData();
    render();
    form.reset();
}

function render(){
    const display = document.getElementById("Library-container");
    const books = document.querySelectorAll('.book');

    books.forEach(book => display.removeChild(book));
    
    for (let i=0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }


}

function createBook(item){
    const library = document.getElementById('Library-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    bookDiv.classList.add("book");
    bookDiv.setAttribute("id",myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add("title");
    bookDiv.appendChild(titleDiv);

    authDiv.textContent = item.author;
    authDiv.classList.add("author");
    bookDiv.appendChild(authDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add("pages");
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add("readBtn");
    bookDiv.appendChild(readBtn);
    if(item.read === false){
        readBtn.textContent = "Not Read";
        readBtn.style.backgroundColor = '#e04f63';
    }else{
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#63da63'
    }

    removeBtn.textContent ="Remove";
    removeBtn.setAttribute("id","removeBtn");
    bookDiv.appendChild(removeBtn);

    library.appendChild(bookDiv);



    removeBtn.addEventListener("click",()=>{
        myLibrary.splice(myLibrary.indexOf(item),1);
        setData();
        render();
    });

    readBtn.addEventListener('click', () => { 
        item.read = !item.read; 
        setData(); 
        render();
    }); 


}


function setData(){
    localStorage.setItem(`myLibrary`,JSON.stringify(myLibrary));
}

function restore(){
    if(!localStorage.myLibrary){
        render();
    }
    else{
        let objects = localStorage.getItem("myLibrary");
        objects = JSON.parse(objects);
        myLibrary = objects;
        render();
    }
}




