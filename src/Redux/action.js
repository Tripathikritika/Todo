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

export const addCompletedTask = (payload) => ({
    type : actionConstant.TODO_COMPLETED_TASK,
    payload : {
        id : uuidv4(),
        title : payload,
    }
})

export const refreshTask = (payload) => ({
    type : actionConstant.RESET_TASK,
})