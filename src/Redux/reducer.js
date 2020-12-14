import actionConstant from './actionsTypes'
import { loadData,saveData,deleteData } from '../Redux/localStorage'

const initState = {
    todoArray : loadData('todoArray') || [],
    status :  loadData('status') || false,
    completedArray : loadData('completedArray') || []
}

export default ( state = initState, action ) => {
    switch( action.type ) {
        case actionConstant.TODO_ADD:
            saveData('status' , true )
            saveData('todoArray' , [...state.todoArray , action.payload ] )
            return{
                ...state,
                todoArray : [ action.payload ,...state.todoArray ],
                status : true
            }
        case actionConstant.TODO_COMPLETED_TASK:
            saveData('completedArray' ,  [...state.completedArray , action.payload ] )
            saveData('todoArray' , state.todoArray.filter((item) => item.title !== action.payload.title))
            return{
                ...state,
                completedArray : [ action.payload , ...state.completedArray  ],
                todoArray : state.todoArray.filter((item) => item.title !== action.payload.title)
            }
        case actionConstant.RESET_TASK:
            deleteData('todoArray')
            deleteData('completedArray')
            deleteData('status' )
            return{
                ...state,
                todoArray : [],
                completedArray : []
            }
        default :
            return state
    }
}