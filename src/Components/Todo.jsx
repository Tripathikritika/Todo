import React, { useEffect, useState } from 'react'
import styles from '../Style/Todo.module.css'
import { addTask ,refreshTask,addCompletedTask } from '../Redux/action'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function Todo() {
    const [ taskInput , setTaskInput ] = useState("")
    const [hashTag ,setHashTag] = useState("")
    const todoArray = useSelector((state) => state.reducers.todoArray)
    const completedTask = useSelector((state) => state.reducers.completedArray)
    const dispatch = useDispatch()

    useEffect(() => {
       if( taskInput[0] === "#"){
           let hashInput =  taskInput.split("").slice(1).join("")
           setHashTag(hashInput)
       }
       
    }, [taskInput])
  
    const handleChange = ( e ) => {
        setTaskInput(e.target.value)
    }
    const handleInputAdd = ( e ) =>{
        e.preventDefault()
        if( taskInput[0] !== '#'){
            dispatch(addTask( taskInput ))
            setTaskInput("")
        }
    }

    const handleReset = () => {
        dispatch(refreshTask())
    }

    const handleCompleted = ( title ) => {
        dispatch(addCompletedTask(title))
        setTaskInput("")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className={`${styles.commonColor}`}>Organize Your Day</h2>
                </div>
            </div>
            
            <div className={`row ${styles.mainDiv}`}>
                <div className ="col-12 d-flex justify-content-end" >
                    <div className={`btn  m-1 ${styles.buttonBorder}`} onClick={handleReset}><i class="fas fa-power-off"></i> RESET</div>                        

                </div>
                <div className="col-12">
                    <div className={`${styles.addDiv} `}>
                        <div>
                            <form onSubmit = {handleInputAdd}>
                                <input type="text" placeholder="Add a task..." value={taskInput} name ={taskInput} onChange={handleChange} className={`rounded  p-2 ${styles.inputAdd}`}/>
                            </form>
                        </div>
                       
                        <div className="text-left">
                            {
                                todoArray && todoArray.map((item) => 
                                    <div key={item.id}>
                                        <div className = "container p-0">
                                            <div className = "row">
                                                <div className = "col-12 m-2 d-flex justify-content-center">
                                                    <div className = {`${styles.card} card`} style={{width:'200px',border:item.title.includes(hashTag) && hashTag !== "" ? '3px solid yellow' : null }} onClick={() => handleCompleted(item.title)} >
                                                        <div className = "card-body" >
                                                            {item.title}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            {
                                completedTask && 
                                completedTask.map((item) => 
                                <div key={item.id}>
                                   
                                    <div className = "container">
                                        <div className = "row">
                                            <div className = "col-12 m-2 d-flex justify-content-center">
                                                <div className = {`${styles.card} card border-3 `} style={{width:'200px',border:item.title.includes(hashTag) && hashTag !== "" ? '3px solid yellow' : "3px solid green" }} >
                                                    <div className = "card-body" >
                                                        {item.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        
           
        </div>
    )
}
