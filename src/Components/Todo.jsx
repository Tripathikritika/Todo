import React, { useState } from 'react'
import styles from '../Style/Todo.module.css'
import { addTask } from '../Redux/action'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function Todo() {
    const [ taskInput , setTaskInput ] = useState("")
    const todoArray = useSelector((state) => state.reducers.todoArray)
    const dispatch = useDispatch()

    const handleInputAdd = ( e ) =>{
        e.preventDefault()
        dispatch(addTask( taskInput ))
    }
    // console.log(taskInput)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2>Organize Your Schedule</h2>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <div className={`${styles.addDiv} `}>
                        <div className="text-center">
                            <form onSubmit = {handleInputAdd}>
                                <input type="text" placeholder="Add a task..." value={taskInput} name ={taskInput} onChange={(e) => setTaskInput(e.target.value)} className={`rounded  p-2 ${styles.inputAdd}`}/>
                                {/* <div className="p-2 rounded btn btn-outline-secondary">ADD</div> */}
                            </form>
                        </div>
                        <div className="text-left">
                            {
                                todoArray && todoArray.map((item) => 
                                    <div key={item.id}>
                                        <div className = "container">
                                            <div className = "row">
                                                <div className = "col-12 m-2 d-flex justify-content-center">
                                                    <div className = "card" style={{width:'200px'}}>
                                                        <div className = "card-body">
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
