let table = document.getElementById('books');
const submitButton = document.getElementById('myBtn');
let titleInput = document.getElementById('titlu');
let authorInput = document.getElementById('author');
let isbnInput = document.getElementById('isbn');
const banner = document.getElementById('banner');
const xbutton = document.getElementsByClassName('delete');
const rows = document.getElementsByTagName('tr');

class Book{
    constructor(_title, _author, _ISBN){
        this.title = _title;
        this.author = _author;
        this.isbn = _ISBN;
    }
}
class UI{
    constructor (_bookTitle, _bookAuthor, _bookIsbn){
        this.bookTitle = _bookTitle;
        this.bookAuthor = _bookAuthor;
        this.bookIsbn = _bookIsbn;
        this.banner = banner;
    }
    addBook(){
        if( this.bookTitle !=="" && this.bookAuthor !=="" && this.bookIsbn !==""){
            const tableBooks = 
        `<tr>
            <td>${this.bookTitle}</td>
            <td>${this.bookAuthor}</td>
            <td>${this.bookIsbn}</td>
            <td><button class = 'remove'>X</td>
        </tr>`
            table.innerHTML = table.innerHTML + tableBooks;
            this.banner.innerHTML = "Book added";
            this.banner.style.backgroundColor = 'rgb(68, 235, 214)';
            this.banner.style.color = 'white';
        }
        else{
            this.banner.innerHTML = "Fill in all fields, please!";
            this.banner.style.backgroundColor = 'red';
        }
    }
    removerow(x, y){
        if(x){
           y;
        this.banner.innerHTML = "Book deleted";
        this.banner.style.backgroundColor = 'rgb(232, 186, 89)';
        this.banner.style.color = 'black';
        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
        } 
    }
}
//ADAUGAREA CARTII IN TABEL CU SUBMIT
submitButton.addEventListener('click', addbook);
function addbook(){
    const book = new Book(titleInput.value, authorInput.value, isbnInput.value);
    console.log(book.title);
    const ui = new UI(book.title, book.author, book.isbn);
    console.log(ui);
    ui.addBook();

    /*const x = titleInput.value;
    const y = authorInput.value;
    const z = isbnInput.value;
    if(x !== "" && y !== "" && z !== ""){
        const book = new Book(x, y, z);
        const tableBooks = 
        `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><button class = 'remove'>X</td>
        </tr>`
        table.innerHTML = table.innerHTML + tableBooks;
        banner.innerHTML = "Book added";
        banner.style.backgroundColor = 'rgb(68, 235, 214)';
        banner.style.color = 'white';
        console.log(tableBooks);
    }
    else{
        banner.innerHTML = "Fill in all fields, please!";
        banner.style.backgroundColor = 'red';
    }*/
}

// X BUTTON
table.addEventListener('click', removeRow);
function removeRow(e){
    const book = new Book(titleInput.value, authorInput.value, isbnInput.value);
    const ui = new UI(book.title, book.author, book.isbn);
    const a = e.target.classList.contains('remove');
    const b = e.target.parentNode.parentNode.remove();
    ui.removerow(a, b);
    
    /*console.log(e.target.parentNode.parentNode);
    const x = e.target.parentNode.parentNode;
    if(e.target.classList.contains('remove')){
        x.remove();
    banner.innerHTML = "Book deleted";
    banner.style.backgroundColor = 'rgb(232, 186, 89)';
    banner.style.color = 'black';
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';*/
    }