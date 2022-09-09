
//loop through bookData. add each book(obj) to the book list
const newShelf = new Bookshelf();
        //give each obj in bookData a book instance to fill shelf
        
        for(const books of bookData){
           //gives each obj a book instance and adds to new shelf
            const h = new Book(books.author,books.language,books.subject, books.title);

            newShelf.addBook(h);
        }
        newShelf.render();


        // console.log(typeof newShelf);
        // console.log(newShelf.bookList[0]['author']);
        // console.log(typeof bookData);
        // console.log(bookData);



   

        