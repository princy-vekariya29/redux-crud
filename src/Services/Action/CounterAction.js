
export function incrementAsync() {
    return dispatch => {
        dispatch(loading())

        setTimeout(() => {
            dispatch(error())
        }, 2000)

        setTimeout(() => {
            dispatch(increment())
        }, 5000)
    }
}

const loading = () => {
    return {
        type: "loading"
    }
}

const increment = () => {
    return {
        type: "success"
    }
}

const error = () =>{
    return{
        type: "error"
    }
}
