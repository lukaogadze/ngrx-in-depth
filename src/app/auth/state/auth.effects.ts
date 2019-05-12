import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, LoginAction, LogoutAction} from './auth.actions';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {defer, of} from 'rxjs';
import {User} from '../../model/user.model';

const USER_KEY = "user";

@Injectable()
export class AuthEffects {
    constructor(private readonly _actions$: Actions,
                private readonly _router: Router) {
    }

    @Effect({dispatch: false})
    readonly login$ = this._actions$.pipe(
        ofType<LoginAction>(AuthActionTypes.Login),
        tap(action => localStorage.setItem(USER_KEY, JSON.stringify(action.payload)))
    );

    @Effect({dispatch: false})
    readonly logout$ = this._actions$.pipe(
        ofType<LoginAction>(AuthActionTypes.Logout),
        tap(() => {
            localStorage.removeItem(USER_KEY);
            this._router.navigateByUrl("/login");
        })
    );

    @Effect()
    readonly init$ = defer(() => {

        const userAsJsonString: string | null = localStorage.getItem(USER_KEY);
        if (userAsJsonString) {
            const user: User = JSON.parse(userAsJsonString);
            return  of(new LoginAction(user)) as any;
        } else {
            return of(new LogoutAction()) as any;
        }

    });
}
