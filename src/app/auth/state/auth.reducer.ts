import {AuthState} from './auth.state';
import {AuthActions, AuthActionTypes} from './auth.actions';
import {AuthStateMutators} from './auth-state.mutators';

const initialState: AuthState = {
    isLoggedIn: false,
    user: undefined
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
    switch (action.type) {

        case AuthActionTypes.Login:
            return AuthStateMutators.login(state, action);

        case AuthActionTypes.Logout:
            return AuthStateMutators.logout(state);


        default:
            return state;
    }
}
