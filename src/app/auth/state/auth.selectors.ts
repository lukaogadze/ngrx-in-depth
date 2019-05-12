import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {AuthState} from './auth.state';

const selectAuthFeatureState: MemoizedSelector<object, AuthState> = createFeatureSelector<AuthState>("auth");

export const selectIsLoggedInSelector: MemoizedSelector<object, boolean> = createSelector(
    selectAuthFeatureState,
    state => state.isLoggedIn
);

export const selectIsLoggedOutSelector: MemoizedSelector<object, boolean> = createSelector(
    selectAuthFeatureState,
    state => !state.isLoggedIn
);
