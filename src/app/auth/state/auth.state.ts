import {User} from '../../model/user.model';

export interface AuthState {
    readonly isLoggedIn: boolean;
    readonly user: User | undefined
}
