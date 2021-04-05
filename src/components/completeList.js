import React, { useContext } from 'react'
import { CompleteContext } from '../store/complete/store'

const CompleteList = () => {
  const value = useContext(CompleteContext)

  return (
    <>
      <h2>COMPLETE</h2>
      <div className="habit-list">
        <ul>
          {value.state.map((t, index) => (
            <li 
              key={ index } 
              className="complete-habit"
            >
              <p>習慣：{ t.name }</p>
              <p>トリガー：{ t.triger }</p>
              <p>ジャンル：{ t.genre }</p>
            </li>
          ))
          }
        </ul>
      </div>
      <style jsx>
          {`
            .complete-habit{
              list-style:none;
            }
          `}
      </style>
    </>
  )
}

export default CompleteList