import {AuthState} from './auth.state';
import {LoginAction} from './auth.actions';

export abstract class AuthStateMutators {

    static login(state: AuthState, action: LoginAction): AuthState {
        return {
            ...state,
            isLoggedIn: true,
            user: action.payload
        };
    }

    static logout(state: AuthState): AuthState {
        return {
            ...state,
            isLoggedIn: false,
            user: undefined
        };
    }
}
