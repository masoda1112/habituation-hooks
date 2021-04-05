import React, {useContext, useState} from 'react'
import Register from './register'
import List from './list'
import CompleteList from './completeList'

const Top = () => {
  return (
    <>
      <div className="top">
        <div className="register-area">
          <Register />
        </div>
        <div className="habit-list-area">
          <List />
        </div>
        <div className="complete-list-area">
          <CompleteList />
        </div>
      </div>
      <style jsx>
          {`
            .register-area{
              height:auto;
            }
            .habit-list-area{
              min-height:300px;
            }
            .complete-list-area{
              height:30%;
            }
          `}
      </style>
    </>
    
  )

}

export default Top