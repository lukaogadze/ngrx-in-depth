import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from './reducers';
import {LogoutAction} from './auth/state/auth.actions';
import {selectIsLoggedInSelector, selectIsLoggedOutSelector} from './auth/state/auth.selectors';

@Injectable()
export class AppComponentFacade {
    readonly isLoggedIn$: Observable<boolean>;
    readonly isLoggedOut$: Observable<boolean>;


    constructor(private readonly _store: Store<AppState>) {
        this.isLoggedIn$ = this._store.pipe(select(selectIsLoggedInSelector));
        this.isLoggedOut$ = this._store.pipe(select(selectIsLoggedOutSelector));
    }

    logout(): void {
        this._store.dispatch(new LogoutAction());
    }
}
