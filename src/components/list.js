import React, { useContext } from 'react'
import { Context } from '../store/habit/store'
import { CompleteContext } from '../store/complete/store'


const List = () => {
  const value = useContext(Context)
  const completeValue = useContext(CompleteContext)

  const handleDone = (t) =>{
    value.dispatch({type: 'DONE',id: t.id});
    complete(t);
  }

  // 24時間に一回TIMEを発動
  const time = setInterval(() =>{
    value.state.map(item => item.today === true ? 
      value.dispatch({type: 'TIME'})
      : item)
  },86400000)

  // buttonをt.todayによって切り替える
  const isInvalid = (t) =>{
    if(t.today === true){
      return true
    }else{
      return false
    }
  }

  // 行動30、身体90、思考180でCOMPLETEを発動
  const complete = (t) =>{
    if(t.genre === "行動習慣" && t.count === 29){
      value.dispatch({type: 'COMPLETE',id: t.id});
      completeValue.dispatch({type: 'POST', id: t.id, name: t.name, triger: t.triger, genre: t.genre})
      console.log(t.id)
    }else if(t.genre === "身体習慣" && t.count === 59){
      value.dispatch({type: 'COMPLETE',id: t.id});
      completeValue.dispatch({type: 'POST', id: t.id, name: t.name, triger: t.triger, genre: t.genre})
    }else if(t.genre === "思考習慣" && t.count === 89){
      value.dispatch({type: 'COMPLETE',id: t.id});
      completeValue.dispatch({type: 'POST', id: t.id, name: t.name, triger: t.triger, genre: t.genre})
    }
  }


  return (
    <>
      <div className="habit-list">
        <h2>HABITS</h2>
        <ul>
          {value.state.map((t, index) => (
            <li 
              key={ index } 
              className="habit"
            >
              <p>習慣：{ t.name }</p>
              <p>トリガー：{ t.triger }</p>
              <p>ジャンル：{ t.genre }</p>
              <p>回数：{ t.count }</p>
              {/* クリックした値のIDを取得すればOK */}
              {/* <button className="done-button" id={t.id} onClick={() => handleDone(t)} disabled={isInvalid(t)}>done</button> */}
              <button className="done-button" id={t.id} onClick={() => handleDone(t)}>done</button>
            </li>
          ))
          }
        </ul>
      </div>
      <style jsx>
          {`
            .habit{
              list-style:none;
            }
          `}
      </style>
    </>
  )
}

export default List