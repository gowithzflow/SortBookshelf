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
        fav.addEventListener('click', function(){
             fav.textContent = "*";
            }); 

        li.append(fav);

        return li  ;
        }  
    }

    
           

        
