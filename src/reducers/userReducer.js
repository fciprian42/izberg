import { userConstants } from '../constants/userConstants'

const initialState = {
    username: '',
    isRegistred: false
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.SIGNUP:
            return { username: action.data, isRegistred: true }
            break
        default:
          return state
    }
}

export default userReducer