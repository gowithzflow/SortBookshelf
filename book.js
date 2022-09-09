//each item in the arrray is a book (obj)
class Book {
    constructor(author, language, subject, title) {
        //properties of each book object
        this.author = author; //arr
        this.language = language; //arr
        this.subject = subject; //array
        this.title = title; //arr
    }
    render(){
        const li = document.createElement("li");
        li.id = "#book";
        li.textContent = `${this.title} by ${this.author}`;

        const fav = document.createElement("button");
        fav.id = "#fav-button";
        fav.textContent = "+";

        //gives favorite list item of each book a class name and changes indicator if favorited
        fav.addEventListener('click', function(){
            fav.textContent = "*";
            li.className = "fav";
            
           });

        li.append(fav);

        return li  ;
        }  
    }

    
           

        
