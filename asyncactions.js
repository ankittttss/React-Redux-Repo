
const initialstate = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';


const fetchuserrequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchusersuccess = () => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchuserfailure = () => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                error: action.payload,
                users: []
            }
    }
}