import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form!: FormGroup;

    constructor(private readonly _formBuilder: FormBuilder) {
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


    login() {

    }
}
