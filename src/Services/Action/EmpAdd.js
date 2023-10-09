import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import {Add, Delete, Edit_Emp, Update_Emp} from '../ActionType/ActionType'
import { db } from '../Firebase';


export const EmpActionAsync = (data) =>{

    return async dispatch =>{
        // await setDoc(doc(db, "employee", "1"), data); setDoc
        await addDoc(collection(db, "employee"), data);
        dispatch(EmpAction(data))
    }
}

export const EmpAction = (data) =>{
    // console.log("Data",data);
    return{
        type: Add,
        payload: data
    }
}

export const Single_Emp = (data, index) =>{
    return{
        type: Edit_Emp,
        payload: {data, index}
    }
}

export const Update_emp = (data,index) => {

    // console.log("update", data,index);

    return{
        type: Update_Emp,
        payload: {data, index}
    }
}
export const Delete_Emp = (id) =>{

    return{
        type: Delete,
        payload: id
    }
}