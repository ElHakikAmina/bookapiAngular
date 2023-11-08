import {Component,OnInit} from '@angular/core';
import {Book} from './book';


@Component({
    selector: 'app-book',
    templateUrl:'./book.component.html',
    styleUrls:['./book.component.css']
})
export class BookComponent implements OnInit{

    books: Book[];
    constructor(private _bookService: BookService){}

    ngOnInit(): void{
        this.getBooks();
    }



    getBooks(): void{
        this._bookService.getAllBooks()
        .subscribe((bookData) => {this.books =boookData, console.log(bookData)}, (error) =>{
            console.log(error);
        });
    }
}