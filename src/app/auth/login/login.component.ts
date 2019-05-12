import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {tap} from 'rxjs/operators';
import {noop} from 'rxjs';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {LoginAction} from '../state/auth.actions';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form!: FormGroup;

    constructor(private readonly _formBuilder: FormBuilder,
                private readonly _authService: AuthService,
                private readonly _router: Router,
                private readonly _store: Store<AppState>) {
    }

    buildForm() {
        this.form = this._formBuilder.group({
            email: ['test@angular-university.io', [Validators.required]],
            password: ['test', [Validators.required]]
        });
    }

    ngOnInit() {
        this.buildForm();
    }


    login(): void {
        const formValue = this.form.value as {email: string, password: string};

        this._authService.login(formValue.email, formValue.password)
            .pipe(tap(user => {
                this._store.dispatch(new LoginAction(user));

                this._router.navigateByUrl("/courses");
            }))
            .subscribe(
            noop,
            () => alert("Login Failed")
        );
    }
}
