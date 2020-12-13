import actionConstant from './actionsTypes'
import { loadData,saveData } from '../Redux/localStorage'

const initState = {
    todoArray :loadData('todoArray') || [],
    status :  loadData('status') || false,
}

export default ( state = initState, action ) => {
    switch( action.type ) {
        case actionConstant.TODO_ADD:
            saveData('status' , true )
            saveData('todoArray' , [...state.todoArray , action.payload ] )
            return{
                ...state,
                todoArray : [...state.todoArray , action.payload ],
                status : true
            }
        default :
            return state
    }
}