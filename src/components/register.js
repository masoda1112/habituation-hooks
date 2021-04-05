import React, { useState, useContext } from 'react'
import { Context } from '../store/habit/store'

const Register = () => {
  const [name, setName] = useState("")
  const [triger, setTriger] = useState("")
  const [genre, setGenre] = useState("")
  const initialId = 0
  const [id, setId] = useState(initialId)
  const value = useContext(Context)
  const handleNewName = (event) => {
    setName( event.target.value )
  }
  const handleNewTriger = (event) => {
    setTriger( event.target.value )
  }
  const handleNewGenre = (event) => {
    setGenre( event.target.value )
  }
  const handleNewId = () => {
    setId( id + 1 )
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    // フォームがからの時にタスクに追加しない→ボタンを押せないようにする
    if(name === '') return
    handleNewId(id);
    // todoに入力した文字が追加
    // setTodo(todos => [...todos,{ task, isCompleted: false}])
    value.dispatch({type: 'POST',id: id, name: name, triger: triger, genre: genre})
    // フォームに表示されている内容が削除
    console.log({value})
    setName('')
    setTriger('')
    setGenre('')
  }
  return (
    <>
      <div className="title">
        <h1 className="title-text">
          Habit Manager
        </h1>
      </div>
      <div className="add-habit">
        <h2 className="title">Add Habit</h2>
        {/* <form onSubmit={ handleSubmit }>
          habit : <input value={ title } placeholder="習慣化したいこと" onChange={handleNewTitle}/>
        </form> */}
        <form action="/my-handling-form-page" method="post" onSubmit={handleSubmit}>
          <ul className="add-form-list">
            <li className="add-form-part">
              <label for="name">Habit:</label>
              <input value={ name } type="text" id="name" name="habit_name" onChange={handleNewName}/>
            </li>
            <li className="add-form-part">
              <label for="triger">Triger:</label>
              <input value={ triger } type="text" id="triger" name="habit_triger" onChange={handleNewTriger}/>
            </li>
            <li className="add-form-part">
              <label for="genre">Genre:</label>
              <select value={ genre } id="genre" name="habit_type" onChange={handleNewGenre}>
                <option hidden>選択して下さい</option>
                <option>行動習慣</option>
                <option>身体習慣</option>
                <option>思考習慣</option>
              </select>
            </li>
            <li className="add-form-part">
                <button type="submit">Add</button>
            </li>
          </ul>
        </form>
      </div>
      <style jsx>
        {`
          .add-habit{
            height:auto;
          }
          .add-form-part{
            list-style:none;
          }
        `}
      </style>
    </>
  )
}

export default Register