import React, { useState } from 'react'
import styles from '../Style/Todo.module.css'

export default function Todo() {
    const [ taskInput , setTaskInput ] = useState()
   
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-12">
                    <h2>Organize Your Schedule</h2>
                </div>
            </div>
            
            <div className="row">
                    <div className="col-12">
                        <div className={styles.addDiv}>
                            <div className="d-flex justify-content-center">
                                <input type="text" placeholder="Add a task..." value={taskInput} name ={taskInput} onChange={(e) => setTaskInput(e.target.value)} className={`rounded p-2 ${styles.inputAdd}`}/>
                                <div className="p-2 rounded btn btn-outline-secondary">ADD</div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
