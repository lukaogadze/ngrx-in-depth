import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule, MatListModule, MatSidenavModule, MatToolbarModule,} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import {AuthModule} from './auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {AuthGuard} from './auth/auth.guard';
import {EffectsModule} from '@ngrx/effects';
import {NavigationActionTiming, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './shared/custom-route-serializer';


const routes: Routes = [
    {
        path: 'courses',
        loadChildren: './courses/courses.module#CoursesModule',
        canActivate: [AuthGuard],
    },
    {
        path: "**",
        redirectTo: '/'
    }
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        AuthModule.forRoot(),
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StoreRouterConnectingModule.forRoot({
            stateKey: "router",
            serializer: CustomSerializer,
            navigationActionTiming: NavigationActionTiming.PostActivation
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
