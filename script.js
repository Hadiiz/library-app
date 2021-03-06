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
        book_arr.push(new Book(text.value, author.value, pages.value, checkbox.checked));
        refresh();
    }
})

function refresh(){
    books_section.innerHTML = '';
    book_arr.forEach(element => {
        books_section.innerHTML += `<div class="book">
        <h2 class="title">${element.title}</h2>
        <h2 class="author">${element.author}</h2>
        <h2 class="pages">${element.pages} Pages</h2>
        <button class="${"book-btn".concat(element.read == true? " read-btn":" not-read-btn")}">${element.read == true? "Read":"Not Read"}</button>
        <button class="book-btn delete-btn">Delete</button>
      </div>`;
    });

    let delete_btn = document.querySelectorAll('.delete-btn');

    delete_btn.forEach(element =>{
        element.addEventListener('click', e =>{
            let counter = 0;
            book_arr.forEach(item =>{
            
                console.log(item);
                if(item.title === element.parentElement.children[0].innerHTML &&
                    item.author === element.parentElement.children[1].innerHTML){
                    book_arr.splice(counter, 1);
                    // counter --;
                    }
                counter ++;
        
            })
            refresh();
        });

})
}



refresh();

