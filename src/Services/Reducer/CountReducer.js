const initalState = {
    count : 0,
}
export const SagaCount = (state = initalState,action) =>{
    switch(action.type){
        case "INCREMENT":
            return{
                ...state,
                count: state.count + 1
            }

        default :
         return state
    }
}