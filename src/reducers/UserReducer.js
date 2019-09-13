const INITIAL_STATE = {
    user: null
};

 export default function userReducer (state = INITIAL_STATE, action) {
    switch(action.type) {
        // case EMAIL_CHANGED:
        //     return {...state, email: action.payload};
        // case PASSWORD_CHANGED:
        //     return {...state, password: action.payload}
        // case LOGIN_USER:
        //     return {...state, loading: true}
        // case LOGIN_USER_SUCCESS: 
        //     return {...state, ...INITIAL_STATE, user: action.payload}
        // case LOGIN_USER_FAIL:
        //     return {...state, error: 'Authentication Failed.', loading: false}
        default:
            return state;
    }
}