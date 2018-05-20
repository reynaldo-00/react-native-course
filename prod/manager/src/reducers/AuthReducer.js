import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED :

            return;

        case 'password_changed':

            return;

        default :
            return state;
    }
};
