
//loop through bookData. add each book(obj) to the book list
const newShelf = new Bookshelf();
        //give each obj in bookData a book instance to fill shelf
        
        for(const books of bookData){
           
            const h = new Book(books.author,books.language,books.subject, books.title);

            //adds new book to bookshelf
            newShelf.addBook(h);
        }
        // console.log(typeof newShelf);
        // console.log(newShelf.bookList[0]['author']);
        // console.log(typeof bookData);
        // console.log(bookData);

        newShelf.render();


   

        