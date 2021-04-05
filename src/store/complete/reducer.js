const reducer = (state=[], action) => {
  switch(action.type) {
    case 'POST':
      console.log(state)
     return [
      ...state,
      {
        id: action.id,
        name: action.name,
        triger: action.triger,
        genre: action.genre
      },
    ];
    default:
      return state
  }
}

export default reducer