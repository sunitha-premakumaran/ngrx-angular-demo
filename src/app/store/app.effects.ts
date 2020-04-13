import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of, pipe } from 'rxjs';
import { AddTodo } from './app.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class AppEffects {

    //only trigger for this action
    @Effect() todoPersist = this.actions$.pipe(
        ofType('POST_TODO'),
        switchMap((payload: string) => {
            return this.http.post(
                'https://demo9257915.mockable.io/todos',
                { payload: payload }
            ).pipe(
                map((data: string) => {
                    return new AddTodo(data);
                }),
                catchError(error => {
                    return of(null);
                })
            )
        })
    );
    // Subscribe to actions happened and react to it.
    constructor(private actions$: Actions, private http: HttpClient) { }
}