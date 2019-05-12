import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../reducers';
import {selectIsLoggedInSelector} from './state/auth.selectors';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly _store: Store<AppState>,
                private readonly _router: Router) {}

    canActivate(): Observable<boolean> {
        return this._store.pipe(select(selectIsLoggedInSelector), tap(isLoggedIn => {
            if (!isLoggedIn) {
                this._router.navigateByUrl("/login");
            }
        }));
    }
}
