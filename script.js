function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;4
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, 
                ${this.read == false ? "not read yet": "read"}`;
    }
}