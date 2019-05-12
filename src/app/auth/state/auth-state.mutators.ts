import {AuthState} from './auth.state';
import {User} from '../../model/user.model';

export abstract class AuthStateMutators {

    static login(state: AuthState, user: User): AuthState {
        return {
            ...state,
            isLoggedIn: true,
            user: user
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
