const initalstate = {
    isload: false,
    count: 0,
    error: null

}

export const counter_Reducer = (state = initalstate, action) => {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                isload: true
            }

        case "success":
            return {
                ...state,
                isload: false,
                count: state.count+1,
                error: null
            }

        case "error":
            return{
                ...state,
                isload: false,
                error: "Something went Wrong"
            }

        default:
            return{
                ...state
            }

    }
}