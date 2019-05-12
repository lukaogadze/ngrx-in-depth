import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AppComponentFacade} from './app-component.facade';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AppComponentFacade]
})
export class AppComponent {
    readonly isLoggedIn$: Observable<boolean>;
    readonly isLoggedOut$: Observable<boolean>;

    constructor(private readonly _appComponentFacade: AppComponentFacade) {
        this.isLoggedIn$ = this._appComponentFacade.isLoggedIn$;
        this.isLoggedOut$ = this._appComponentFacade.isLoggedOut$;
    }

    logout() {
        this._appComponentFacade.logout();
    }

}
