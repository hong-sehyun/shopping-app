let initialState = {
    id: '',
    password: '',
    authenticate: false,
}

function authenticateReducer(state = initialState, action) {
    let { type, payload } = action
    console.log("login success")
    switch (type) {
        case "LOGIN_SUCCESS":
            return { ...state, id: payload.id, password: payload.password, authenticate: true }
        case "LOGOUT":
            return { ...state, authenticate: payload.authenticate };
        default:
            return { ...state };
    }

}

export default authenticateReducer;