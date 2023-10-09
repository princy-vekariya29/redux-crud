import { Add, Delete, Edit_Emp, Update_Emp } from "../ActionType/ActionType";

const initionstate = {
    employes: [],
    employe: null,
    isEdit: false,
    isIndex: null
}


const Emp_re = (state = initionstate, action) =>{

    // console.log(action.payload,"acccc");
    switch (action.type) {
        case Add:
            return{
                ...state,
                employes: [...state.employes, action.payload]
            }
            break;

        case Edit_Emp:
            return{
                ...state,
                employe: action.payload.data,
                isIndex: action.payload.index
            }
            break;

        case Update_Emp:
            let emp = state.employes;

            emp[action.payload.index] = action.payload.data;
            
            console.log(emp,"up_em");
            return{
                ...state,
                employes: emp,
                employe: null,
                isIndex: null
            }

            case Delete:

            let Delete_Emp= state.employes;
            let De_Emp = Delete_Emp.filter((del)=>{
                return(
                    del.id != action.payload
                )
            })

            return{
                ...state,
                employes: De_Emp
            }

        default:
            return state;
            
            break;



    }

}

export default Emp_re;