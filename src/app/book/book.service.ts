import {} from '@angular/http';
import { Injectable  } from '@angular/core';
import {Book} from './book';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';


@Injectable()
export class BookService{

    constructor(private _httpService:Http){}

    getAllBooks(): Observable<Book[]>{
        return this._httpService.get("http://localhost:8037/bookapi/api/book")
        .map((response: Response) => response.json())
        .catch(this.handleError);
    }

    private handleError(error: Response)
    {
        return Observable.throw(error);
    }
}