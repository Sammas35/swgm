import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Handout} from "../domain/handout";


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
    providedIn: 'root'
})
export class SwgmapiService {

    private URL = 'http://localhost:3000/handouts';

    constructor(private http: HttpClient) {
    }

    loadHandouts(): Observable<Handout[]> {
        return this.http.get<Handout[]>(this.URL)
    }

    addHandout(handout: Handout) : Observable<Handout> {
        console.log('service addHandout');

        return this.http.post<Handout>(this.URL, handout, httpOptions).pipe(
            tap((handout: Handout) => console.log(`added handout w/ id=${handout.id}`)),
            catchError(this.handleError<Handout>('addHandout', null))
        );
    }

    saveHandout(handout: Handout): Observable<any[] | Handout> {
        let url = this.URL + '/' + handout.id;

        console.log('saveHandout', handout, url);

        return this.http.put(url, handout, httpOptions).pipe(
            tap((handout: Handout) => console.log(`saved handout id=${handout.id}`)),
            catchError(this.handleError('saveHandout', [])));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
