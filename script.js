const book_arr = [{
    title: "Moby Dick",
    author: "Herman Melville",
    pages: "378",
    read: true
}];

const add_book = document.getElementById("add-button");
const form_containter = document.getElementById("form-section");
const form = document.getElementById("form-section");
const books_section = document.getElementById("books");

add_book.addEventListener('click', e=>{form.style.display="block"});
form_containter.addEventListener('click', e =>{
    if(e.target.id == "form-section")
        form.style.display ="none";
});

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const submit = document.getElementById("submit-btn");
const text = document.getElementById("title-form");
const author = document.getElementById("author-form");
const pages = document.getElementById("pages-form");
const checkbox = document.getElementById("checkbox");
submit.addEventListener('click', e=>{
    e.preventDefault();
    if(text.value !='' && author.value!='' && pages.value!= ''){
        book_arr.push(new Book(text.value, author.value, pages.value, checkbox.value == "on"? true : false));
        refresh();
    }
})

function refresh(){
    books_section.innerHTML = '';
    book_arr.forEach(element => {
        books_section.innerHTML += `<div class="book">
        <h2 id="title">${element.title}</h2>
        <h2 id="author">${element.author}</h2>
        <h2 id="pages">${element.pages} Pages</h2>
        <button class="book-btn" id="read-btn">${element.read == true? "Read":"Not Read"}</button>
        <button class="book-btn" id="delete-btn">Delete</button>
      </div>`;
    });
}



refresh();