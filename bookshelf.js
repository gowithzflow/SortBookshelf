/**
 * Bookshelf manages an arr of books
 * methods: add + remove books to arr
 */
 class Bookshelf {
    //properties
    constructor(bookList = [], favorites = []) {
        this.bookList = bookList;
        this.favorites = favorites;
    }
    //adds book to the end of list (arr)
    addBook(book) {
        this.bookList.push(book);
        return this.bookList;
    }

    
    countFav(book) {
        //make arr of all favorites, for each book in favorites.... call countFav()
        const favs = document.querySelectorAll(".fav");
        
        this.favorites.push(book);
        return this.favorites;
    }

    filter(){
        const searchVal = document.querySelector("input");
        const sButton = document.querySelector("#search-button");

        // use reg fun syntax to use global this in func below
       // compare the title to the search val 

       sButton.addEventListener('click', function() {

        bookList.filter((book) => 
         book["title"].includes(searchVal.value));
        list.replaceChildren(...books);
        return list;});
    }


    //remove book from the list (arr)
    rmBook(book) {
        // find index of book.
        const index = this.bookList.indexOf(book);

        //if book index is 0 or greater remove + retun it
        if (index >= 0) {
            this.bookList.splice(index, index + 1);
            return book;
        } else { //if book isn't in list
            return null;
        }
    }

    // create a ul for the newShelf and make each book a li with unique id
    render() {
        const shelf = document.querySelector("#shelf");
        const list = document.createElement("ul");
        const ctFav = document.querySelector("#ctFav");

        //map ea. book in list to render
        const books = this.bookList.map((book) =>
            book.render());

        books.forEach((book) => this.favorites.includes(book)? this.countFav(book) : 0 );

        ctFav.textContent = `${this.favorites.length}`;

        list.replaceChildren(...books);

        shelf.append(list);

        return list;


    };

}




