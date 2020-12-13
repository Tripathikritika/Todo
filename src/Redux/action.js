import actionConstant from './actionsTypes'
import { v4 as uuidv4 } from 'uuid'

export const addTask = ( payload ) => ({
    type : actionConstant.TODO_ADD,
    payload : {
        id : uuidv4(),
        title : payload,
        status : true
    }
})

