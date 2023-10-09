

const initialState = {
    Suc: "",
    Err: "",
    Id: "",
    IsLogin:false
}

export const Authreducer = (state = initialState, action) => {

    switch (action.type) {
        case "SignUp_suc":
            return {
                ...state,
                Suc: "SignUp complete"
            }

        case "SignUp_Err":
            return {
                ...state,
                Err: action.payload
            }

        case "SignIn_suc":
            return {
                ...state,
                IsLogin: true,
                Suc: "SignIn complete"
            }


        case "SignIn_Err":
            return {
                ...state,
                Err: action.payload
            }



        default:
            return state
    }
}