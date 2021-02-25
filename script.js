const book_arr = [];
const add_book = document.getElementById("add-button");
const form_containter = document.getElementById("form-section");
const form = document.getElementById("form-section");
const submit = document.getElementById("submit-btn")

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
    // this.info = function(){
    //     return `${this.title} by ${this.author}, ${this.pages} pages, 
    //             ${this.read == false ? "not read yet": "read"}`;
    // }
}